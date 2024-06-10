document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("popup");
  let openPopupBtn = document.getElementById("btn-popup");

  openPopupBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  });

  document.addEventListener("click", function (event) {
    let isClickInside =
      popup.contains(event.target) || openPopupBtn.contains(event.target);
    if (!isClickInside) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let daftarPopup = document.getElementById("register-popup");
  let daftarBtn = document.getElementById("daftar-popup");
  let container = document.querySelector(".container");

  daftarBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (daftarPopup.style.display === "block") {
      daftarPopup.style.display = "none";
    } else {
      fetch("./src/register.html")
        .then((response) => response.text())
        .then((data) => {
          daftarPopup.innerHTML = data;
          daftarPopup.style.display = "block";
        })
        .catch((error) => console.log("ERROR loading popup ", error));
    }
  });

  document.addEventListener("click", function (event) {
    let isClickInside =
      daftarPopup.contains(event.target) || daftarBtn.contains(event.target);
    if (!isClickInside) {
      daftarPopup.style.display = "none";
    }
    if (!container.contains(event.target)) {
      container.style.display = "none";
    }
  });

  document.querySelector("form").addEventListener("submit", function () {
    container.style.display = "none";
  });
});
