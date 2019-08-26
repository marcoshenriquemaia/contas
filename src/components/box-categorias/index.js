import ItemCategoria from './item-categoria/index.js';
import CriarElemento from '../shared/criar-elemento/index.js';

const CriarCategoriasConta = () => {
    const boxCategorias = CriarElemento({tipoElemento: 'div', classes: ['box-categorias']})
    const wrapLazer = ItemCategoria('lazer', 'Lazer');
    const wrapRoupas = ItemCategoria('roupas', 'Roupas');
    const wrapSupermercado = ItemCategoria('supermercado', 'Supermercado');
    const wrapAlimentacao = ItemCategoria('alimentacao', 'Alimentacao');

    boxCategorias.appendChild(wrapLazer);
    boxCategorias.appendChild(wrapAlimentacao);
    boxCategorias.appendChild(wrapRoupas);
    boxCategorias.appendChild(wrapSupermercado);
  
    return boxCategorias;
  };

export default CriarCategoriasConta;