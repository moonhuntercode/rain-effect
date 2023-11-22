import * as TWEEN from "@tweenjs/tween.js";
import { coordenadas3 } from "./coordenadas";
import { controls } from "./controls";

/* tween = new TWEEN.Tween({top: 0, left: 0}).to({top: 100, left: 100}, 1000).onUpdate(function (object) {
	box.style.top = object.top + 'px'
	box.style.left = object.left + 'px'
}) */
// function crearTwwen(coords){}
export const tween3 = new TWEEN.Tween(coordenadas3, false) // Create a new tween2 that modifies 'coords'.
  .to({ x: 250, y: 770 }, controls.velocidad) // Move to (300, 200) in 1 second.
  .repeat(Infinity)
  .easing(TWEEN.Easing.Quadratic.InOut); // Use an easing function to make the animation smooth.
// TWEEN 2 END
