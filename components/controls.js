export let controls = {
  velocidad: 2550, //en miliseconds
  rotation: 0,
  destino_de_gotas: { x: 1, y: 1200 },
  reduceVelocidad() {
    this.velocidad = this.velocidad / 2;
    console.log(`velocidad ${controls.velocidad}`);
    console.log("no actualiza la velocidad de la lluvia con el botón derecho");
  },
};
console.log(`destino de gotas:${controls.destino_de_gotas.y}`);