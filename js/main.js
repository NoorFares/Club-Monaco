const filterToggle = document.getElementById('filterToggle');
    
const sidebar = document.querySelector('.sidebar');

filterToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});
// Get the "Show Filter" link element
const showFilterLink = document.querySelector(".show-filter .filter-title");

// Get the sidebar element

// Function to toggle the filter sidebar and update link text
function toggleFilter() {
sidebar.classList.toggle("show");
const isFilterVisible = sidebar.classList.contains("show");
showFilterLink.textContent = isFilterVisible ? "Hide Filter" : "Show Filter";
}
// Add click event listener to the "Show Filter" link
showFilterLink.addEventListener("click", toggleFilter);
document.querySelectorAll(".accordion-button").forEach(button => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("i");

    // Toggle the icon between "+" and "-"
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
})
document.getElementById("dropdownArrow").addEventListener("click", function() {
  const buttonContainer = document.getElementById("buttonContainer");
  const arrowIcon = this;

  if (buttonContainer.style.display === "none") {
    // Show the button container and rotate the arrow icon
    buttonContainer.style.display = "block";
    arrowIcon.classList.remove("fa-arrow-down");
    arrowIcon.classList.add("fa-arrow-up");
  } else {
    // Hide the button container and rotate the arrow icon
    buttonContainer.style.display = "none";
    arrowIcon.classList.remove("fa-arrow-up");
    arrowIcon.classList.add("fa-arrow-down");
  }
});
