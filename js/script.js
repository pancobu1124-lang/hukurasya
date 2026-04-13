// ナビゲーション
$(".openbtn").click(function () {
    $(this).toggleClass('active'); // ボタンの形を変える
    $("nav").toggleClass('active'); // ★追加：ナビゲーションを表示させる
});