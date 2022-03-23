// SVGs paths
const moonPath =
  "M19 29C19 45.0163 45.0163 58 29 58C12.9837 58 0 45.0163 0 29C0 12.9837 12.9837 0 29 0C45.0163 0 19 12.9837 19 29Z";
const sunPath =
  "M58 29C58 45.0163 45.0163 58 29 58C12.9837 58 0 45.0163 0 29C0 12.9837 12.9837 0 29 0C45.0163 0 58 12.9837 58 29Z";

const lightMode = document.querySelector("#light_mode");
const section = document.querySelector(".number__6");
let lightColorMode = "rgb(94, 230, 235)";
let darkColorMode = "rgb(24, 10, 10)";
// let text =document.querySelector('#text');

let toggle = false;

section.addEventListener("click", () => {
  // Sun goes back when clicking on the moon
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }

  // function toggleBgColor(){

  // 	if(section.style.backgroundColor== lightColorMode){
  // 		section.style.backgroundColor= darkColorMode;
  // 	}else{
  // 		section.style.backgroundColor= lightColorMode;

  // 	}
  // }

  // set up timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
    rotate: 500,
  });
  // Animate from sun to moon
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? moonPath : sunPath }],
    })

    .add(
      {
        targets: ".number__6",
        backgroundColor: toggle ? darkColorMode : lightColorMode,
      },
      "-=700"
    );

  // function toggleColorMode(){
  // 	let colorMode = document.querySelector(".number__6");
  // 	if(colorMode !== lightColorMode){
  // 		colorMode.backgroundColor= darkColorMode;
  // 	}else{
  // 		colorMode.backgroundColor =lightColorMode;
  // 	}
  // }
  // toggleColorMode();

  //Toggle text Light to Dark
  function toggleText() {
    let text = document.querySelector("#text");
    if (text.innerHTML == "Light Mode") {
      text.innerHTML = "Dark Mode";
    } else {
      text.innerHTML = "Light Mode";
    }
  }
  toggleText();
  // toggleBgColor();
});

// Cursor animation

const cursor = document.querySelector(".cursor");
let timeout;
let mouseX = 0;
let mouseY = 0;

// cursor follows on mouse move
document.addEventListener("mousemove", (e) => {
  mouseX = Math.round(e.clientX);
  mouseY = Math.round(e.clientY);
  // Effect when mouse stopped
  cursor.style.display = "block";
  function mouseStopped() {
    cursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

let cursorX = 0,
  cursorY = 0;
let dampenerSlider = document.querySelector("#dampener");
let dampener = dampenerSlider.value;
document.querySelector("#dampener").addEventListener("change", () => {
  dampener = dampenerSlider.value;
});
var loop = setInterval(function () {
  cursorX += (mouseX - cursorX) / dampener;
  cursorY += (mouseY - cursorY) / dampener;
  cursor.style.top = cursorY + "px";
  cursor.style.left = cursorX + "px";
}, 30);

// Typrewritting text animation

let i = 0;
let textToType = "Coucou c'est Jc 🌞";
let speed = 100;
// speed in milliseconds

// Typrewriter function

document.addEventListener("click", () => {
  function typeWriter() {
    if (i < textToType.length) {
      document.getElementById("typewriter").innerHTML += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});
