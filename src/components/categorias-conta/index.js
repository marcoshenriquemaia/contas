import CriarDiv from '../shared/criar-div/index.js';
import BoxCategorias from '../box-categorias/index.js';
import MudaIcone from '../muda-icone/index.js';

const CriarCadastroCategorias = () => {
    const containerDespesa = document.querySelector(".container-despesa");
  
    const cadastroCategorias = CriarDiv("cadastro-carteira");
  
    const boxCategorias = BoxCategorias();
  
    
    cadastroCategorias.appendChild(boxCategorias);
    containerDespesa.appendChild(cadastroCategorias);
    
    boxCategorias.addEventListener("click", clickCategoria);
    
    const categorias = document.querySelectorAll('.wrap-all-categorias');
    const textCategoria = [...document.querySelectorAll('.text-categoria')];
      [...categorias].map((categoria, index) =>{
        categoria.addEventListener('click', () =>{
          //Escreve o nome da categoria
          const textCarteira = document.querySelector('.text-carteira-add');
          textCarteira.textContent = textCategoria[index].textContent;

          // Troca o icone da categoria
          const nomeIcone = categoria.classList[0].substring(5,categoria.classList[0].length);
          MudaIcone(`${nomeIcone}.png`,'box-carteira-add','icone-carteira', 'icone-carteira-add');
        })
      })
  };

  const clickCategoria = () => {
    const cadastroCarteira = document.querySelector(".cadastro-carteira");
    const containerDespesa = document.querySelector('.container-despesa');
  
    containerDespesa.removeChild(cadastroCarteira);
  };

  export default CriarCadastroCategorias; 