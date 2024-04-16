const containerRoot = document.querySelector(".container-root");
const gacha1 = document.querySelector(".button-right .gacha1");
const gacha10 = document.querySelector(".button-right .gacha10");
const videoR = document.querySelector(".video-r");
const videoSR = document.querySelector(".video-sr");
const videoSSR = document.querySelector(".video-ssr");
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
  document.querySelector(".item8"),
  document.querySelector(".item9"),
];

const pityCounter = document.querySelector(".pity");

const sound = document.querySelector(".sound");

let pity = 0;
gacha1.addEventListener("click", () => {
  // Sistem gacha

  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  items.forEach((item) => {
    item.style.display = "none";
  });

  if (randomItem === items[7]) {
    videoSR.style.display = "block";
    videoSR.play();
    if (isMobile) {
      videoSR.addEventListener("playing", function () {
        // Mengaktifkan mode layar penuh hanya pada perangkat seluler
        if (videoSR.requestFullscreen) {
          videoSR.requestFullscreen();
        } else if (videoSR.webkitEnterFullscreen) {
          videoSR.webkitEnterFullscreen();
        }
      });
    }

    videoSR.addEventListener("ended", () => {
      videoSR.style.display = "none";
      containerRoot.style.display = "none";
      randomItem.style.display = "block";
      sound.play();
      randomItem.addEventListener("click", () => {
        containerRoot.style.display = "block";
        randomItem.style.display = "none";
      });
      pity++;
      pityCounter.innerHTML = "Pity : " + pity;
      console.log(randomItem);
    });
  } else if (randomItem === items[8]) {
    videoSSR.style.display = "block";
    videoSSR.play();
    if (isMobile) {
      videoSSR.addEventListener("playing", function () {
        // Mengaktifkan mode layar penuh hanya pada perangkat seluler
        if (videoSSR.requestFullscreen) {
          videoSSR.requestFullscreen();
        } else if (videoSSR.webkitEnterFullscreen) {
          videoSSR.webkitEnterFullscreen();
        }
      });
    }

    videoSSR.addEventListener("ended", () => {
      videoSSR.style.display = "none";
      containerRoot.style.display = "none";
      randomItem.style.display = "block";
      sound.play();
      randomItem.addEventListener("click", () => {
        containerRoot.style.display = "block";
        randomItem.style.display = "none";
      });
      pity++;
      pityCounter.innerHTML = "Pity : " + pity;
      console.log(randomItem);
    });
  } else {
    videoR.style.display = "block";
    videoR.play();
    if (isMobile) {
      videoR.addEventListener("playing", function () {
        // Mengaktifkan mode layar penuh hanya pada perangkat seluler
        if (videoR.requestFullscreen) {
          videoR.requestFullscreen();
        } else if (videoR.webkitEnterFullscreen) {
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
      pityCounter.innerHTML = "Pity : " + pity;
      console.log(randomItem);
    });
  }
});
