const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function time() {
  const date = new Date();
  const hr = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  sec.innerText = secs;
  if (hr < 10) {
    hour.innerText = "0" + hr;
  } else {
    hour.innerText = hr;
  }
  if (mins < 10) {
    min.innerText = "0" + mins;
  } else {
    min.innerText = mins;
  }
  if (secs < 10) {
    sec.innerText = "0" + secs;
  } else {
    sec.innerText = secs;
  }
  // setTimeout(() => {
    
  // }, 100);
}
setInterval(() => {
  time();
}, 500);


// window.requestAnimationFrame(time)