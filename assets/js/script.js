import '../css/style.css';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initContactForm } from './contact.js';
import { initProjectModal } from './modal.js';
import { initUI } from './ui.js';
import { initThemeToggle } from '../../theme.js';
import { initParticles } from './particles.js';

document.addEventListener('DOMContentLoaded', () => {
	    initNavigation();
	    initAnimations();
	    initContactForm();
	    initProjectModal();
	    initUI();
	    initThemeToggle();
	    initParticles();
});
