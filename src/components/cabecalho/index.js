import CriarElemento from "../shared/criar-elemento/index.js";

const Cabecalho = {
    build: () => {
        const cabecalho = CriarElemento({ tipoElemento: 'header', classes: ["secoes-cabecalho"] })
        const receita = CriarElemento({ tipoElemento: 'span', conteudo: 'Receita', classes: ["receita", "receita-despesa-transferencia"] })
        const despesa = CriarElemento({ tipoElemento: 'span', conteudo: 'Despesa', classes: ["despesa", "receita-despesa-transferencia"] })
        const trasnferencia = CriarElemento({ tipoElemento: 'span', conteudo: 'Transferência', classes: ["transferencia", "receita-despesa-transferencia"] })

        cabecalho.appendChild(receita);
        cabecalho.appendChild(despesa);
        cabecalho.appendChild(trasnferencia);

        return cabecalho;
    },
    remove: () =>{
        const cabecalho = document.querySelector('.secoes-cabecalho');
        cabecalho && cabecalho.remove();
    }
}


export default Cabecalho;

