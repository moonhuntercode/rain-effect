export let controls = {
  velocidad: 1050, //en miliseconds
  rotation: 0,
  aumentar() {
    this.velocidad /= 2;
    console.log(`velocidad ${controls.velocidad}`);
  },
};
