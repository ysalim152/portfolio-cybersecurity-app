export function initProjectModal() {
    const projectLinks = document.querySelectorAll('.projects__card-link');
    const modal = document.getElementById('project-modal');

    if (!modal || projectLinks.length === 0) return;

    const closeModalBtn = modal.querySelector('.modal__close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTools = document.getElementById('modal-tools');
    const modalLink = document.getElementById('modal-link');

    const openModal = (card) => {
        const title = card.querySelector('.projects__card-title').textContent;
        const description = card.dataset.details;
        const toolsHTML = card.querySelector('.projects__card-tools').innerHTML;
        const githubLink = card.dataset.link;

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalTools.innerHTML = toolsHTML;

        if (githubLink) {
            modalLink.href = githubLink;
            modalLink.style.display = 'inline-flex';
        } else {
            modalLink.style.display = 'none';
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = link.closest('.projects__card');
            if (card) {
                openModal(card);
            }
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => e.target === modal && closeModal());
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}
