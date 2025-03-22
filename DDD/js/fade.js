$(function(){
    const images = document.querySelectorAll('#slideshow img');
  let currentIndex = 0;

  setInterval(() => {
    const currentImage = images[currentIndex];
    currentImage.classList.remove('active');

    // 次の画像のインデックスを計算
    currentIndex = (currentIndex + 1) % images.length;

    const nextImage = images[currentIndex];
    nextImage.classList.add('active');
  }, 6000); // 2秒ごとに切り替え
});