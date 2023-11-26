import * as TWEEN from "@tweenjs/tween.js";
import { coordenadas2 } from "./coordenadas";
import { controls } from "./controls";

/* tween = new TWEEN.Tween({top: 0, left: 0}).to({top: 100, left: 100}, 1000).onUpdate(function (object) {
	box.style.top = object.top + 'px'
	box.style.left = object.left + 'px'
}) */
// function crearTwwen(coords){}
export const tween2 = new TWEEN.Tween(coordenadas2, false) // Create a new tween2 that modifies 'coords'.
  .to({ x: 200, y: controls.destino_de_gotas.y }, controls.velocidad) // Move to (300, 200) in 1 second.
  .repeat(Infinity)
  // Use an easing function to make the animation smooth.
  .easing(TWEEN.Easing.Quadratic.InOut)
  .delay(300);
  
// TWEEN 2 END
