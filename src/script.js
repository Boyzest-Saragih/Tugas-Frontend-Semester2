// script.js
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var openPopupBtn = document.getElementById("btn-popup");

    openPopupBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    });

    document.addEventListener("click", function(event) {
        var isClickInside = popup.contains(event.target) || openPopupBtn.contains(event.target);
        if (!isClickInside) {
            popup.style.display = "none";
        }
    });
});
