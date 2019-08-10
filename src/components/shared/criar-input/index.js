const CriarInput = (tipo, placeholder, id, ...classe) => {
    const elemento = document.createElement("input");
    elemento.setAttribute("type", tipo);
    elemento.setAttribute("placeholder", placeholder);
    elemento.setAttribute("id", id);
    [...classe].map(item => elemento.classList.add(item));
  
    return elemento;
};

export default CriarInput; 
  