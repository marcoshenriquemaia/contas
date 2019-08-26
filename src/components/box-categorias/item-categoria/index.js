import CriarElemento from "../../shared/criar-elemento/index.js";

const ItemCategoria = (item, text) =>{
    const wrapperItem = CriarElemento({tipoElemento: 'div', classes: [`wrap-${item}`, 'wrap-all-categorias']})
    const iconeItem = CriarElemento({tipoElemento: 'i', icone: item, classes: ['icone-categoria']})
    const textItem = CriarElemento({tipoElemento: 'span', classes: ['text-categoria'], conteudo: text })

    wrapperItem.appendChild(iconeItem);
    wrapperItem.appendChild(textItem);

    return wrapperItem;
}

export default ItemCategoria;