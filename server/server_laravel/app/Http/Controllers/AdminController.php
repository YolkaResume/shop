<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function login(Request $request){
        $username = $request->input("username");
        $password = $request->input("password");
    
        // Ищем администратора по имени пользователя
        $admin = Admin::where('username', $username)->first();
    
        if ($admin) {
            // Если администратор с таким именем пользователя найден, проверьте пароль
            if ($admin->password === $password) {
                // Пароль совпадает, администратор существует
                return response()->json(['success' => true]);
            }
        }
    
        // Если администратор не был найден или пароль не совпал, верните false
        return response()->json(['success' => false]);
    }
    
}
