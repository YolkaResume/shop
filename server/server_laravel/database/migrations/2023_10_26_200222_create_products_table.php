<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->decimal('price', 10, 2);
        $table->integer('amount');
        $table->unsignedBigInteger('category_id');
        $table->foreign('category_id')->references('id')->on('categories');
        $table->binary('photo'); // Поле для фотографии в виде BLOB
        $table->timestamps();
    });
}


    public function down()
    {
        Schema::dropIfExists('products');
    }
}