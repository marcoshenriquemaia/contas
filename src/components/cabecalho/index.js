import CriarSpan from "../shared/criar-span/index.js";

const Cabecalho = () => {
    const cabecalho = document.createElement("header");
    cabecalho.classList.add("secoes-cabecalho");

    const receita = CriarSpan(
        "Receita",
        "receita",
        "receita-despesa-transferencia"
    );
    const despesa = CriarSpan(
        "Despesa",
        "despesa",
        "receita-despesa-transferencia"
    );
    const trasnferencia = CriarSpan(
        "Transferência",
        "transferencia",
        "receita-despesa-transferencia"
    );

    cabecalho.appendChild(receita);
    cabecalho.appendChild(despesa);
    cabecalho.appendChild(trasnferencia);

    return cabecalho;
}

export default Cabecalho;

