<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'id' => 100,
                'name' => 'Andre',
                'email' => 'demo1@fakemail.ru',
                'password' => Hash::make('demo1Pass')
            ],
            [
                'id' => 101,
                'name' => 'Tony',
                'email' => 'demo2@fakemail.ru',
                'password' => Hash::make('demo2Pass')
            ],
            [
                'id' => 102,
                'name' => 'Mikle',
                'email' => 'demo3@fakemail.ru',
                'password' => Hash::make('demo3Pass')
            ],
            [
                'id' => 103,
                'name' => 'Eugene',
                'email' => 'demo4@fakemail.ru',
                'password' => Hash::make('demo4Pass')
            ]
        ]);
    }
}
