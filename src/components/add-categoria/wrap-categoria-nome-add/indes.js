import CriarElemento from "../../shared/criar-elemento/index.js";

const WrapCategoriaNomeAdd = ({categoria, nome}) =>{
    const wrapCategoriaNomeAdd = CriarElemento({ tipoElemento: 'div', classes: ['wrap-carteira-nome'] })
    const textCategoriaAdd = CriarElemento({ tipoElemento: 'span', conteudo: categoria, classes: ["text-carteira-add", 'text-carteira']})
    const textNomeAdd = CriarElemento({ tipoElemento: 'span', conteudo: nome, classes: ["text-nome-add"]})

    wrapCategoriaNomeAdd.appendChild(textCategoriaAdd);
    wrapCategoriaNomeAdd.appendChild(textNomeAdd);

    return wrapCategoriaNomeAdd;
  
}

export default WrapCategoriaNomeAdd;