<?php
// app/Http/Controllers/ArticleController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; // Предполагается, что ваша модель называется Article

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
    $product->photo = $request->input('photo');
    $product->category_id = 1;

    $product->save();

    return response()->json([
        "name" => $product->name,
        "price" => $product->price,
        "amount" => $product->amount,
        "photo" => $product->photo,
    ]);
}

    
}
