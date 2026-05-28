function initSectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for animation, excluding the #projects section which has its own card animation
    document.querySelectorAll('.section:not(.projects)').forEach(section => {
        observer.observe(section);
    });
}

function initProgressBarAnimation() {
    const progressBars = document.querySelectorAll('.skills__progress');
    if (progressBars.length === 0) return;

    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.dataset.width;
                progress.style.width = '0%';
                setTimeout(() => {
                    progress.style.width = width;
                }, 100); // Snappier animation
                observer.unobserve(progress);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

function initProjectCardAnimation() {
    const projectsGrid = document.querySelector('.projects__grid');
    if (!projectsGrid) return;

    const projectCards = projectsGrid.querySelectorAll('.projects__card');
    if (projectCards.length === 0) return;

    const projectGridObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectCards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 150}ms`;
                    card.classList.add('animate__animated', 'animate__fadeInUp');
                });
                observer.unobserve(projectsGrid); // Unobserve the grid container
            }
        });
    }, { threshold: 0.1 });

    projectGridObserver.observe(projectsGrid);
}

function initTypingEffect() {
    const heroSubtitle = document.querySelector('.hero__subtitle');
    if (!heroSubtitle) return;

    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = ''; // Clear text for typing
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    setTimeout(typeWriter, 1000);
}

export function initAnimations() {
    initSectionObserver();
    initProgressBarAnimation();
    initProjectCardAnimation();
    window.addEventListener('load', initTypingEffect);
}
