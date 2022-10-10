
let secs = 10;
const time = document.getElementsByClassName("clock")[0];

function timer() {
  secs--;
  time.innerHTML = secs;
  if (secs <= 0) {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    clearInterval(inter);
  }
}
let inter = setInterval("timer()", 1000);

window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}
