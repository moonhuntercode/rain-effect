function animate(time) {
  TWEEN.update(time);
  requestAnimationFrame(animate);
}

animate();

var a = document.getElementById("target1");
var b = document.getElementById("target2");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var t0, t1;
var p0 = { x: 0 },
  p1 = { x: 0 };

start.onclick = function () {
  if (!t0 && !t1) {
    t0 = new TWEEN.Tween(p0)
      .to({ x: 700 }, 2000)
      .delay(1000)
      .easing(TWEEN.Easing.Elastic.InOut)
      .onUpdate(function () {
        a.style.left = p0.x + "px";
      })
      .onComplete(function () {
        p0.x = 0;
        a.style.left = p0.x + "px";
      });

    t1 = new TWEEN.Tween(p1)
      .to({ x: 1000 }, 3000)
      .delay(1000)
      .easing(TWEEN.Easing.Elastic.InOut)
      .onUpdate(function () {
        b.style.left = p1.x + "px";
      })
      .onComplete(function () {
        p1.x = 0;
        b.style.left = p1.x + "px";
      });

    t0.chain(t1);
    t1.chain(t0);
  }
  t0.start();
};

stop.onclick = function () {
  t0.stop();
};
