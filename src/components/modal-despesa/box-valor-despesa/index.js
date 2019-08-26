import CriarIcone from "../../shared/criar-icone/index.js";
import CriarElemento from "../../shared/criar-elemento/index.js";

const BoxTotalDespesa = valorDiscador => {
  const criarValorTotalConta = () => {
    const valorTotalConta = CriarElemento({tipoElemento: 'span', classes: ['valor-total']})
    valorTotalConta.textContent = valorDiscador;

    return valorTotalConta;
  };
  const criarBoxTotalConta = () => {
    const boxTotal = CriarElemento({tipoElemento: 'div', classes: ['box-total']})
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
