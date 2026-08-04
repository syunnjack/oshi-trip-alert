<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $fillable = ['email', 'favorite', 'country', 'lead_days', 'consent', 'status'];

    protected $casts = [
        'consent' => 'boolean',
    ];
}
