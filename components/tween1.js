import * as TWEEN from "@tweenjs/tween.js";
import { coordenadas1 } from "./coordenadas";
import { controls } from "./controls";

/* tween = new TWEEN.Tween({top: 0, left: 0}).to({top: 100, left: 100}, 1000).onUpdate(function (object) {
	box.style.top = object.top + 'px'
	box.style.left = object.left + 'px'
}) */
// function crearTwwen(coords){}
export const tween1 = new TWEEN.Tween(coordenadas1, false) // Create a new tween1 that modifies 'coords'.
  .to({ x: 10, y: 770 }, controls.velocidad) // Move to (300, 200) in 1 second.
  .repeat(Infinity)
  // Use an easing function to make the animation smooth.
  .easing(TWEEN.Easing.Quadratic.InOut)
  .delay(600);
// TWEEN 1 END
