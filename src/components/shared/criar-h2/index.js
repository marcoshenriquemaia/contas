const CriarH2 = (conteudo, ...classe) => {
    const elemento = document.createElement("h2");
    elemento.textContent = conteudo;
      [...classe].map(item => elemento.classList.add(item))
    return elemento;
  };

export default CriarH2; 