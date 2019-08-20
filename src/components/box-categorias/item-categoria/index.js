import CriarDiv from "../../shared/criar-div/index.js";
import CriarIcone from "../../shared/criar-icone/index.js";
import CriarSpan from "../../shared/criar-span/index.js";

const ItemCategoria = (item, text) =>{
    const wrapperItem = CriarDiv(`wrap-${item}`, 'wrap-all-categorias');
    const iconeItem = CriarIcone(`${item}.png`, 'icone categoria', 'icones');
    const textItem = CriarSpan(text, 'text-categoria');

    wrapperItem.appendChild(iconeItem);
    wrapperItem.appendChild(textItem);

    return wrapperItem;
}

export default ItemCategoria;