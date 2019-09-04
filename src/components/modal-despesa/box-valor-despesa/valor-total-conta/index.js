import CriarElemento from "../../../shared/criar-elemento/index.js";
import ImportCss from "../../../../utils/import-css/index.js";

ImportCss({ path: 'modal-despesa/box-valor-despesa/valor-total-conta' });

const ValorTotalConta = {
    build: ({ valorDiscador }) => {
        const valorTotalConta = CriarElemento({ tipoElemento: 'span', classes: ['valor-total'] })
        valorTotalConta.textContent = valorDiscador;

        return valorTotalConta;
    },
    remove: () => {
        const valorTotalConta = document.querySelector('.valor-total');
        valorTotalConta && valorTotalConta.remove();
    }
};

export default ValorTotalConta;