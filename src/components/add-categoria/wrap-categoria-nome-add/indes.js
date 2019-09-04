import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({path: 'add-categoria/wrap-categoria-nome-add'});

const WrapCategoriaNomeAdd = {
    build: ({ categoria, nome }) => {
        const wrapCategoriaNomeAdd = CriarElemento({ tipoElemento: 'div', classes: ['wrap-carteira-nome'] })
        const textCategoriaAdd = CriarElemento({ tipoElemento: 'span', conteudo: categoria, classes: ["text-carteira-add", 'text-carteira'] })
        const textNomeAdd = CriarElemento({ tipoElemento: 'span', conteudo: nome, classes: ["text-nome-add"] })

        wrapCategoriaNomeAdd.appendChild(textCategoriaAdd);
        wrapCategoriaNomeAdd.appendChild(textNomeAdd);

        return wrapCategoriaNomeAdd;

    },
    remove: () =>{
        const wrapCategoriaNomeAdd = document.querySelector('.wrap-carteira-nome');
        wrapCategoriaNomeAdd && wrapCategoriaNomeAdd.remove();
    }
    
}

export default WrapCategoriaNomeAdd;