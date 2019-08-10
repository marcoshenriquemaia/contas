const CriarIcone = (icone, alt,...classes) =>{
    const elemento = document.createElement('img');
    elemento.setAttribute('src', `./src/assets/icon/${icone}`);
    elemento.setAttribute('alt', alt);
    [...classes].map(item => elemento.classList.add(item));
  
    return elemento; 
  }

  export default CriarIcone;