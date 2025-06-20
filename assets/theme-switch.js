const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Force dark mode on every page load
document.body.classList.add('dark-mode');
toggleSwitch.checked = true;

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add("dark-mode");
        // Optionally, remove localStorage logic if you're forcing dark mode
    } else {
        document.body.classList.remove("dark-mode");
        // Optionally, remove localStorage logic if you're forcing dark mode
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
