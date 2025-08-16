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
