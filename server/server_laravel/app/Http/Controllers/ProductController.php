<?php
// app/Http/Controllers/ArticleController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        "artcle"=>"added"
    ]);
}

    
}
