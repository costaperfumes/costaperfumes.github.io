function abrirModal(tipo) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');

  const imagenes = {
    nicho: [
      'assets/img/costazurra.jpg',
      'assets/img/costazurra.jpg',
      'assets/img/costazurra.jpg'
    ],
    disenador: [
      'assets/img/invictus.jpg',
      'assets/img/invictus.jpg',
      'assets/img/invictus.jpg'
    ],
    arabe: [
      'assets/img/vulcanfeu.jpg',
      'assets/img/vulcanfeu.jpg',
      'assets/img/vulcanfeu.jpg'
    ]
  };

  content.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    imagenes[tipo].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      carousel.appendChild(img);
    });

    card.appendChild(carousel);
    content.appendChild(card);

    let index = 0;
    setInterval(() => {
      index = (index + 1) % 3;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 2500);
  }

  modal.classList.add('active');
}

function cerrarModal() {
  document.getElementById('modal').classList.remove('active');
}