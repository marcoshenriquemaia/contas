import CriarIcone from "../../shared/criar-icone/index.js";
import BoxTotalConta from "./box-total-conta/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({ path: 'modal-despesa/box-valor-despesa' });

const BoxTotalDespesa = {
    build: ({ valorDiscador }) => {
        const boxTotal = BoxTotalConta.build({ valorDiscador });
        const excluirTotal = CriarIcone("delete (1).png", "Voltar", "botao-excluir");

        boxTotal.appendChild(excluirTotal);
        excluirTotal.addEventListener("click", clickExcluirTotal);

        return boxTotal;
    },
    remove: () => {
        const boxTotal = document.querySelector('.box-total')
        const excluirTotal = document.querySelector('.botao-excluir');

        boxTotal && boxTotal.remove();
        excluirTotal && excluirTotal.removeEventListener('click', clickExcluirTotal);
    }
};

const clickExcluirTotal = () => {
    const container = document.querySelector(".container");
    const containerDespesa = document.querySelector(".container-despesa");
    container.removeChild(containerDespesa);
};


export default BoxTotalDespesa;