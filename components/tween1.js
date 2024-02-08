import * as TWEEN from "@tweenjs/tween.js";
import { coordenadas1 } from "./coordenadas";
import { controls } from "./controls";
// Create a new tween1 that modifies 'coords'.
export const tween1 = new TWEEN.Tween(coordenadas1, false)
  // Move to (300, 200) in 1 second.
  .to({ x: 100, y: controls.destino_de_gotas.y }, controls.getVelocidad)
  .repeat(Infinity)
  // Use an easing function to make the animation smooth.
  .easing(TWEEN.Easing.Quadratic.InOut)
  .delay(600);
  
  
// TWEEN 1 END
