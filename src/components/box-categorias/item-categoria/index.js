import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({ path: 'box-categorias/item-categoria' })

const ItemCategoria = {
    build: ({ item, text }) => {
        const wrapperItem = CriarElemento({ tipoElemento: 'div', classes: [`wrap-${item}`, 'wrap-all-categorias'] })
        const iconeItem = CriarElemento({ tipoElemento: 'i', icone: item, classes: ['icone-categoria'] })
        const textItem = CriarElemento({ tipoElemento: 'span', classes: ['text-categoria'], conteudo: text })

        wrapperItem.appendChild(iconeItem);
        wrapperItem.appendChild(textItem);

        return wrapperItem;
    },
    remove: () => {
        const wrapperItem = document.querySelector('.wrap-all-categorias');
        wrapperItem && wrapperItem.remove();
    }
}

export default ItemCategoria;