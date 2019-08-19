import CriarDiv from "../../shared/criar-div/index.js";
import CriarSpan from "../../shared/criar-span/index.js";

const WrapCategoriaNomeAdd = (categoria, nome) =>{
    const wrapCategoriaNomeAdd = CriarDiv("wrap-carteira-nome");

    const textCategoriaAdd = CriarSpan(categoria, "text-carteira-add", 'text-carteira');
  
    const textNomeAdd = CriarSpan(nome, "text-nome-add");

    wrapCategoriaNomeAdd.appendChild(textCategoriaAdd);
    wrapCategoriaNomeAdd.appendChild(textNomeAdd);

    return wrapCategoriaNomeAdd;
  
}

export default WrapCategoriaNomeAdd;