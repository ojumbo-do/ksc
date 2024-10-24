"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const timeNow = document.querySelector("#time-now");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots-container");

  // Create dots based on the number of slides
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  const dropdowns = [
    { buttonId: "about-us__button", dropdownId: "about-us__dropdown" },
    {
      buttonId: "communication-centre__button",
      dropdownId: "communication-centre__dropdown",
    },
    {
      buttonId: "customer-centre__button",
      dropdownId: "customer-centre__dropdown",
    },
    {
      buttonId: "filterProductsDropdownButton",
      dropdownId: "filterProductsDropdown",
    },

    {
      buttonId: "secondary-nav__button",
      dropdownId: "secondary-nav__menu",
    },

    {
      buttonId: "primary-nav__button",
      dropdownId: "primary-nav__menu",
    },
  ];

  const currentTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    timeNow.textContent = `${hours}:${minutes}:${seconds}`;
    setTimeout(currentTime, 1000);
  };

  const toggleDropdown = (button, dropdown) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      dropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
      }
    });
  };

  dropdowns.forEach(({ buttonId, dropdownId }) => {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);
    if (button && dropdown) {
      toggleDropdown(button, dropdown);
    }
  });

  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.dataset.index, 10);
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  showSlide(currentSlide);

  window.changeSlide = changeSlide;

  setInterval(() => {
    changeSlide(1);
  }, 15000);

  currentTime();
});
