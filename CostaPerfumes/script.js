// ESPERAR A QUE TODO CARGUE
document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("videoBg");
  const contenido = document.getElementById("contenido");

  if (video) {
    video.classList.add("visible");
  }

  setTimeout(() => {
    if (contenido) contenido.classList.add("visible");
  }, 400);

});

// PREMIOS
const premios = [
  { nombre: "Sigue participando", prob: 60 },
  { nombre: "5% OFF", prob: 25 },
  { nombre: "10% OFF", prob: 10 },
  { nombre: "$20.000", prob: 5 }
];

let abierta = false;

// ABRIR CAJA
function abrirCaja() {
  const contenedor = document.getElementById("cajaContainer");

  if (!contenedor) {
    console.error("No existe cajaContainer");
    return;
  }

  contenedor.classList.add("active");
}

// CERRAR CAJA
function cerrarCaja() {
  const contenedor = document.getElementById("cajaContainer");
  const resultado = document.getElementById("resultado");
  const caja = document.getElementById("caja");

  if (contenedor) contenedor.classList.remove("active");
  if (resultado) resultado.innerHTML = "";
  if (caja) {
    caja.style.transform = "scale(1)";
    caja.classList.remove("abriendo");
  }

  abierta = false;
}

// ABRIR PREMIO
function abrirPremio() {
  if (abierta) return;

  const caja = document.getElementById("caja");
  const resultado = document.getElementById("resultado");

  if (!caja || !resultado) {
    console.error("Faltan elementos en el DOM");
    return;
  }

  abierta = true;

  caja.classList.add("abriendo");

  setTimeout(() => {

    let rand = Math.random() * 100;
    let acumulado = 0;
    let premio = premios[0];

    for (let p of premios) {
      acumulado += p.prob;
      if (rand <= acumulado) {
        premio = p;
        break;
      }
    }

    resultado.innerHTML = `
      <h2>${premio.nombre}</h2>
      <button class="btn" onclick="irInstagram()">Reclamar</button>
    `;

    caja.style.transform = "scale(1.2)";

  }, 700);
}

// INSTAGRAM
function irInstagram() {
  window.open("https://www.instagram.com/costaperfumeslaserenacl", "_blank");
}
