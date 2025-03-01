// 🌙 Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeToggleSidebar = document.getElementById("theme-toggle-sidebar");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

themeToggleSidebar.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

menuBtn.addEventListener("click", () => {
    sidebar.style.right = "0"; // Show sidebar
});

closeBtn.addEventListener("click", () => {
    sidebar.style.right = "-290px"; // Hide sidebar
});

// 🔍 Search Filter
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", function () {
    let query = searchBar.value.toLowerCase();
    let projects = document.querySelectorAll(".card");

    projects.forEach((card) => {
        let name = card.dataset.name.toLowerCase();
        if (name.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

