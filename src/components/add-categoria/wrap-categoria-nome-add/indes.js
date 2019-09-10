import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({path: 'add-categoria/wrap-categoria-nome-add'});

const WrapCategoriaNomeAdd = {
    build: ({ categoria, nome }) => {
        const carteiraWrapper = CriarElemento({ tipoElemento: 'div', classes: ['carteira-nome-wrapper'] })
        const categoriaText = CriarElemento({ tipoElemento: 'h1', conteudo: categoria, classes: ["text-carteira-add", 'carteira-text'] })
        const nomeText = CriarElemento({ tipoElemento: 'h2', conteudo: nome, classes: ["nome-add-text"] })

        carteiraWrapper.appendChild(categoriaText);
        carteiraWrapper.appendChild(nomeText);
        
        return carteiraWrapper;

    },
    remove: () =>{
        const wrapCategoriaNomeAdd = document.querySelector('.carteira-nome-wrapper');
        wrapCategoriaNomeAdd && wrapCategoriaNomeAdd.remove();
    }
    
}

export default WrapCategoriaNomeAdd;