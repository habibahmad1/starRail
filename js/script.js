function rotateContent() {
  var screenWidth = window.innerWidth;
  var contentRight = document.querySelector(".container-gacha");

  if (screenWidth < 800) {
    contentRight.style.transform = "rotate(90deg)";
    contentRight.style.transformOrigin = "bottom left";
  } else {
    contentRight.style.transform = "none"; // Reset transform jika lebar layar >= 800px
  }
}

// Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener("DOMContentLoaded", rotateContent);
window.addEventListener("resize", rotateContent);
