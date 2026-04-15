// FADE IN SINCRONIZADO
window.addEventListener("load", () => {
  document.getElementById("videoBg").classList.add("visible");

  setTimeout(() => {
    document.getElementById("contenido").classList.add("visible");
  }, 400);
});

const premios = [
  { nombre: "Sigue participando", prob: 65, angulo: 120 },
  { nombre: "5% OFF", prob: 25, angulo: 280 },
  { nombre: "10% OFF", prob: 8, angulo: 338 },
  { nombre: "$20.000", prob: 2, angulo: 355 }
];

let girando = false;

// ABRIR
function abrirRuleta() {
  document.getElementById("ruletaContainer").classList.add("active");
}

// GIRAR
function girarRuleta() {
  if (girando) return;
  girando = true;

  const ruleta = document.getElementById("ruleta");
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

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

  let giro = 1800 + premio.angulo;

  ruleta.style.transform = `rotate(${giro}deg)`;

  setTimeout(() => {
    resultado.innerHTML = `
      <h2>${premio.nombre}</h2>
      <button class="btn" onclick="irInstagram()">Reclamar</button>
    `;
    girando = false;
  }, 4000);
}

// INSTAGRAM
function irInstagram() {
  window.open("https://www.instagram.com/costaperfumeslaserenacl", "_blank");
}
