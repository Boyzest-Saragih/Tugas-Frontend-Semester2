import vehicles from './item.js';

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector('.gallery');
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const overlayClose = overlay.querySelector('.close');

  // Fungsi untuk menghasilkan HTML
  function generateHTML(vehicle) {
    return `
      <div class="item h2 v2">
        <img src="${vehicle.image[0]}" alt="${vehicle.name}">
        <div class="item__overlay">
          <button>View →</button>
        </div>
      </div>
    `;
  }

  // Fungsi untuk menangani klik item
  function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
  }

  // Fungsi untuk menutup overlay
  function close() {
    overlay.classList.remove('open');
  }

  // Mengumpulkan semua kendaraan dari semua kategori
  let allVehicles = [];
  Object.keys(vehicles).forEach(category => {
    allVehicles = allVehicles.concat(vehicles[category]);
  });

  // Menghasilkan HTML untuk galeri
  const html = allVehicles.map(generateHTML).join('');
  gallery.innerHTML = html;

  const items = document.querySelectorAll('.item');
  items.forEach(item => item.addEventListener('click', handleClick));

  overlayClose.addEventListener('click', close);
});
