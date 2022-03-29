let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato = <HTMLInputElement>document.getElementById("dato");

btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código
  console.log("dato:", dato.value);
});
