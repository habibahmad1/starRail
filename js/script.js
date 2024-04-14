const gacha1 = document.querySelector(".button-right .gacha1");
const gacha10 = document.querySelector(".button-right .gacha10");
const videoR = document.querySelector(".video-r");
const isMobile = window.matchMedia("(max-width: 600px)").matches;

gacha1.addEventListener("click", () => {
  videoR.style.display = "block";
  videoR.removeAttribute("controls");
  videoR.play();
  if (isMobile) {
    // Menambahkan event listener untuk menangani ketika video dimulai
    videoR.addEventListener("playing", function () {
      // Mengaktifkan mode layar penuh hanya pada perangkat seluler
      if (videoR.requestFullscreen) {
        videoR.requestFullscreen();
      } else if (videoR.webkitEnterFullscreen) {
        // Untuk browser WebKit seperti Safari
        videoR.webkitEnterFullscreen();
      }
    });
  }

  videoR.addEventListener("ended", () => {
    videoR.style.display = "none";
  });
});
