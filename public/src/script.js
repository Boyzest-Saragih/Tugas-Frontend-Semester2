document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("popup");
  let openPopupBtn = document.getElementById("btn-popup");
  let daftarPopup = document.getElementById("register-popup");
  let loginPopup = document.getElementById("login-popup");
  let daftarBtns = document.getElementsByClassName("daftar-popup");
  let loginBtns = document.getElementsByClassName("login-BTN");

  function toggleDisplay(element) {
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }

  openPopupBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDisplay(popup);
  });

  Array.from(daftarBtns).forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (daftarPopup.style.display === "block") {
        daftarPopup.style.display = "none";
      } else {
        fetch("./src/register.html")
          .then((response) => response.text())
          .then((data) => {
            daftarPopup.innerHTML = data;
            daftarPopup.style.display = "block";

            let container = daftarPopup.querySelector(".container");

            container.addEventListener("click", function (event) {
              event.stopPropagation();
            });

            container.querySelector("form").addEventListener("submit", function (event) {
              event.preventDefault();
              daftarPopup.style.display = "none";
            });
          })
      }
    });
  });

  Array.from(loginBtns).forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (loginPopup.style.display === "block") {
        loginPopup.style.display = "none";
      } else {
        fetch("./src/login.html")
          .then((response) => response.text())
          .then((data) => {
            loginPopup.innerHTML = data;
            loginPopup.style.display = "block";

            let container = loginPopup.querySelector(".container");

            container.addEventListener("click", function (event) {
              event.stopPropagation();
            });

            container.querySelector("form").addEventListener("submit", function (event) {
              event.preventDefault();
              loginPopup.style.display = "none";
            });
          })
      }
    });
  });

  document.addEventListener("click", function (event) {
    let isClickInsidePopup = popup.contains(event.target) || openPopupBtn.contains(event.target);
    let isClickInsideDaftar = daftarPopup.contains(event.target) || Array.from(daftarBtns).some(btn => btn.contains(event.target));
    let isClickInsideLogin = loginPopup.contains(event.target) || Array.from(loginBtns).some(btn => btn.contains(event.target));

    if (!isClickInsidePopup) {
      popup.style.display = "none";
    }

    if (!isClickInsideDaftar) {
      daftarPopup.style.display = "none";
    }

    if (!isClickInsideLogin) {
      loginPopup.style.display = "none";
    }
  });
});


