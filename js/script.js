// ナビゲーション
$(".openbtn").click(function () {
    $(this).toggleClass('active'); // ボタンの形を変える
    $("nav").toggleClass('active'); // ★追加：ナビゲーションを表示させる
});

// ナビを上部に固定する
//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('#header').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('#header').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});





// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".eachTextAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '' + t + '';
				} else {
					var n = i / 10;
					textbox += '' + t + '';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// スライドショー
// 1. 【誰が】すべてのスライド（.slide）をまとめてJavaScriptに連れてくる
const slides = document.querySelectorAll('.custom-slider .slide');
let currentIndex = 0; // 現在表示しているスライドの番号（0番目＝1枚目）

// 2. 【どうなる】スライドを切り替える関数（命令のまとまり）を作る
function changeSlide() {
  // まず、今表示されているスライドから「active」クラスを消して透明にする
  slides[currentIndex].classList.remove('active');

  // 次のスライド番号に進める（最後の枚数に達したら 0 に戻す計算）
  currentIndex = (currentIndex + 1) % slides.length;

  // 新しいスライドに「active」クラスをつけて、ふわっと表示させる
  slides[currentIndex].classList.add('active');
}

// 3. 【いつ】ページが読み込まれてから「4秒ごと（4000ミリ秒）」に上の関数を実行する
setInterval(changeSlide, 3000);



// アニメーション
// 1. 【誰を】h2、ギャラリーの枠、サービスカードのすべてを監視対象にする
// カンマ（,）で区切ることで、複数の要素をまとめて指定できます！
const animationTargets = document.querySelectorAll('body h2, .gallery-item, .work-card');

// 2. 【どうなったらどうする】画面に表示されたときの動き
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1 // 10%くらい画面に入ったらすぐにアニメーションを開始
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // 画面に入ってきた要素に「show」クラスをつける
      entry.target.classList.add('show');
      // 一度アニメーションしたら監視を終了する
      observer.unobserve(entry.target);
    }
  });
}, options);

// 3. 【いつ】ページ上のすべての対象要素に監視を開始する
animationTargets.forEach(function(target) {
  observer.observe(target);
});