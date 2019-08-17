import CriarIcone from "../../components/shared/criar-icone/index.js";
import CriarDiv from "../../components/shared/criar-div/index.js";
import CriarSpan from "../../components/shared/criar-span/index.js";

const Despesas = () => {
  const container = document.querySelector('.container');
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);

  const containerLista = document.createElement("section");
  containerLista.classList.add("container-lista");

  const campoValores = CriarSpan("R$ 100.000,00", "campo-valores", "valores");
  const iconeValor = CriarIcone("bill.png", "Icone valores", "icones");
  const containerDataConta = CriarDiv("container-data-conta");
  const textData = CriarSpan("13/08", "text-data-lista");

  container.appendChild(containerLista);

  containerLista.appendChild(campoValores);
  containerLista.appendChild(containerDataConta);

  campoValores.appendChild(iconeValor);

  containerDataConta.appendChild(textData);
};

export default Despesas;

