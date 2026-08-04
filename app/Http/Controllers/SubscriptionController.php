<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'favorite' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'consent' => ['accepted'],
        ]);

        Subscription::create([
            'email' => $validated['email'],
            'favorite' => $validated['favorite'],
            'country' => $validated['country'],
            'lead_days' => 14,
            'consent' => true,
            'status' => 'pending',
        ]);

        return back()->with('status', '通知登録を受け付けました。確認メールを送信するまで今しばらくお待ちください。');
    }
}
