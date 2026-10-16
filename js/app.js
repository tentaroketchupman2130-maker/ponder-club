/* ==========================================================================
   PONDER CLUB | Core E-Commerce & Interactive Store Application
   ========================================================================== */

const PONDER_PRODUCTS = [
  {
    id: 'prod-01',
    sku: '01',
    name: 'shape shift memo',
    kanjiName: '磨かれる付箋',
    pageIndex: '3',
    price: 1980,
    priceFormatted: '¥1,980',
    tag: 'RIVER STONE MEMO',
    catchphrase: '考える過程を視覚化する',
    desc: '川底にある石が水に流されて丸くなっていくように、形と色が少しずつ違う4つの付箋のセットです。「なんでだろう？」と疑問に思ったときは角のある黒い付箋、あれこれ調べている途中は中間のグレー、そして「わかった！」と答えが出たときには丸くて白い付箋を貼ります。ノートやプリントに貼っていくだけで、自分がどこまで深く考え進んだかがパッとひと目でわかります。',
    specs: {
      '内容量': '4種付箋セット（四角〜丸み・グラデーション）',
      '用紙': '竹尾製紙 高級筆記紙（万年筆・鉛筆最適化）',
      '寸法': 'W80 × D80 × H85 mm',
      '産地': '日本・東京（職人手仕上げ）'
    },
    image: 'assets/images/shape_shift_memo_1.png',
    sandboxId: 'sandbox-01'
  },
  {
    id: 'prod-02',
    sku: '02',
    name: 'think layer',
    kanjiName: '深掘りルーズリーフ',
    pageIndex: '4',
    price: 3520,
    priceFormatted: '¥3,520',
    tag: 'STATIONERY',
    catchphrase: '「考えること」と向き合う',
    desc: '問いを書いたオレンジの紙の上に、考えたことを書いたグレーの紙をどんどん重ねていくルーズリーフです。ベースとなる問いを常に見つめながら考えを深められるため、途中で思考がブレたり脱線したりしません。あとからページをめくって振り返ったときにも、自分がどんなプロセスで考えを積み重ねてきたのか、その深まりの形跡がひと目でわかります。',
    specs: {
      '構造': '10階層等高線コンターカット + 5mm方眼80枚',
      '規格': 'A5規格 / 20穴ルーズリーフバインダー対応',
      '紙質': 'クラフト生成り紙 + コア層特殊蛍光オレンジ紙',
      '企画': 'PONDER CLUB × KOKUYO DESIGN PHILOSOPHY'
    },
    image: 'assets/images/think_layer.jpg',
    sandboxId: 'sandbox-02'
  },
  {
    id: 'prod-03',
    sku: '03',
    name: 'blur log',
    kanjiName: '思考の砂',
    pageIndex: '5',
    price: 8800,
    priceFormatted: '¥8,800',
    tag: 'ZEN AMBIENT TRAY',
    catchphrase: 'ぼんやり考える',
    desc: '砂と木の枝を使って、文字や絵をかくことができます。スマホやノートのように、かいたものをずっと残しておくことはできませんし、線もぼんやりとしか残りません。それでも、砂に枝を走らせる手の感覚は、考える頭を心地よく刺激してくれます。頭に浮かんだアイデアを、砂に書いてはサッと消す。それをくり返しながら、自由に考える時間を楽しんでください。',
    specs: {
      'トレイ素材': 'アルミニウム切削・マットブラックアルマイト加工',
      'トレイ寸法': 'W240 × D150 × H18 mm',
      '内容物': 'トレイ本体、特選白珪砂250g、真鍮スタイラスペン、木製レベラー',
      '重量': '約 680g（砂含む）'
    },
    image: 'assets/images/blur_log.jpg',
    sandboxId: 'sandbox-03'
  },
  {
    id: 'prod-04',
    sku: '04',
    name: 'task progress sheet',
    kanjiName: '作業進捗ポスター',
    pageIndex: '6',
    price: 2420,
    priceFormatted: '¥2,420',
    tag: 'A0 OVERVIEW POSTER',
    catchphrase: '計画的に考える',
    desc: 'やることがどれくらい進んだかが、パッと見てすぐわかるポスターです。じっくり考えたい大事なことほど「太いマス」に書きこんで、進んだ分だけシートをペリペリとめくっていきます。進むにつれてきれいな色の帯が垂れ下がってくる仕組みです。壁に貼っておくだけで、「いま自分が何をどれくらい深く考えたか」がひと目でわかります。',
    specs: {
      'サイズ': 'A0規格（W841 × H1189 mm）',
      '用紙': '微塗工マットコート紙 135kg',
      '付属品': '特製蛍光ネオングリーン・シグナルオレンジテープ各1巻、ピン6個',
      '仕様': 'ロール紙筒パッケージ入り'
    },
    image: 'assets/images/task_progress.jpg',
    sandboxId: 'sandbox-04'
  },
  {
    id: 'prod-05',
    sku: 'BOX',
    name: 'ponder box special edition',
    kanjiName: '熟考者専用限定ボックス',
    pageIndex: 'SPECIAL',
    price: 15400,
    priceFormatted: '¥15,400',
    tag: 'COLLECTORS SET',
    catchphrase: '思考を肯定する、すべての道具を収めた桐箱パッケージ。',
    desc: '上記4つのシグネチャープロダクトすべてに加えて、非売品の「OVER THINKERS」特製シリアルナンバー入りアルミ定規、蛍光オレンジブックマークリボンを同梱した特装桐箱エディション。',
    specs: {
      '同梱物': '磨かれる付箋、深掘りルーズリーフ、思考の砂、進捗ポスター、特製定規',
      'パッケージ': '越前和紙貼り特装ボックス（シリアルナンバー入り）',
      '限定数': '初回生産200セット限定'
    },
    image: 'assets/images/exhibit_art.jpg',
    sandboxId: null
  }
];

class PonderApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get('scroll');
    if (scrollTarget) {
      const target = document.getElementById(scrollTarget);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    }
  }

  setupEventListeners() {
    // Smooth navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  showToast(message) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.ponderApp = new PonderApp();
  initBrandCustomCursor();
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTarget = urlParams.get('scroll');
  if (scrollTarget) {
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ block: 'start' });
    }
  }
});

/* ==========================================================================
   Rotating Brand Custom Cursor
   ========================================================================== */
function initBrandCustomCursor() {
  const cursor = document.getElementById('brandCustomCursor');
  if (!cursor) return;

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  document.body.classList.add('has-custom-cursor');

  let isVisible = false;

  window.addEventListener('pointermove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    if (!isVisible) {
      cursor.classList.add('is-visible');
      isVisible = true;
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-visible');
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursor.classList.add('is-visible');
    isVisible = true;
  });

  window.addEventListener('mousedown', () => {
    cursor.classList.add('is-pressed');
  });

  window.addEventListener('mouseup', () => {
    cursor.classList.remove('is-pressed');
  });
}



