const CriarDiv = (...classe) => {
    const elemento = document.createElement("div");
  
    [...classe].map(item => elemento.classList.add(item));
  
    return elemento;
  };

  export default CriarDiv;