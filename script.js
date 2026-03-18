// Seleciona o botão hamburger pelo id
const hamburger = document.getElementById('hamburger');

// Seleciona o menu de navegação pelo id
const navMenu = document.getElementById('nav-menu');

// Escuta o clique no botão hamburger
hamburger.addEventListener('click', () => {
    // Alterna a classe 'open' no nav: abre ou fecha o menu
    navMenu.classList.toggle('open');

    // Alterna a classe 'active' no botão: anima o ícone hamburger para X (e vice-versa)
    hamburger.classList.toggle('active');
});
