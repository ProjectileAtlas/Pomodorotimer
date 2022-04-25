const startingMinutes = 25;
let time = startingMinutes * 60;
let timer = document.querySelector("circle");
const countdownEl = document.getElementById("timer");
let stats = document.querySelector(".start-button");
let textValue = document.getElementById("status");
let timing;
let stop = document.getElementById("stop");
let audio = new Audio();
let mousebtn = new Audio();
audio.src = "get_over_here_sound_effects_-8776597565384612002.mp3";
mousebtn.src = "Plate Click (Minecraft Sound) - Sound Effect for editing.m4a";
stats.addEventListener("click", function () {
  if (timing === undefined) {
    timing = setInterval(updateCountdown, 1000);
    mousebtn.play();
  } else {
    alert("Timer is already running ");
  }
});
stop.addEventListener("click", function () {
  stopInterval();
  timing = undefined;
  mousebtn.play();
});

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  if (time > -2) {
    time--;
  }
  console.log(time);
  if (time == -2) {
    time = startingMinutes * 60;
    audio.play();
    alert("You have finished a pomodoro");
  }
}

function stopInterval() {
  clearInterval(timing);
}
