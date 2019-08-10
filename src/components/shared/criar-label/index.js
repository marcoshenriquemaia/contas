const CriarLabel = (text, nameInput, ...classe) => {
    const elemento = document.createElement("label");
  
    elemento.setAttribute("for", nameInput);
    elemento.textContent = text;
    [...classe].map(item => elemento.classList.add(item));
  
    return elemento;
  };

export default CriarLabel;