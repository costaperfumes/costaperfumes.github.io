function abrirRuleta() {
  document.getElementById("ruletaContainer").classList.add("active");
}

function girarRuleta() {
  const ruleta = document.getElementById("ruleta");
  const resultado = document.getElementById("resultado");

 const premios = [
  { nombre: "Sigue participando", prob: 65 },
  { nombre: "5% OFF", prob: 25 },
  { nombre: "10% OFF", prob: 8 },
  { nombre: "$20.000", prob: 2 }
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
  "Sigue participando": 120,
  "5% OFF": 280,
  "10% OFF": 338,
  "$20.000": 355
};
  
  let giro = 1800 + posiciones[premioFinal];

  ruleta.style.transition = "transform 3.2s cubic-bezier(.2,.8,.2,1)";
ruleta.style.transform = `rotate(${giro}deg)`;

// micro rebote
setTimeout(() => {
  ruleta.style.transition = "transform 0.3s ease";
  ruleta.style.transform = `rotate(${giro - 8}deg)`;
}, 3200);

setTimeout(() => {
  ruleta.style.transform = `rotate(${giro}deg)`;
}, 3500);

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
