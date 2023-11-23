import { animate } from "../main";
import { controls } from "./controls";
import { tween1 } from "./tween1";
import { tween2 } from "./tween2";
import { tween3 } from "./tween3";
import * as TWEEN from "@tweenjs/tween.js";

// añadiendo more elements to dom

// crear contenedor para los botones
export function containerOfButtons(
  body,
  playButton,
  pauseButton,
  gota1,
  gota2,
  gota3,
  animate,
  time
) {
  const container = document.createElement("div");
  container.className = "container_of_buttons";
  const play = playButton(animate, time);
  const pause = pauseButton(gota1, gota2, gota3, animate);
  console.log(play);
  container.append(play, pause);
  body.appendChild(container);
}
export function playButton(animate, time) {
  const button = document.createElement("button");
  button.className = "buttons bordes1";
  button.innerHTML = `&#9205;`;
  button.setAttribute("type", "button");
  button.title = "play";

  button.addEventListener("click", () => {
    tween1.chain(tween2);
    tween2.chain(tween3);
    tween1.start();
    tween2.start();
    tween3.start();
    animate(time);
    requestAnimationFrame(animate);
  });
  return button;
}
export function pauseButton(gota1, gota2, gota3, animate) {
  const button = document.createElement("button");
  button.className = "buttons bordes1";
  button.innerHTML = `&#9205&#9205`;
  button.setAttribute("type", "button");
  button.title = "pause";

  button.addEventListener("click", () => {
    controls.aumentar();
    console.log(controls.velocidad);
    /* TWEEN.add(tween1);
    TWEEN.add(tween2);
    TWEEN.add(tween3);
    console.log(TWEEN.getAll);
    tween1.stop();
    tween2.stop();
    tween3.stop();
    window.cancelAnimationFrame(animate);
    console.log(gota1.style.transform);
    gota1.style.transform = "none";
    gota2.style.transform = "none";
    gota3.style.transf orm = "none";*/
  });
  return button;
}
