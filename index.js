//Click the Logo:
document.addEventListener("DOMContentLoaded", function() {
  var headerLogo = document.getElementById("header-logo");
  headerLogo.addEventListener("click", function() {
      window.location.href = "index.html"; // Redirect to index.html when clicked
  });
});
document.addEventListener("DOMContentLoaded", function() {
    var headerLogo = document.getElementById("header-logo-mobile");
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



//DROPDOWN

document.addEventListener("DOMContentLoaded", function() {
  var dropdownButtons = document.querySelectorAll(".value-prop-container, .value-prop-container-mobile");

  dropdownButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          var dropdownId;
          if (button.id.includes("-mobile")) {
              dropdownId = button.id.replace("-mobile", "") + "-dropdown";
          } else {
              dropdownId = button.id + "-dropdown";
          }

          var dropdown = document.getElementById(dropdownId);
          if (dropdown) {
              // Toggle the top position to make the dropdown appear or disappear
              dropdown.style.top = dropdown.style.top === '0' ? '-180%' : '0';
              
              // Stop the event propagation to prevent the click event from reaching the document
              event.stopPropagation();
          } else {
              console.log("Dropdown element not found!");
          }
      });
  });

  // Add event listener to the document to handle clicks outside the dropdowns
  document.addEventListener("click", function(event) {
      dropdownButtons.forEach(function(button) {
          var dropdownId;
          if (button.id.includes("-mobile")) {
              dropdownId = button.id.replace("-mobile", "") + "-dropdown";
          } else {
              dropdownId = button.id + "-dropdown";
          }
          var dropdown = document.getElementById(dropdownId);
          if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
              dropdown.style.top = '-180%'; // Close the dropdown
          }
      });
  });

  // Add event listener to the X buttons to close the corresponding dropdown
  var closeButtons = document.querySelectorAll(".toggle-button");
  closeButtons.forEach(function(closeButton) {
      closeButton.addEventListener("click", function(event) {
          var dropdown = closeButton.closest(".dropdown");
          dropdown.style.top = '-180%'; // Close the dropdown
          event.stopPropagation(); // Stop the event propagation to prevent the click event from reaching the document
      });
  });
});



// Function to handle click event and redirect to contact page
function redirectToContactPage() {
    function handleClick() {
        window.location.href = "contact.html";
    }

    var elements = document.querySelectorAll('.set-up-consultation, .set-up-consultation-dropdown');

    elements.forEach(function(element) {
        element.addEventListener('click', handleClick);
    });
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to add click event listener to buttons with class "value-prop-container"
function addButtonClickListener() {
    var buttons = document.querySelectorAll('.value-prop-container');
    buttons.forEach(function(button) {
        button.addEventListener('click', scrollToTop);
    });
}

// Function to add click event listener to buttons with class "value-prop-container-mobile"
function addButtonMobileClickListener() {
    var buttons = document.querySelectorAll('.value-prop-container-mobile');
    buttons.forEach(function(button) {
        button.addEventListener('click', scrollToTop);
    });
}

// Call all the functions when the page is loaded
window.onload = function() {
    redirectToContactPage();
    addButtonClickListener();
    addButtonMobileClickListener();
};
