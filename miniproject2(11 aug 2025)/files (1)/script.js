const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

const buyBtn = document.getElementById("buyBtn");
const orderMsg = document.getElementById("orderMsg");

buyBtn.addEventListener("click", function () {
    orderMsg.textContent =
        "Thank you! Your PulseFit order has been placed.";
});