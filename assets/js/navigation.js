export function initNavigation() {
    const hamburger = document.querySelector('.nav__hamburger');
    const navMenu = document.querySelector('.nav__list');

    if (!hamburger || !navMenu) {
        console.error("Navigation elements not found. Hamburger menu will not work.");
        return;
    }

    function toggleMenu() {
        const isActive = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    function handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (!target) return;

        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        if (navMenu.classList.contains('active')) {
            closeMenu();
        }
    }

    hamburger.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav__link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}
