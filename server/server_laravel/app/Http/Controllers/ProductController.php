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

    public function save(Request $request)
    {
        $name = $request->input('name');
    $price = $request->input('price');
    $amount = $request->input('amount');

    // Ваш код сохранения данных

    // Верните данные, которые вы хотите вернуть в ответе
    return response()->json([
        'name' => $name,
        'price' => $price,
        'amount' => $amount,
        'ok'=>"true",
    ]);
    }
}
