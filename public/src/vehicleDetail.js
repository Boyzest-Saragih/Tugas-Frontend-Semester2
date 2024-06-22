import vehicles from './item.js';

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleName = urlParams.get('name');

    let vehicle;

    // Cari kendaraan berdasarkan nama di semua kategori
    Object.keys(vehicles).forEach(category => {
        vehicles[category].forEach(v => {
            if (v.name === vehicleName) {
                vehicle = v;
            }
        });
    });

    if (vehicle) {
        const vehicleDetail = document.getElementById('vehicle-detail');
        vehicleDetail.innerHTML = `
            <img src="${vehicle.image[0]}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
            <p class="price">Price: ${vehicle.pricePerDay}</p>
            <p class="description">${vehicle.description}</p>
            <p class="location">Location: ${vehicle.location}</p>
            <div class="gallery">
                ${vehicle.image.map(img => `<img src="${img}" alt="${vehicle.name}">`).join('')}
            </div>
        `;
    } else {
        const vehicleDetail = document.getElementById('vehicle-detail');
        vehicleDetail.innerHTML = '<p>Vehicle not found.</p>';
    }
});
