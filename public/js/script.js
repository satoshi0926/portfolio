$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  // メール送信処理
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('send.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.text())
    .then(text => {
      document.getElementById('responseMessage').style.display = 'block';
      document.getElementById('responseMessage').textContent = text;
      e.target.style.display = 'none';
    })
    .catch(() => {
      document.getElementById('responseMessage').style.display = 'block';
      document.getElementById('responseMessage').textContent = '送信中にエラーが発生しました。';
    });
  });

});
