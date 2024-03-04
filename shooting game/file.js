let cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9,
  cat10,
  cat11,
  cat12,
  cat13,
  cat14,
  cat15,
  cat16,
  cat17,
  cat18,
  cat19,
  cat20;
cat1 = document.querySelector("#cat1");
cat2 = document.querySelector("#cat2");
cat3 = document.querySelector("#cat3");
cat4 = document.querySelector("#cat4");
cat5 = document.querySelector("#cat5");
cat6 = document.querySelector("#cat6");
cat7 = document.querySelector("#cat7");
cat8 = document.querySelector("#cat8");
cat9 = document.querySelector("#cat9");
cat10 = document.querySelector("#cat10");
cat11 = document.querySelector("#cat11");
cat12 = document.querySelector("#cat12");
cat13 = document.querySelector("#cat13");
cat14 = document.querySelector("#cat14");
cat15 = document.querySelector("#cat15");
cat16 = document.querySelector("#cat16");
cat17 = document.querySelector("#cat17");
cat18 = document.querySelector("#cat18");
cat19 = document.querySelector("#cat19");
cat20 = document.querySelector("#cat20");

let start = document.getElementById("stbtn");
let score = document.querySelector("#score");
let a = 0;
let random, random2;
let button;
let scream = new Audio("");

const catmatrix = [
  [cat1, cat2, cat3, cat4, cat5],
  [cat6, cat7, cat8, cat9, cat10],
  [cat11, cat12, cat13, cat14, cat15],
  [cat16, cat17, cat18, cat19, cat20],
];

function music() {
  let song = new Audio("SaveTube.io - Nyan Cat Lullaby (128 kbps).mp3");
  song.play();
  start.removeEventListener("click", music);
}
start.addEventListener("click", () => {
  random = Math.floor(Math.random() * 3);
  random2 = Math.floor(Math.random() * 4);
  let button = document.createElement("button");
  button.className = "btn";
  catmatrix[random][random2].appendChild(button);

  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
      event.target.remove();
      score.textContent = a++;
      scream.play();
    }
    start.click();
  });
});
start.addEventListener("click", music);
