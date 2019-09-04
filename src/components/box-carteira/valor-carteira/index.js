import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({ path: 'box-carteira/valor-carteira' });

const CriarValorCarteira = {
    build: ({ valor }) => {
        const valorCarteira = CriarElemento({ tipoElemento: 'span', conteudo: `R$${valor}`, classes: ['valor-carteira'] })

        return valorCarteira;
    },
    remove: () => {
        const valorCarteira = document.querySelector('.valor-carteira');
        valorCarteira && valorCarteira.remove();
    }
};

export default CriarValorCarteira;