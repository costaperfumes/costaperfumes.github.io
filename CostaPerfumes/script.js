const premios = [
  { nombre: "Sigue participando", prob: 65, angulo: 120 },
  { nombre: "5% OFF", prob: 25, angulo: 280 },
  { nombre: "10% OFF", prob: 8, angulo: 338 },
  { nombre: "$20.000", prob: 2, angulo: 355 }
];

// ABRIR RULETA
function abrirRuleta() {
  document.getElementById("ruletaContainer").classList.add("active");
}

// CERRAR AL HACER CLICK FUERA
document.getElementById("ruletaContainer").addEventListener("click", function(e){
  if(e.target === this){
    this.classList.remove("active");
  }
});

// GIRAR
function girarRuleta() {
  const ruleta = document.getElementById("ruleta");
  const resultado = document.getElementById("resultado");

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
  }, 4000);
}

// INSTAGRAM
function irInstagram() {
  window.open("https://www.instagram.com/costaperfumeslaserenacl", "_blank");
}
