const CriarImagem = (imagem, alt, ...classe) => {
    const elemento = document.createElement("img");
    elemento.setAttribute("src", `./src/assets/icon/${imagem}`);
    elemento.setAttribute("alt", `${alt}`);
    [...classe].map(item => {
      elemento.classList.add(item);
    });
  
    return elemento;
};


export default CriarImagem; 