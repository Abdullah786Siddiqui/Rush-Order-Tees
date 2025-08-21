// Account Dropdown
const accountBtn = document.getElementById("my-account-button");
const accountDropdown = document.getElementById("dropdown-menu");
const accountArrow = document.getElementById("dropdown-arrow");

// Cart Dropdown
const cartBtn = document.getElementById("cart-button");
const cartDropdown = document.getElementById("dropdown-menu-cart");
const cartArrow = document.getElementById("dropdown-arrow-cart");

// Toggle dropdown function
function toggleDropdown(button, dropdown, arrow) {
  const isHidden = dropdown.classList.contains("hidden");
  // Close both dropdowns first
  accountDropdown.classList.add("hidden");
  cartDropdown.classList.add("hidden");
  accountArrow.classList.remove("rotate-180");
  cartArrow.classList.remove("rotate-180");

  // Open clicked dropdown if it was hidden
  if (isHidden) {
    dropdown.classList.remove("hidden");
    arrow.classList.add("rotate-180"); // Rotate arrow
  }
}

// Click events
accountBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent body click
  toggleDropdown(accountBtn, accountDropdown, accountArrow);
});

cartBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown(cartBtn, cartDropdown, cartArrow);
});

// Close dropdowns when clicking outside
document.body.addEventListener("click", () => {
  accountDropdown.classList.add("hidden");
  cartDropdown.classList.add("hidden");
  accountArrow.classList.remove("rotate-180");
  cartArrow.classList.remove("rotate-180");
});

////////////////// Dropdown meno js //////////////////

  document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
    const mobileToggles = document.querySelectorAll('.mobile-toggle');
    const dropdownToggles = document.querySelectorAll('.toggle');

    // Toggle mobile menu visibility
    hamburgerBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('translate-x-full');
    });

    closeMobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('translate-x-full');
    });

    // Handle desktop dropdowns
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(event) {
        if (window.innerWidth >= 1024) {
          event.preventDefault();
          const parentLi = this.closest('li.group');
          const dropdown = parentLi.querySelector('.mega-dropdown');
          const isAlreadyOpen = dropdown.classList.contains('is-open');

          document.querySelectorAll('.mega-dropdown').forEach(d => {
            d.classList.remove('is-open');
            d.style.display = 'none'; // Hide all dropdowns
          });

          if (!isAlreadyOpen) {
            dropdown.classList.add('is-open');
            dropdown.style.display = 'block'; // Show the clicked dropdown
          }
        }
      });
    });

    // Handle mobile dropdowns
    mobileToggles.forEach(toggle => {
      toggle.addEventListener('click', function(event) {
        const parentLi = this.closest('li.group');
        const dropdown = parentLi.querySelector('.mobile-mega-dropdown');

        dropdown.classList.toggle('is-open');

        const svg = this.nextElementSibling;
        if (dropdown.classList.contains('is-open')) {
          svg.style.transform = 'rotate(180deg)';
        } else {
          svg.style.transform = 'rotate(0deg)';
        }
      });
    });
  });
