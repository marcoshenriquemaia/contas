const CriarSpan = (conteudo, ...classe) => {
    const elemento = document.createElement("span");
    elemento.textContent = conteudo;
    [...classe].map(item => elemento.classList.add(item))
  
    return elemento;
  };
  
export default CriarSpan; 