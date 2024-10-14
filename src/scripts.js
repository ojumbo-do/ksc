"strict";

document.addEventListener("DOMContentLoaded", function () {
  const communicationCentreDropdown = document.getElementById(
    "communicationCentreDropdown"
  );
  const communicationDropdown = document.getElementById(
    "communicationDropdown"
  );

  communicationCentreDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    communicationDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !communicationCentreDropdown.contains(event.target) &&
      !communicationDropdown.contains(event.target)
    ) {
      communicationDropdown.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsDropdownBtn = document.getElementById("aboutUsDropdownButton");
  const aboutUsDropdown = document.getElementById("aboutUsDropdown");

  aboutUsDropdownBtn.addEventListener("click", function (event) {
    event.preventDefault();
    aboutUsDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !aboutUsDropdownBtn.contains(event.target) &&
      !aboutUsDropdown.contains(event.target)
    ) {
      aboutUsDropdown.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const customerCentreDropdownButton = document.getElementById(
    "customerCentreDropdownButton"
  );
  const customerCentreDropdown = document.getElementById(
    "customerCentreDropdown"
  );

  customerCentreDropdownButton.addEventListener("click", function (event) {
    event.preventDefault();
    customerCentreDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !customerCentreDropdownButton.contains(event.target) &&
      !customerCentreDropdown.contains(event.target)
    ) {
      customerCentreDropdown.classList.add("hidden");
    }
  });
});

//
document.addEventListener("DOMContentLoaded", function () {
  const filterProductsDropdownButton = document.getElementById(
    "filterProductsDropdownButton"
  );
  const filterProductsDropdown = document.getElementById(
    "filterProductsDropdown"
  );

  filterProductsDropdownButton.addEventListener("click", function (event) {
    event.preventDefault();
    filterProductsDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !filterProductsDropdownButton.contains(event.target) &&
      !filterProductsDropdown.contains(event.target)
    ) {
      filterProductsDropdown.classList.add("hidden");
    }
  });
});
