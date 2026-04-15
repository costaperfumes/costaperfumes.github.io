// FADE
window.addEventListener("load", () => {
  document.getElementById("videoBg").classList.add("visible");

  setTimeout(() => {
    document.getElementById("contenido").classList.add("visible");
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

// ABRIR MODAL
function abrirCaja() {
  document.getElementById("cajaContainer").classList.add("active");
}

// ABRIR PREMIO
function abrirPremio() {
  if (abierta) return;

  abierta = true;

  const caja = document.getElementById("caja");
  const resultado = document.getElementById("resultado");

  caja.classList.add("abriendo");

  setTimeout(() => {

    let rand = Math.random() * 100;
    let acumulado = 0;
    let premio;

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
