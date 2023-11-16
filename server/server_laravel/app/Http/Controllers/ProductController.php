<?php
// app/Http/Controllers/ArticleController.php

namespace App\Http\Controllers;

use App\Mail\OrderMailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Product;

use App\Models\Order;
use App\Models\OrderItem;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function save(Request $request)
    {

        $id = $request->input('id');

        $product = Product::find($id);

        if (!$product) {
            return response()->json(["error" => "Product not found"], 404);
        }

        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->amount = $request->input('amount');

        $product->save();

        return response()->json([
            "name" => $product->name,
            "price" => $product->price,
            "amount" => $product->amount,
            "id" => $product->id,
        ]);
    }

    public function add(Request $request)
    {
        $product = new Product();
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->amount = $request->input('amount');
        $product->category_id = $request->input('category');

        $path = $request->file('photo')->getRealPath();
        $logo = file_get_contents($path);
        $base64 = base64_encode($logo);
        $product->photo = $base64;



        $product->save();

        return response()->json([
            "artcle" => "added"
        ]);
    }



    public function sendMail($email, $data,$adress)
    {

        Mail::to($email)->send(new OrderMailable($data,$adress));

        return 'Email sent successfully!';
    }

    public function buy(Request $request)
{
    $items = $request->input('items');
    $email = $request->input('email');
    $adress = $request->input('adress');

    // Create a new order
    $order = new Order();
    $order->customer_name = $email; // You might want to adjust this depending on your use case
    $order->adress = $adress; // You might want to adjust this depending on your use case
    $order->order_date = now(); // Assuming you want to set the order date to the current date and time
    $order->save();

    foreach ($items as $item) {
        $productId = $item['id'];
        $quantityToSubtract = $item['quantity'];

        $product = Product::find($productId);

        if ($product) {
            if ($product->amount >= $quantityToSubtract) {
                // Subtract the purchased quantity from the product's stock
                $product->amount -= $quantityToSubtract;
                $product->save();

                // Record the purchased item in the order_items table
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id; // Use the ID of the newly created order
                $orderItem->product_id = $product->id;
                $orderItem->quantity = $quantityToSubtract;
                $orderItem->save();
            } else {
                // Rollback changes if there's not enough stock
                $order->delete();
                return response()->json(['message' => 'Недостаточное количество товара'], 400);
            }
        } else {
            // Rollback changes if the product is not found
            $order->delete();
            return response()->json(['message' => 'Товар не найден'], 404);
        }
    }

    // Send email and return success message
    $this->sendMail($email, $items, $adress);
    return response()->json(['message' => 'succesfuly buyed']);
}
}
