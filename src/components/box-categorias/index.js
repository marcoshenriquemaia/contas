import CriarDiv from '../shared/criar-div/index.js';
import CriarSpan from '../shared/criar-span/index.js';
import CriarIcone from '../shared/criar-icone/index.js';

const CriarCategoriasConta = () => {
    const boxCategorias = document.createElement('div');
    boxCategorias.classList.add('box-categorias');
  
    const wrapLazer = CriarDiv('wrap-lazer', 'wrap-all-categorias');
  
    const wrapAlimentacao = CriarDiv('wrap-alimentacao', 'wrap-all-categorias');
  
    const wrapRoupas = CriarDiv('wrap-roupas', 'wrap-all-categorias');
  
    const wrapSupermercado = CriarDiv('wrap-supermercado', 'wrap-all-categorias');
  
    const iconeLazer = CriarIcone('park.png', 'icones');
  
    const iconeAlimentacao = CriarIcone('fork.png', 'icones');
  
    const iconeRoupas = CriarIcone('clothes.png', 'icones');
  
    const iconeSupermercado = CriarIcone('shopping-cart.png', 'icones');
  
    const textLazer = CriarSpan('Lazer', 'text-categoria');
  
    const textAlimentacao = CriarSpan('Alimentação','text-categoria');
  
    const textRoupas = CriarSpan('Roupas', 'text-categoria');
  
    const textSupermercado = CriarSpan('Supermercado', 'text-categoria');
  
    wrapLazer.appendChild(iconeLazer);
    wrapLazer.appendChild(textLazer);
    wrapAlimentacao.appendChild(iconeAlimentacao);
    wrapAlimentacao.appendChild(textAlimentacao);
    wrapRoupas.appendChild(iconeRoupas);
    wrapRoupas.appendChild(textRoupas);
    wrapSupermercado.appendChild(iconeSupermercado);
    wrapSupermercado.appendChild(textSupermercado);
  
    boxCategorias.appendChild(wrapLazer);
    boxCategorias.appendChild(wrapAlimentacao);
    boxCategorias.appendChild(wrapRoupas);
    boxCategorias.appendChild(wrapSupermercado);
  
    return boxCategorias;
  };

export default CriarCategoriasConta;