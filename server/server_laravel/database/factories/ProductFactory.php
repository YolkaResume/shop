<?php

namespace Database\Factories;

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'price' => $faker->randomFloat(2, 1, 100),
        'amount' => $faker->numberBetween(1, 100),
        'category_id' => function () {
            // Если у вас есть отношение с категорией, здесь можно задать логику для выбора категории.
            return \App\Models\Category::inRandomOrder()->first()->id;
        },
    ];
});
