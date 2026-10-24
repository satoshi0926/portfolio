/* 画像がクリックされたらポップアップで拡大表示 */
document.getElementById('screenshot').addEventListener('click', () => {
  document.getElementById('popup-img').src = document.getElementById('screenshot-img').src;
  document.getElementById('overlay').style.display = 'flex';
});
document.getElementById('overlay').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
});