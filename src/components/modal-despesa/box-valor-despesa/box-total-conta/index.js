import ValorTotalConta from "../valor-total-conta/index.js";
import CriarElemento from "../../../shared/criar-elemento/index.js";
import ImportCss from "../../../../utils/import-css/index.js";

ImportCss({ path: 'modal-despesa/box-valor-despesa/box-total-conta' });

const BoxTotalConta = {
    build: ({ valorDiscador }) => {
        const boxTotal = CriarElemento({ tipoElemento: 'div', classes: ['box-total'] })
        const valorTotalConta = ValorTotalConta.build({ valorDiscador });

        boxTotal.appendChild(valorTotalConta);

        return boxTotal;
    },
    remove: () => {
        const boxTotal = document.querySelector('.box-total');
        boxTotal && boxTotal.remove();
    }
};

export default BoxTotalConta;