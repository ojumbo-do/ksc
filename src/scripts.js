"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const timeNow = document.querySelector("#time-now");
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

  currentTime();
});
