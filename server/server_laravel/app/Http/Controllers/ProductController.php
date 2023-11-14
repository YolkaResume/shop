<?php
// app/Http/Controllers/ArticleController.php

namespace App\Http\Controllers;

use App\Mail\OrderMailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json($products);
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



    public function sendMail($email,$data)
    {

        Mail::to($email)->send(new OrderMailable($data));

        return 'Email sent successfully!';
    }

    public function buy(Request $request)
    {
        $items = $request->input('items');
        $email = $request->input('email');
        foreach ($items as $item) {
            $productId = $item['id'];
            $quantityToSubtract = $item['quantity'];
    
            // Находим товар по его ID
            $product = Product::find($productId);
    
            // Проверяем, что товар найден
            if ($product) {
                // Проверяем, что у товара достаточное количество для вычитания
                if ($product->amount >= $quantityToSubtract) {
                    // Вычитаем количество товара и сохраняем изменения
                    $product->amount -= $quantityToSubtract;
                    $product->save();
                } else {
                    // Обработка случая, когда запрошенное количество больше, чем имеется в наличии
                    // Можно выбросить исключение или выполнить другие действия
                    // Например, вернуть ошибку клиенту
                    return response()->json(['message' => 'Недостаточное количество товара'], 400);
                }
            } else {
                // Обработка случая, когда товар не найден по ID
                // Можно выбросить исключение или выполнить другие действия
                // Например, вернуть ошибку клиенту
                return response()->json(['message' => 'Товар не найден'], 404);
            }
        }
    
        // Все товары успешно обновлены
        $this->sendMail($email,$items);
        return response()->json(['message' => 'Количество товаров успешно обновлено']);

    }
}
