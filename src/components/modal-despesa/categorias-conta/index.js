import BoxCategorias from '../../box-categorias/index.js';
import { DictionaryIcones } from '../../../domain/dictionary-icons/index.js';
import MudaI from '../../muda-i/index.js';
import CriarElemento from '../../shared/criar-elemento/index.js';

const CriarCadastroCategorias = () => {
  const containerDespesa = document.querySelector(".container-despesa");
  const cadastroCategorias = CriarElemento({tipoElemento: 'div', classes: ['cadastro-carteira']})
  const boxCategorias = BoxCategorias.build();
  const containerCadastroCategorias = CriarElemento({tipoElemento: 'div', classes: ['container-cadastro-categorias']})


  cadastroCategorias.appendChild(boxCategorias);
  containerCadastroCategorias.appendChild(cadastroCategorias);
  containerDespesa && containerDespesa.appendChild(containerCadastroCategorias);

  boxCategorias.addEventListener("click", clickCategoria);

  const categorias = document.querySelectorAll('.wrap-all-categorias');
  const textCategoria = [...document.querySelectorAll('.text-categoria')];
  [...categorias].map((categoria, index) => {
    categoria.addEventListener('click', () => {
      const textCarteira = document.querySelector('.text-carteira-add');
      textCarteira.textContent = textCategoria[index].textContent;

      const nomeIcone = categoria.classList[0].substring(5, categoria.classList[0].length);
      MudaI({icone: DictionaryIcones[nomeIcone]});
    })
  })
  containerCadastroCategorias.addEventListener('click', e =>{
    if(e.target.classList[0] != 'container-cadastro-categorias') return;
    containerDespesa.removeChild(containerCadastroCategorias);
  })
}

const clickCategoria = () => {
  const containerCadastroCategorias = document.querySelector(".container-cadastro-categorias");
  const containerDespesa = document.querySelector('.container-despesa');

  containerDespesa.removeChild(containerCadastroCategorias); 
};

export default CriarCadastroCategorias; 