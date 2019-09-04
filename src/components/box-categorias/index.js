import ItemCategoria from './item-categoria/index.js';
import CriarElemento from '../shared/criar-elemento/index.js';
import ImportCss from '../../utils/import-css/index.js';

ImportCss({ path: 'box-categorias' })

const CriarCategoriasConta = {
    build: () => {
        const boxCategorias = CriarElemento({ tipoElemento: 'div', classes: ['box-categorias'] })
        const wrapLazer = ItemCategoria.build({ item: 'lazer', text: 'Lazer' });
        const wrapRoupas = ItemCategoria.build({ item: 'roupas', text: 'Roupas' });
        const wrapSupermercado = ItemCategoria.build({ item: 'supermercado', text: 'Supermercado' });
        const wrapAlimentacao = ItemCategoria.build({ item: 'alimentacao', text: 'Alimentacao' });

        boxCategorias.appendChild(wrapLazer);
        boxCategorias.appendChild(wrapAlimentacao);
        boxCategorias.appendChild(wrapRoupas);
        boxCategorias.appendChild(wrapSupermercado);

        return boxCategorias;
    },
    remove: () => {
        const boxCategorias = document.querySelector('.box-categorias');
        boxCategorias && boxCategorias.remove();
    }
}

export default CriarCategoriasConta;