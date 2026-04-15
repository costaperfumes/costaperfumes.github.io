function abrirRuleta() {
  document.getElementById("ruletaContainer").classList.add("active");
}

function girarRuleta() {
  const ruleta = document.getElementById("ruleta");
  const resultado = document.getElementById("resultado");

  const premios = [
    { nombre: "$20.000", prob: 0.001 },
    { nombre: "5% OFF", prob: 0.5 },
    { nombre: "10% OFF", prob: 0.25 },
    { nombre: "Sigue participando", prob: 99.249 }
  ];

  let rand = Math.random() * 100;
  let acumulado = 0;
  let premioFinal;

  for (let p of premios) {
    acumulado += p.prob;
    if (rand <= acumulado) {
      premioFinal = p.nombre;
      break;
    }
  }

  const posiciones = {
    "$20.000": 45,
    "5% OFF": 135,
    "10% OFF": 225,
    "Sigue participando": 315
  };

  let giro = 1800 + posiciones[premioFinal];

  ruleta.style.transform = `rotate(${giro}deg)`;

  setTimeout(() => {
    resultado.innerHTML = `
      <h2>${premioFinal}</h2>
      <button class="claim-btn" onclick="irInstagram()">Reclamar</button>
    `;
  }, 3500);
}

function irInstagram() {
  window.open("https://www.instagram.com/costaperfumeslaserenacl", "_blank");
}
