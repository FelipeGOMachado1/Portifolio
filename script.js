// Alguma animação bacana aqui, por exemplo:

const readMoreButtons = document.querySelectorAll('.read-more-button');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const article = button.parentElement;
        article.classList.toggle('expanded');
    });
});
