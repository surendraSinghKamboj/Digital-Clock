const theme = document.getElementById("btn");
const clock = document.getElementById("clock");
const container = document.getElementById("container");
let mode = true;

function chnageTheme() {
  if (mode) {
    mode = false;
    light();
  } else {
    mode = true;
    dark();
  }
}

function light() {
  theme.style.backgroundColor = "white";
  theme.style.color = "black";
  theme.style.boxShadow = "0px 0px 10px black";
  theme.innerText = "Dark";
  clock.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  clock.style.color = "black";
  container.style.backgroundColor = "white";
}

function dark() {
  theme.style.backgroundColor = "black";
  theme.style.color = "white";
  theme.style.boxShadow = "0px 0px 10px white";
  theme.innerText = "Light";
  clock.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  clock.style.color = "white";
  container.style.backgroundColor = "black";
}

theme.addEventListener("click", chnageTheme);
