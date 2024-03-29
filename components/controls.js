export let controls = {
  velocidad: 2550, //en miliseconds
  rotation: 0,
  destino_de_gotas: { x: 1, y: 1200 },
  get getVelocidad() {
    return this.velocidad;
  },
  set setVelocidad(value) {
    this.velocidad = value;
  },
  reduceVelocidad() {
    this.setVelocidad = this.velocidad / 2;
    console.log(`velocidad ${controls.velocidad}`);
    console.log("no actualiza la velocidad de la lluvia con el botón derecho");
  },
};
console.log(`destino de gotas:${controls.destino_de_gotas.y}`);
const handler = {
  get(controls, prop) {
    console.log(`Property ${prop} has been read .`);
    return controls[prop];
  },
  set(controls, prop, value) {
    controls[prop] = value;
    return true;
  },
};
let proxyControl = new Proxy(controls, handler);