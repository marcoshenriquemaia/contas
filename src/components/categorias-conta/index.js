import CriarDiv from '../shared/criar-div/index.js';
import BoxCategorias from '../box-categorias/index.js';

const CriarCadastroCategorias = () => {
    const containerDespesa = document.querySelector(".container-despesa");
  
    const cadastroCategorias = CriarDiv("cadastro-carteira");
  
    const boxCategorias = BoxCategorias();
  
    
    cadastroCategorias.appendChild(boxCategorias);
    containerDespesa.appendChild(cadastroCategorias);
  
    boxCategorias.addEventListener("click", clickCategoria);
  };

  const clickCategoria = () => {
    const cadastroCarteira = document.querySelector(".cadastro-carteira");
    const containerDespesa = document.querySelector('.container-despesa');
  
    containerDespesa.removeChild(cadastroCarteira);
  };

  export default CriarCadastroCategorias; 