export function initThemeToggle() {
    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (!themeToggleBtn) return;

    const body = document.body;
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';

    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggleBtn.innerHTML = sunIcon;
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            themeToggleBtn.innerHTML = moonIcon;
            localStorage.setItem('theme', 'dark');
        }
    };

    // Check for saved theme in localStorage on initial load
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    applyTheme(savedTheme);

    // Event listener for the toggle button
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}
