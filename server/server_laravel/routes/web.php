<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AdminController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/products', [ProductController::class,'index']);
Route::post('/api/products/buy', [ProductController::class,'buy']);
Route::get('/api/categories', [CategoryController::class,'index']);
Route::post('/api/add/article', [ProductController::class,'add']);
Route::post('/api/save/article', [ProductController::class,'save']);
Route::post('/api/add/category', [CategoryController::class,'add']);
Route::post('/api/login/admin', [AdminController::class,'login']);
