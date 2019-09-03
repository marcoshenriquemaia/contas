import ValorTotalConta from "../valor-total-conta/index.js";
import CriarElemento from "../../../shared/criar-elemento/index.js";

const BoxTotalConta = {
    build: ({valorDiscador}) => {
        const boxTotal = CriarElemento({ tipoElemento: 'div', classes: ['box-total'] })
        const valorTotalConta = ValorTotalConta.build({ valorDiscador });

        boxTotal.appendChild(valorTotalConta);

        return boxTotal;
    },
    remove: () =>{
        const boxTotal = document.querySelector('.box-total');
        boxTotal && boxTotal.remove();
    }
};

export default BoxTotalConta;