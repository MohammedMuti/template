var myIndex = 0;

if (screen.width > 600) {
  carousel();
}
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 10000); // Change image every 2 seconds
}

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const broucherBtn = document.querySelector(".btn-11");
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    broucherBtn.style.display = "none";
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
    broucherBtn.style.display = "block";
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
const navbar = document.querySelector(".header-fixed");
const menu = document.querySelector(".menu");
window.onscroll = () => {
  if (window.scrollY > 150) {
    navbar.classList.add("header-fixed-dark");
    menu.classList.add("menu-dark");
  } else {
    navbar.classList.remove("header-fixed-dark");
    menu.classList.remove("menu-dark");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  setTimeout(() => {
    modal.classList.add("active");
    overlay.classList.add("active");
  }, 15000);
});
