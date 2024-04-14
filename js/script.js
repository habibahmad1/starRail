const gacha1 = document.querySelector(".button-right .gacha1");
const gacha10 = document.querySelector(".button-right .gacha10");
const videoR = document.querySelector(".video-r");

gacha1.addEventListener("click", () => {
  videoR.style.display = "block";
  videoR.play();

  videoR.addEventListener("ended", () => {
    videoR.style.display = "none";
  });
});
