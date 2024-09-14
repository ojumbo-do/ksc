"strict"

document.addEventListener('DOMContentLoaded', function () {
  const communicationCentreDropdown = document.getElementById('communicationCentreDropdown');
  const communicationDropdown = document.getElementById('communicationDropdown');

  communicationCentreDropdown.addEventListener('click', function (event) {
    event.preventDefault();
    communicationDropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    if (!communicationCentreDropdown.contains(event.target) && !communicationDropdown.contains(event.target)) {
      communicationDropdown.classList.add('hidden');
    }
  });
});