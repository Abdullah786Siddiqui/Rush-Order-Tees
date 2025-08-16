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
        const dropdownToggles = document.querySelectorAll('.toggle');
        const mobileIcons = document.querySelector('#mobile-icons');
        
        // This function hides the mobile icons
        function hideMobileIcons() {
          if (window.innerWidth < 1072) {
            mobileIcons.classList.add('hidden');
            mobileIcons.classList.remove('flex');
          }
        }

        // This function shows the mobile icons
        function showMobileIcons() {
          if (window.innerWidth < 1024) {
            mobileIcons.classList.remove('hidden');
            mobileIcons.classList.add('flex');
          }
        }

        dropdownToggles.forEach(toggle => {
          toggle.addEventListener('click', function(event) {
            event.preventDefault();

            const parentLi = this.closest('li.group');
            const dropdown = parentLi.querySelector('.mega-dropdown');
            const isAlreadyOpen = dropdown.classList.contains('is-open');

            // Close all other dropdowns
            document.querySelectorAll('.mega-dropdown').forEach(d => {
              d.classList.remove('is-open');
            });

            // If the clicked dropdown was not already open, toggle it open and hide icons
            if (!isAlreadyOpen) {
              dropdown.classList.add('is-open');
              hideMobileIcons();
            } else {
              // If it was already open, toggle it closed and show icons
              showMobileIcons();
            }
          });
        });

        // Close dropdowns and show icons when clicking anywhere else on the page
        document.addEventListener('click', function(event) {
          const isClickInsideDropdown = event.target.closest('.group');
          if (!isClickInsideDropdown) {
            document.querySelectorAll('.mega-dropdown').forEach(d => {
              d.classList.remove('is-open');
            });
            showMobileIcons();
          }
        });

        // Listen for window resize to handle responsiveness
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 1024) {
            // On large screens, ensure icons are visible according to Tailwind classes
            mobileIcons.classList.add('hidden');
          } else {
            // On small screens, check if any dropdown is open before showing icons
            const isAnyDropdownOpen = document.querySelector('.mega-dropdown.is-open');
            if (!isAnyDropdownOpen) {
              showMobileIcons();
            }
          }
        });
      });