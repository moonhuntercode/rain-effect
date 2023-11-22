import { tween1 } from "./tween1";
import { tween2 } from "./tween2";
import { tween3 } from "./tween3";

// añadiendo more elements to dom

// crear contenedor para los botones
export function containerOfButtons(
  body,
  playButton,
  pauseButton,
  gota1,
  animate,
  time
) {
  const container = document.createElement("div");
  container.className = "container_of_buttons";
  const play = playButton(animate, time);
  const pause = pauseButton(gota1);
  console.log(play);
  container.append(play, pause);
  body.appendChild(container);
}
export function playButton() {
  const button = document.createElement("button");
  button.className = "buttons bordes1";
  button.innerHTML = `&#9205;`;
  button.setAttribute("type", "button");
  button.title = "play";

  button.addEventListener("click", () => {
    tween1.start();
    tween2.start();
    tween3.start();
  });
  return button;
}
export function pauseButton(gota1) {
  const button = document.createElement("button");
  button.className = "buttons bordes1";
  button.innerHTML = `&#9208`;
  button.setAttribute("type", "button");
  button.title = "pause";

  button.addEventListener("click", () => {
    console.log(gota1.style.transform);
    tween1.stop();

    console.log((gota1.style.transform = "none"));
    tween2.stop();
    tween3.stop();
  });
  return button;
}
