export function initParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'hero__particles';
    heroSection.appendChild(particlesContainer);

    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero__particle';

        const size = Math.random() * 2.5 + 0.5; // Particle size from 0.5px to 3px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Start particles at random horizontal positions, just below the viewport
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${100 + Math.random() * 10}%`;

        // Randomize animation duration and delay for a natural, asynchronous effect
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`; // 10s to 25s duration
        particle.style.animationDelay = `${Math.random() * 15}s`; // 0s to 15s delay

        particlesContainer.appendChild(particle);
    }
}
