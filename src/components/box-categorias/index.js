import CriarDiv from '../shared/criar-div/index.js';
import CriarSpan from '../shared/criar-span/index.js';
import CriarIcone from '../shared/criar-icone/index.js';
import ItemCategoria from './item-categoria/index.js';

const CriarCategoriasConta = () => {
    const boxCategorias = CriarDiv('box-categorias');
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