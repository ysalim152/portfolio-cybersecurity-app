<<<<<<< HEAD
export function initContactForm() {
    const contactForm = document.querySelector('.contact__form');
    if (!contactForm) return;

    const contactStatus = document.getElementById('contact-status');

    function showContactStatus(message, isError = false) {
        contactStatus.textContent = message;
        contactStatus.classList.remove('contact__form-status--hidden');
        contactStatus.classList.toggle('contact__form-status--error', isError);
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.subject || !data.message) {
            showContactStatus('Please fill in all fields.', true);
            return;
        }

        showContactStatus('Sending message...', false);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Required for formsubmit.co AJAX
                }
            });

            if (response.ok) {
                showContactStatus('Message sent successfully. Thank you!', false);
                contactForm.reset();
            } else {
                const errorData = await response.json();
                const message = errorData.message || 'Unable to send message. Please try again later.';
                showContactStatus(message, true);
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            showContactStatus('Network error. Please check your connection and try again.', true);
        } finally {
            setTimeout(() => contactStatus.classList.add('contact__form-status--hidden'), 5000);
        }
    });
=======
export function initContactForm() {
    const contactForm = document.querySelector('.contact__form');
    if (!contactForm) return;

    const contactStatus = document.getElementById('contact-status');

    function showContactStatus(message, isError = false) {
        contactStatus.textContent = message;
        contactStatus.classList.remove('contact__form-status--hidden');
        contactStatus.classList.toggle('contact__form-status--error', isError);
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.subject || !data.message) {
            showContactStatus('Please fill in all fields.', true);
            return;
        }

        showContactStatus('Sending message...', false);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Required for formsubmit.co AJAX
                }
            });

            if (response.ok) {
                showContactStatus('Message sent successfully. Thank you!', false);
                contactForm.reset();
            } else {
                const errorData = await response.json();
                const message = errorData.message || 'Unable to send message. Please try again later.';
                showContactStatus(message, true);
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            showContactStatus('Network error. Please check your connection and try again.', true);
        } finally {
            setTimeout(() => contactStatus.classList.add('contact__form-status--hidden'), 5000);
        }
    });
>>>>>>> 0acfa95 (First initialisation)
}