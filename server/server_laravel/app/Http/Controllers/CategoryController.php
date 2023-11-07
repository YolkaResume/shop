<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return response()->json($categories); 
    }

    public function add(Request $request)
    {
        $name = $request->input('name');

        $category = new Category();
        $category->name = $name;
        $category->save();
    
        return response()->json(['message' => 'Category added successfully']);
    }
}
