const premios = [
  { nombre: "Sigue participando", prob: 65, angulo: 120 },
  { nombre: "5% OFF", prob: 25, angulo: 280 },
  { nombre: "10% OFF", prob: 8, angulo: 338 },
  { nombre: "$20.000", prob: 2, angulo: 355 }
];

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
    resultado.innerHTML = `<h2>${premio.nombre}</h2>`;
  }, 4000);
}
