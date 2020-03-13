<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Chat;
use App\Observers\MensajeObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Chat::observe(MensajeObserver::class);
    }
}
