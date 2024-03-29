import CriarCadastroCategorias from '../modal-despesa/categorias-conta/index.js';
import Icone from "./icones/indes.js";
import WrapCategoriaNomeAdd from "./wrap-categoria-nome-add/indes.js";
import CriarElemento from "../shared/criar-elemento/index.js";
import ImportCss from '../../utils/import-css/index.js';

ImportCss({path: 'add-categoria'});

const AddCategiria = {
    build: () => {
        const boxCategoriaAdd = CriarElemento({ tipoElemento: 'div', classes: ['categoria-box'] });
        const iconeCategoria = Icone.build({ cor: '#fff', icone: 'aviso' });
        const wrapText = WrapCategoriaNomeAdd.build({ categoria: 'Categoria', nome: 'Nome' });
        const botaoAdd = CriarElemento({tipoElemento: 'i', icone: 'add', classes: ['categoria-icone']})

        boxCategoriaAdd.appendChild(iconeCategoria);
        boxCategoriaAdd.appendChild(wrapText);
        boxCategoriaAdd.appendChild(botaoAdd);

        botaoAdd.addEventListener('click', CriarCadastroCategorias);

        return boxCategoriaAdd;
    },
    remove: () =>{
        const boxCategoriaAdd = document.querySelector('.categoria-box');
        const botaoAdd = document.querySelector('.categoria-add');
        botaoAdd.removeEventListener(CriarCadastroCategorias);
        boxCategoriaAdd && boxCategoriaAdd.remove();
    }
}

export default AddCategiria;
