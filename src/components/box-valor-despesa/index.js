import CriarIcone from "../shared/criar-icone/index.js";
import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";

const BoxTotalDespesa = valorDiscador => {
  const criarValorTotalConta = () => {
    const valorTotalConta = CriarSpan("", "valor-total");
    valorTotalConta.textContent = valorDiscador;

    return valorTotalConta;
  };
  const criarBoxTotalConta = () => {
    const boxTotal = CriarDiv("box-total");
    const valorTotalConta = criarValorTotalConta();

    boxTotal.appendChild(valorTotalConta);

    return boxTotal;
  };

  const boxTotal = criarBoxTotalConta(valorDiscador);
  const excluirTotal = CriarIcone("delete (1).png", "Voltar", "botao-excluir");

  boxTotal.appendChild(excluirTotal);
  excluirTotal.addEventListener("click", clickExcluirTotal);

  return boxTotal;
};

const clickExcluirTotal = () => {
  const container = document.querySelector(".container");
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);
};


export default BoxTotalDespesa;
