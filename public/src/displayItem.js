import vehicles from './item.js';

document.addEventListener("DOMContentLoaded", function () {
    const navbar2 = document.getElementById('navbar2');
    const categories = ['electricCar', 'normalCar', 'electricMoped', 'sports', 'scooter', 'snowmobile'];

    categories.forEach((category, index) => {
        const categoryVehicles = vehicles[category];
        const li = navbar2.querySelectorAll('li')[index];
        li.addEventListener('click', function () {
            displayVehicles(categoryVehicles);
        });
    });

    function displayVehicles(categoryVehicles) {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '';

        categoryVehicles.forEach(vehicle => {
            const vehicleElement = document.createElement('div');
            vehicleElement.classList.add('item-card');

            vehicleElement.innerHTML = `
                <img src="${vehicle.image[0]}" alt="${vehicle.name}">
                <h3>${vehicle.name}</h3>
                <p class="price">Price: ${vehicle.pricePerDay}</p>
                <p class="description">${vehicle.description}</p>
                <p class="location">Location: ${vehicle.location}</p>
            `;

            vehicleElement.addEventListener('click', function () {
                window.location.href = `vehicleDetail.html?name=${encodeURIComponent(vehicle.name)}`;
            });

            mainContent.appendChild(vehicleElement);
        });
    }
});
