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
  const aboutUsDropdown = document.getElementById("dropdownNavbar");
  const aboutUs = document.getElementById("dropdownLargeButton");

  aboutUsDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    aboutUs.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !aboutUsDropdown.contains(event.target) &&
      !aboutUs.contains(event.target)
    ) {
      aboutUs.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const communicationCentreDropdown = document.getElementById("dropdown");
  const communicationDropdown = document.getElementById("dropdownLargeButton");

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
