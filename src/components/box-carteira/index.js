import WrapCarteiraNome from "./wrapper-carteira-nome/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";
import CriarValorCarteira from "./valor-carteira/index.js";
import ImportCss from "../../utils/import-css/index.js"; 
import CarteirasModal from "./carteiras-modal/index.js";

ImportCss({ path: 'box-carteira' });

const BoxCarteira = {
    build: ({ carteira }) => {
        const { nome, tipo, cor } = carteira;

        const boxCarteira = CriarElemento({ tipoElemento: 'div', classes: ['box-carteira'] })
        const wrapCarteiraNome = WrapCarteiraNome.build({ nome, tipo, boxCarteira });
        const iconeAdd = CriarElemento({tipoElemento: 'i', icone: 'add', classes: ['carteira-icone', 'icones']})
        // const valorCarteira = CriarValorCarteira.build({ valor });
        const boxIcone = CriarElemento({ tipoElemento: 'div', cor: cor, classes: ['box-icone-carteira'] })
        const icone = CriarElemento({ tipoElemento: 'i', icone: 'aviso', classes: ['icone-carteira'] })

        boxCarteira.appendChild(boxIcone);
        boxIcone.appendChild(icone);
        boxCarteira.appendChild(wrapCarteiraNome);
        boxCarteira.appendChild(iconeAdd);

        iconeAdd.addEventListener('click', () => {
            const container = document.querySelector('.container')
            const modal = CarteirasModal.build();

            container.appendChild(modal);
        })
        return boxCarteira;
    },
    remove: () => {
        const cadastroConta = document.querySelector('.cadastro-conta');
        cadastroConta && cadastroConta.remove();
    }
}


export default BoxCarteira;