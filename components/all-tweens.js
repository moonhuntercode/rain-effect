import { controls } from "./controls";
import { coordenadas1, coordenadas2, coordenadas3 } from "./coordenadas";
import { tween1 } from "./tween1";
import { tween2 } from "./tween2";
import { tween3 } from "./tween3";

export function creandoGotas(gota1, gota2, gota3) {
  tween1.onUpdate(() => {
    // Called after tween1.js updates 'coords'.
    // Move 'gota1' to the position described by 'coords' with a CSS translation.

    gota1.style.setProperty(
      "transform",
      "translate(" +
        coordenadas1.x +
        "px, " +
        coordenadas1.y +
        "px) rotate(" +
        controls.rotation +
        "deg)"
    );
  });
  // TWEEN 1 END

  // TWEEN 2 START
  tween2.onUpdate(() => {
    // Called after tween1.js updates 'coords'.
    // Move 'box' to the position described by 'coords' with a CSS translation.

    gota2.style.setProperty(
      "transform",
      "translate(" + coordenadas2.x + "px, " + coordenadas2.y + "px)"
    );
  });
  // TWEEN 2 END

  // TWEEN 3 START
  tween3.onUpdate(() => {
    // Called after tween1.js updates 'coords'.
    // Move 'box' to the position described by 'coords' with a CSS translation.

    gota3.style.setProperty(
      "transform",
      "translate(" + coordenadas3.x + "px, " + coordenadas3.y + "px)"
    );
  });
  // TWEEN 2 END
}
