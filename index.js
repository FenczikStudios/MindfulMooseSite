//Click the Logo:
document.addEventListener("DOMContentLoaded", function() {
  var headerLogo = document.getElementById("header-logo");
  headerLogo.addEventListener("click", function() {
      window.location.href = "index.html"; // Redirect to index.html when clicked
  });
});

//Menu:

const menuIcon = document.getElementById('mobile-menu-icon');
const menu = document.getElementById('mobile-menu-container');

let isMenuVisible = false; // Initial state is hidden

menuIcon.addEventListener('click', function () {
  if (isMenuVisible) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }

  isMenuVisible = !isMenuVisible; // Toggle the menu visibility state
});