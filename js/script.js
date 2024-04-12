function rotateContent() {
  var screenWidth = window.innerWidth;
  var contentRight = document.querySelector(".container-gacha");
  var bodyElement = document.body;


  if (screenWidth < 800) {
    document.body.style.transform = "rotate(90deg)";
    document.body.style.transformOrigin = "bottom left";
  } else {
    document.body.style.transform = "none"; // Reset transform jika lebar layar >= 800px
  }
}

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener("DOMContentLoaded", rotateContent);
window.addEventListener("resize", rotateContent);
