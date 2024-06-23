import vehicles from "./item.js";

document.addEventListener("DOMContentLoaded", function () {
  const vehicleDetail = document.getElementById("vehicle-detail");
  const urlParams = new URLSearchParams(window.location.search);
  const vehicleName = urlParams.get("name");

  if (vehicleName) {
    let selectedVehicle;
    Object.keys(vehicles).forEach((category) => {
      vehicles[category].forEach((vehicle) => {
        if (vehicle.name === vehicleName) {
          selectedVehicle = vehicle;
        }
      });
    });

    if (selectedVehicle) {
      vehicleDetail.innerHTML = `
            <div class="item-card">
              <h3 class="name">${selectedVehicle.name}</h3>
              <div class="gallery">
                <img class="item1" src="${selectedVehicle.media[0]}" alt="${selectedVehicle.name[0]}">
                <img class="item2" src="${selectedVehicle.media[1]}" alt="${selectedVehicle.name[1]}">
                <img class="item3" src="${selectedVehicle.media[2]}" alt="${selectedVehicle.name[2]}">
                <img class="item4" src="${selectedVehicle.media[3]}" alt="${selectedVehicle.name[3]}">
              </div>
            </div>
          `;
    }
  }
});
