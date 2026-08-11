"use client";
import {FormEvent,useMemo,useState} from"react";

type Country="すべて"|"韓国"|"台湾"|"香港"|"タイ"|"シンガポール";
type EventType="すべて"|"コンサート"|"ファンミーティング"|"ポップアップ"|"スポーツ"|"チア"|"展示・撮影会";

const events=[
  // ── 韓国 ──
  {country:"韓国",city:"ソウル",  venue:"KSPO DOME",   date:"2026.08.23",title:"K-POP SUMMER ARENA 2026",     tag:"コンサート",      deadlineDays:21},
  {country:"韓国",city:"ソウル",  venue:"COEX Artium", date:"2026.09.05",title:"IVE FAN SIGN EVENT SEOUL",     tag:"ファンミーティング",deadlineDays:14},
  {country:"韓国",city:"ソウル",  venue:"올림픽공원",    date:"2026.09.12",title:"K-POP FAN MEET SEOUL 2026",   tag:"ファンミーティング",deadlineDays:14},
  {country:"韓国",city:"ソウル",  venue:"Lotte World",  date:"2026.09.20",title:"STRAY KIDS POP-UP STORE",     tag:"ポップアップ",     deadlineDays:7},
  {country:"韓国",city:"釜山",    venue:"BEXCO",        date:"2026.10.04",title:"BUSAN ONE ASIA FESTIVAL 2026", tag:"コンサート",      deadlineDays:30},
  {country:"韓国",city:"釜山",    venue:"해운대 야외특설",date:"2026.10.18",title:"BUSAN POP-UP WEEK",           tag:"ポップアップ",     deadlineDays:14},
  {country:"韓国",city:"ソウル",  venue:"잠실 올림픽 주경기장",date:"2026.10.25",title:"BTS PERMISSION TO DANCE CONCERT", tag:"コンサート",deadlineDays:60},
  {country:"韓国",city:"ソウル",  venue:"SM TOWN",      date:"2026.11.01",title:"aespa WORLD TOUR SEOUL",       tag:"コンサート",      deadlineDays:45},
  {country:"韓国",city:"インチョン",venue:"인천항 특설 무대",date:"2026.11.08",title:"K-CON INCHEON 2026",       tag:"コンサート",      deadlineDays:30},
  {country:"韓国",city:"ソウル",  venue:"KSPO DOME",    date:"2026.11.22",title:"TWICE BORN TO BE WORLD TOUR",  tag:"コンサート",      deadlineDays:45},
  {country:"韓国",city:"ソウル",  venue:"신한카드 FAN SQUARE",date:"2026.12.06",title:"SEVENTEEN FANMEETING",   tag:"ファンミーティング",deadlineDays:21},
  {country:"韓国",city:"ソウル",  venue:"COEX Hall",    date:"2026.12.20",title:"K-POP YEAR END CONCERT 2026", tag:"コンサート",      deadlineDays:21},
  // ── 台湾 ──
  {country:"台湾",city:"台北",    venue:"台北アリーナ",  date:"2026.08.29",title:"Jolin Tsai DANCE THE NIGHT AWAY", tag:"コンサート",  deadlineDays:21},
  {country:"台湾",city:"台北",    venue:"南港展覧館",    date:"2026.09.13",title:"台灣文博會 CREATIVE EXPO",     tag:"展示・撮影会",    deadlineDays:14},
  {country:"台湾",city:"台北",    venue:"台北ドーム",    date:"2026.10.03",title:"TAIPEI CHEER FEST 2026",       tag:"チア",           deadlineDays:21},
  {country:"台湾",city:"台中",    venue:"台中國際展覧中心",date:"2026.10.10",title:"TAICHUNG POP FESTIVAL",       tag:"コンサート",     deadlineDays:21},
  {country:"台湾",city:"台北",    venue:"信義区特設会場", date:"2026.10.24",title:"JAY CHOU POP-UP MUSEUM",      tag:"ポップアップ",    deadlineDays:14},
  {country:"台湾",city:"高雄",    venue:"高雄ドーム",    date:"2026.11.14",title:"MIRROR CONCERT KAOHSIUNG",     tag:"コンサート",     deadlineDays:30},
  {country:"台湾",city:"台北",    venue:"台北アリーナ",  date:"2026.11.28",title:"MAMAMOO RAINBOW TOUR TAIPEI",  tag:"コンサート",     deadlineDays:30},
  {country:"台湾",city:"台北",    venue:"圓山大飯店",   date:"2026.12.12",title:"台湾チア選手権 2026",           tag:"スポーツ",       deadlineDays:21},
  // ── 香港 ──
  {country:"香港",city:"香港",    venue:"AsiaWorld-Expo",date:"2026.09.06",title:"CANTOPOP MEGA CONCERT 2026",  tag:"コンサート",     deadlineDays:30},
  {country:"香港",city:"香港",    venue:"KITEC",        date:"2026.09.27",title:"HONG KONG K-POP FESTIVAL",    tag:"コンサート",     deadlineDays:21},
  {country:"香港",city:"香港",    venue:"九龍特設会場",  date:"2026.10.11",title:"MIRROR FANMEETING HK",        tag:"ファンミーティング",deadlineDays:14},
  {country:"香港",city:"香港",    venue:"香港コンベンション",date:"2026.11.07",title:"HK ANIME & POP CULTURE EXPO",tag:"展示・撮影会",  deadlineDays:21},
  // ── タイ ──
  {country:"タイ",city:"バンコク",venue:"Impact Arena",  date:"2026.09.20",title:"BTS POPUP STORE BANGKOK",    tag:"ポップアップ",    deadlineDays:14},
  {country:"タイ",city:"バンコク",venue:"Royal Paragon Hall",date:"2026.10.17",title:"K-POP FAN MEET BANGKOK", tag:"ファンミーティング",deadlineDays:21},
  {country:"タイ",city:"バンコク",venue:"MCC Hall",      date:"2026.11.21",title:"SEVENTEEN FANMEETING BANGKOK",tag:"ファンミーティング",deadlineDays:21},
  // ── シンガポール ──
  {country:"シンガポール",city:"シンガポール",venue:"Indoor Stadium",date:"2026.10.31",title:"K-POP MEGA SHOW SINGAPORE",tag:"コンサート",deadlineDays:30},
  {country:"シンガポール",city:"シンガポール",venue:"Marina Bay Sands",date:"2026.11.15",title:"BLACKPINK WORLD TOUR SG",tag:"コンサート",deadlineDays:45},
];

const routes=[
  {title:"航空券・ホテル",   text:"会場周辺と終演後の移動を基準に比較。早割は60日前が目安",        cta:"旅程から探す"},
  {title:"eSIM・海外Wi-Fi", text:"滞在日数と通信量から最適プランを比較。韓国はKT/SKT、台湾はChunghwa",cta:"通信を準備"},
  {title:"変換プラグ・旅行用品",text:"韓国C/Fタイプ・台湾A/Bタイプ・香港Gタイプを忘れず確認",     cta:"持ち物を見る"},
  {title:"旅行保険",        text:"欠航・遅延・携行品・現地病院を含む条件を比較",                    cta:"補償を確認"},
  {title:"現地交通・移動",  text:"ソウル地下鉄T-money・台北悠遊カード・バンコクBTS事前購入ガイド",  cta:"移動を調べる"},
  {title:"両替・送金",      text:"現地ATM・空港両替・カードレートを比較。クレカは手数料確認必須",   cta:"両替を比較"},
  {title:"ビザ・入国情報",  text:"韓国K-ETA・台湾ビザ免除・香港入境条件を事前確認する",            cta:"入国情報を見る"},
  {title:"現地グルメ・観光",text:"会場近くのコスパ良い食事・カフェ・推し活スポットをまとめて確認",  cta:"グルメを探す"},
];


export default function Home(){
  const[country,setCountry]=useState<Country>("すべて");
  const[eventType,setEventType]=useState<EventType>("すべて");
  const[email,setEmail]=useState("");
  const[favorite,setFavorite]=useState("");
  const[message,setMessage]=useState("");
  const filtered=useMemo(()=>events.filter(e=>(country==="すべて"||e.country===country)&&(eventType==="すべて"||e.tag===eventType)),[country,eventType]);
  async function subscribe(e:FormEvent){e.preventDefault();const response=await fetch("/api/subscriptions",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email,favorite,country,leadDays:14,consent:true})});setMessage(response.ok?"通知予約を受け付けました。":"登録できませんでした。");if(response.ok){setEmail("");setFavorite("")}}
  return <main>
<header><a href="#top" className="logo">OSHI<span>TRIP</span></a><nav><a href="#events">イベント</a><a href="#plan">旅の準備</a><a href="#alert">通知</a></nav></header>
<section className="hero" id="top"><div><p className="eyebrow">KOREA × TAIWAN × HK × ASIA OSHIKATSU</p><h1>推しに会う旅を、<br/><em>通知から始める。</em></h1><p>韓国・台湾・香港・タイ・シンガポールのライブ、ファンミ、チア、ポップアップを追いかけ、航空券・ホテル・通信・持ち物・両替まで一つの旅程にまとめます。</p><div className="chips"><span>新着イベント</span><span>発売・申込期限</span><span>渡航準備</span><span>値下げ通知</span></div></div><aside><b>NEXT TRIP</b><strong>14</strong><span>日前から準備通知</span><ol><li>チケット情報を確認</li><li>航空券・ホテル比較</li><li>eSIM・変換プラグ</li><li>両替・ビザ確認</li></ol></aside></section>
<section className="filter"><div><p className="eyebrow">DISCOVER</p><h2>どこへ推しに行く？</h2></div><div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"8px"}}>{(["すべて","韓国","台湾","香港","タイ","シンガポール"] as Country[]).map(item=><button className={country===item?"on":""} onClick={()=>setCountry(item)} key={item}>{item}</button>)}</div><div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>{(["すべて","コンサート","ファンミーティング","ポップアップ","スポーツ","チア","展示・撮影会"] as EventType[]).map(item=><button className={eventType===item?"on":""} onClick={()=>setEventType(item)} key={item} style={{fontSize:".78rem",padding:"5px 12px"}}>{item}</button>)}</div><p style={{fontSize:".78rem",color:"#8b8099",marginTop:"10px"}}>{filtered.length}件のイベント</p></section>
<section className="events" id="events">{filtered.map((event,index)=><article key={event.title}><div><span>{event.country}・{event.city}</span><b>{String(index+1).padStart(2,"0")}</b></div><time>{event.date}</time><h2>{event.title}</h2><p>{event.tag}{event.venue&&<span style={{marginLeft:"8px",fontSize:".75rem",color:"#a78bfa"}}>📍{event.venue}</span>}</p><small style={{color:"#a0aec0",fontSize:".72rem"}}>※設計検証用の参考情報。参加前に必ず公式サイトで確認してください。チケット購入{event.deadlineDays}日前通知対応。</small><button onClick={()=>{setFavorite(event.title);document.querySelector("#alert")?.scrollIntoView({behavior:"smooth"})}}>このイベントを通知</button></article>)}</section>
<section className="plan" id="plan"><div><p className="eyebrow">REVENUE ROUTES</p><h2>通知から予約・準備へ。</h2></div>{routes.map((route,index)=><article key={route.title}><b>{String(index+1).padStart(2,"0")}</b><h3>{route.title}</h3><p>{route.text}</p><a href="#disclosure">{route.cta} →</a></article>)}</section>
<section className="alert" id="alert"><div><p className="eyebrow">SMART ALERT</p><h2>推し旅通知を予約</h2><p>新着、申込期限、価格変動、出発14日前の準備をまとめて通知します。</p></div><form onSubmit={subscribe}><label>推し・イベント名<input value={favorite} onChange={e=>setFavorite(e.target.value)} required placeholder="例：BTS、TWICE、チアイベント名"/></label><label>対象地域<select value={country} onChange={e=>setCountry(e.target.value as Country)}><option value="すべて">韓国・台湾・香港・アジア全域</option><option value="韓国">韓国</option><option value="台湾">台湾</option><option value="香港">香港</option><option value="タイ">タイ</option><option value="シンガポール">シンガポール</option></select></label><label>メールアドレス<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com"/></label><label className="consent"><input type="checkbox" required/> 通知とプライバシー方針に同意する</label><button>無料で通知予約</button><p aria-live="polite">{message}</p></form></section>
<footer id="disclosure"><div className="logo">OSHI<span>TRIP</span></div><p>広告リンクを含む予定です。掲載順位は報酬額だけで決定しません。イベント情報は必ず主催者・公式販売元で最終確認してください。</p><span>運営方針　広告表記　通知停止</span></footer></main>}