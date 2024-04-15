const containerRoot = document.querySelector(".container-root");
const gacha1 = document.querySelector(".button-right .gacha1");
const gacha10 = document.querySelector(".button-right .gacha10");
const videoR = document.querySelector(".video-ssr");
const isMobile = window.matchMedia("(max-width: 600px)").matches;
// Item Gacha
let items = [
  document.querySelector(".item1"),
  document.querySelector(".item2"),
  document.querySelector(".item3"),
  document.querySelector(".item4"),
  document.querySelector(".item5"),
  document.querySelector(".item6"),
  document.querySelector(".item7"),
];

const pityCounter = document.querySelector(".pity");

const sound = document.querySelector(".sound");

let pity = 0;
gacha1.addEventListener("click", () => {
  // Sistem gacha

  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  videoR.style.display = "block";
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
    containerRoot.style.display = "none";
    randomItem.style.display = "block";
    sound.play();
    randomItem.addEventListener("click", () => {
      containerRoot.style.display = "block";
      randomItem.style.display = "none";
    });
    pity++;
    pityCounter.innerHTML = "Pity = " + pity;
    console.log(randomItem);
  });
});
