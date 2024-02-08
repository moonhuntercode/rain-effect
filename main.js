import "./main-estile.css";
import { tween1 } from "./components/tween1";
import {
  containerOfButtons,
  pauseButton,
  playButton,
} from "./components/buttons";
import { tween2 } from "./components/tween2";
import {
  creandoElemento1,
  creandoElemento2,
  creandoElemento3,
} from "./components/gotas";
import { creandoGotas } from "./components/all-tweens";
import { tween3 } from "./components/tween3";
import * as TWEEN from "@tweenjs/tween.js";
// import { splitVendorChunkPlugin } from "vite";
// IMPORTS ENDS

// creando el body para anexar mis gotas al DOM
const body = document.body;
body.className = "bordes1";
body.append(creandoElemento1(), creandoElemento2(), creandoElemento3());

// creando gotas
const gota1 = document.querySelectorAll(".estilo_de_gotas")[0]; // Get the element we want to animate.

const gota2 = document.querySelectorAll(".estilo_de_gotas")[1]; // Get the element we want to animate.
const gota3 = document.querySelectorAll(".estilo_de_gotas")[2]; // Get the element we want to animate.
creandoGotas(gota1, gota2, gota3);

// Setup the animation loop.
let time;
export function animate(time) {
  TWEEN.update();
  tween1.update(time);
  tween2.update(time);
  tween3.update(time);
  time = requestAnimationFrame(animate);
}

// START ANIMATION IN REQUEST ANIMATION
// requestAnimationFrame(animate);

window.addEventListener("DOMContentLoaded", () => {
  animate();
  /* ocultando botones para luego
  darle un mejor comportamiento  */

  containerOfButtons(
    body,
    playButton,
    pauseButton,
    gota1,
    gota2,
    gota3,
    animate,
    time
  );
});