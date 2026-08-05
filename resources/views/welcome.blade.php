<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>OSHI TRIP｜韓国・台湾の推し活遠征 準備ガイド</title>
  <meta name="description" content="韓国・台湾への推し活遠征(ライブ・ファンミ・イベント)に向けた航空券・ホテル・通信・持ち物準備をまとめたガイド。渡航14日前からの準備を通知でサポートします。">
  <link rel="canonical" href="{{ url()->current() }}">
  <meta property="og:site_name" content="OSHI TRIP">
  <meta property="og:type" content="website">
  <meta property="og:title" content="OSHI TRIP｜韓国・台湾の推し活遠征 準備ガイド">
  <meta property="og:description" content="韓国・台湾への推し活遠征に向けた準備ガイドと、渡航前の通知サービス。">
  <script type="application/ld+json">{"@@context":"https://schema.org","@@type":"WebSite","name":"OSHI TRIP","url":"{{ url('/') }}"}</script>

  @if(config('services.ga4.id'))
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('services.ga4.id') }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{ config('services.ga4.id') }}');
  </script>
  @endif

  <style>
    :root { --ink:#231824; --bg:#fff8fb; --accent:#ff5d8f; --accent-dark:#c93368; --line:#f0d9e3; --muted:#8a7580; }
    * { box-sizing:border-box; }
    body { margin:0; font-family:"Hiragino Sans","Yu Gothic",sans-serif; color:var(--ink); background:var(--bg); line-height:1.75; }
    a { color:var(--accent-dark); }
    header { display:flex; align-items:center; justify-content:space-between; padding:18px 24px; border-bottom:1px solid var(--line); background:#fff; }
    .logo { font-weight:900; font-size:1.2rem; text-decoration:none; color:var(--ink); }
    .logo span { color:var(--accent); }
    nav a { margin-left:18px; font-size:.85rem; text-decoration:none; color:var(--ink); }
    .wrap { max-width:920px; margin:0 auto; padding:0 20px; }
    .hero { padding:56px 0 40px; }
    .eyebrow { color:var(--accent-dark); font-weight:800; font-size:.8rem; letter-spacing:.12em; }
    h1 { font-size:2.1rem; line-height:1.4; margin:12px 0; }
    h1 em { color:var(--accent-dark); font-style:normal; }
    .lead { color:var(--muted); max-width:560px; }
    section { padding:36px 0; border-top:1px solid var(--line); }
    h2 { font-size:1.3rem; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:20px; }
    .card { background:#fff; border:1px solid var(--line); border-radius:10px; padding:20px; }
    .card b { display:block; color:var(--accent-dark); font-size:.8rem; margin-bottom:8px; }
    form { background:#fff; border:1px solid var(--line); border-radius:12px; padding:28px; max-width:480px; margin-top:20px; }
    label { display:block; margin-bottom:14px; font-size:.9rem; }
    input[type=text], input[type=email], select { width:100%; padding:10px; border:1px solid var(--line); border-radius:6px; margin-top:6px; font-size:.95rem; }
    .consent { display:flex; align-items:flex-start; gap:8px; font-size:.8rem; color:var(--muted); }
    .consent input { width:auto; margin-top:3px; }
    button { background:var(--accent); color:#fff; border:0; padding:12px 22px; border-radius:8px; font-weight:800; cursor:pointer; font-size:.95rem; }
    button:hover { background:var(--accent-dark); }
    footer { padding:30px 0; color:var(--muted); font-size:.75rem; border-top:1px solid var(--line); }
    .status { margin-top:12px; font-size:.85rem; color:var(--accent-dark); }
    .disclaimer { background:#fdf1f5; border:1px solid var(--line); border-radius:8px; padding:14px 18px; font-size:.8rem; color:var(--muted); margin-top:24px; }
  </style>
</head>
<body>
  <header>
    <a href="#top" class="logo">OSHI<span>TRIP</span></a>
    <nav><a href="#prep">準備ガイド</a><a href="#alert">通知登録</a></nav>
  </header>

  <div class="wrap">
    <section class="hero" id="top">
      <p class="eyebrow">KOREA × TAIWAN × OSHIKATSU TRAVEL</p>
      <h1>推しに会う旅を、<br><em>準備から迷わない。</em></h1>
      <p class="lead">韓国・台湾への推し活遠征(ライブ・ファンミーティング・イベント参加)に向けて、航空券・ホテル・通信手段・持ち物の準備ポイントをまとめました。渡航14日前を目安に、準備の通知登録もできます。</p>
    </section>

    <section id="prep">
      <p class="eyebrow">TRAVEL PREP</p>
      <h2>遠征前に確認しておきたいこと</h2>
      <div class="grid">
        <div class="card"><b>航空券・ホテル</b>会場までのアクセスと、終演後の移動時間を基準に宿泊エリアを選ぶと安心です。深夜発着の便は事前に交通手段を確認しておきましょう。</div>
        <div class="card"><b>通信手段</b>eSIMや海外用WiFiは、滞在日数と通信量に応じて選びます。チケット抽選・先着申込は通信の安定性が重要です。</div>
        <div class="card"><b>電源プラグ</b>韓国はCタイプ・SEタイプ、台湾はAタイプが主流です。変換プラグと、必要ならモバイルバッテリーを準備しましょう。</div>
        <div class="card"><b>旅行保険</b>欠航・遅延・携行品の補償内容を事前に比較しておくと、当日のトラブルに備えられます。</div>
      </div>
    </section>

    <section id="alert">
      <p class="eyebrow">NOTIFY</p>
      <h2>渡航準備の通知を登録</h2>
      <p>応援しているアーティスト・チームと渡航予定地域を登録すると、準備の目安となる通知を受け取れます。</p>

      <form method="POST" action="{{ route('subscriptions.store') }}">
        @csrf
        <label>推し・応援対象<input type="text" name="favorite" required placeholder="例：グループ名、選手名、チーム名" value="{{ old('favorite') }}"></label>
        <label>渡航予定地域
          <select name="country">
            <option {{ old('country') === '韓国・台湾' ? 'selected' : '' }}>韓国・台湾</option>
            <option {{ old('country') === '韓国' ? 'selected' : '' }}>韓国</option>
            <option {{ old('country') === '台湾' ? 'selected' : '' }}>台湾</option>
          </select>
        </label>
        <label>メールアドレス<input type="email" name="email" required placeholder="you@example.com" value="{{ old('email') }}"></label>
        <label class="consent"><input type="checkbox" name="consent" required> 通知の受け取りとプライバシーポリシーに同意します</label>
        <button type="submit">通知登録する</button>
        @if(session('status'))
          <p class="status">{{ session('status') }}</p>
        @endif
        @error('email')<p class="status">{{ $message }}</p>@enderror
      </form>

      <div class="disclaimer">現在、通知対象となる具体的なイベント情報の掲載準備を進めています。登録いただいたメールアドレスには、渡航準備に関する一般的な情報および、確認が取れたイベント情報のみをお送りします。</div>
    </section>
  </div>

  <footer>
    <div class="wrap">
      <p>本サイトは推し活遠征の準備をサポートする情報サイトです。掲載する旅行関連リンクには広告を含む場合があります。イベント情報は必ず主催者・公式発表でご確認ください。</p>
      <p>&copy; {{ date('Y') }} OSHI TRIP</p>
    </div>
  </footer>
</body>
</html>
