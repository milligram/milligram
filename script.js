document.getElementById("modeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    const modeLabel = document.querySelector(".mode-label");
    modeLabel.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
