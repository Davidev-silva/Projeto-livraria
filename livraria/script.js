
const botaomodo = document.getElementById("botaomodo");

botaomodo.addEventListener('click', () => {
  const html = document.documentElement;
  const novoTema = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', novoTema);
  
});