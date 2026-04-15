document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("bgVideo");
  const hero = document.getElementById("hero");

  // fade correcto
  setTimeout(() => {
    video.classList.add("visible");
    hero.classList.add("visible");
  }, 300);

  // botones
  document.getElementById("openBoxBtn").addEventListener("click", openModal);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  document.getElementById("openRewardBtn").addEventListener("click", openReward);

});

const modal = document.getElementById("modal");
const result = document.getElementById("result");
const cube = document.querySelector(".cube");

let used = false;

// abrir modal
function openModal() {
  modal.classList.add("active");
}

// cerrar modal
function closeModal() {
  modal.classList.remove("active");
  result.innerHTML = "";
  used = false;
  cube.style.transform = "scale(1)";
}

// premios (simple y estable)
const prizes = [
  { name: "Sigue participando", chance: 60 },
  { name: "5% OFF", chance: 25 },
  { name: "10% OFF", chance: 10 },
  { name: "$20.000", chance: 5 }
];

// abrir premio
function openReward() {
  if (used) return;
  used = true;

  cube.style.transform = "scale(1.2) rotate(5deg)";

  let r = Math.random() * 100;
  let acc = 0;
  let win = prizes[0];

  for (let p of prizes) {
    acc += p.chance;
    if (r <= acc) {
      win = p;
      break;
    }
  }

  setTimeout(() => {
    result.innerHTML = `
      <h2>${win.name}</h2>
      <button class="btn" onclick="goIG()">Reclamar</button>
    `;
  }, 600);
}

// instagram
function goIG() {
  window.open("https://www.instagram.com/costaperfumeslaserenacl", "_blank");
}
