document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-item button");
    const selectListButtons = document.querySelectorAll(".select-list button");
    const projectItems = document.querySelectorAll(".project-item");

    // Show all project items by default
    projectItems.forEach(item => item.classList.add("active"));

    // Function to filter items based on category
    function filterItems(category) {
        projectItems.forEach(item => {
            const itemCategory = item.dataset.category.toLowerCase();
            if (category === "all" || itemCategory === category) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.textContent.toLowerCase();
            setActiveFilterButton(this);
            filterItems(category);
        });
    });

    // Event listeners for select list buttons (dropdown)
    selectListButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.textContent.toLowerCase();
            setActiveFilterButton(this);
            filterItems(category);
        });
    });

    // Function to set active state for filter buttons
    function setActiveFilterButton(activeButton) {
        filterButtons.forEach(button => button.classList.remove("active"));
        selectListButtons.forEach(button => button.classList.remove("active"));
        activeButton.classList.add("active");
    }
});