<?php
// app/Http/Controllers/ArticleController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; // Предполагается, что ваша модель называется Article

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all(); // Получаем список товаров из базы данных

        return response()->json($products); // Отправляем список товаров в формате JSON
    }
}
