import BoxCarteira from "../box-carteira/index.js";
import AddCategiria from "../add-categoria/index.js";
import DataDespesa from "./data-despesa/index.js";
import BoxParcelas from "./box-parcelas/index.js";
import BoxTags from "../box-tags/index.js";
import CriarCadastroCategorias from "./categorias-conta/index.js";
import Despesas from "../../pages/despesas/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";
import Cabecalho from "../cabecalho/index.js";
import BoxTotalDespesa from "./box-valor-despesa/index.js";

const ModalDespesa = ({ valorDiscador, carteira, botaoAdd, dashBoard }) => {
  const container = document.querySelector('.container');
  const containerList = document.querySelector(".container-lista");
  containerList && containerList.remove();

  const containerDespesa = document.createElement("section");
  containerDespesa.classList.add("container-despesa");

  const cabecalho = Cabecalho.build();

  const boxTotal = BoxTotalDespesa(valorDiscador);

  const wrapBoxCarteira = CriarElemento({ tipoElemento: 'div', classes: ['wrap-box-carteira'] })
  const boxCarteira = BoxCarteira.build({ carteira });
  const boxCarteiraAdd = AddCategiria.build();
  const dataDespesa = DataDespesa();
  const boxParcelas = BoxParcelas();
  const campoTags = BoxTags.build();
  const campoObs = CriarElemento({ tipoElemento: 'textarea', placeholder: 'Obs...', classes: ['obs'] })
  const botaoConfirmar = CriarElemento({ tipoElemento: 'button', conteudo: 'Confirmar', classes: ['botao-confirmar'] })

  container.appendChild(containerDespesa);

  containerDespesa.appendChild(boxTotal);
  containerDespesa.appendChild(cabecalho);
  containerDespesa.appendChild(wrapBoxCarteira);
  containerDespesa.appendChild(dataDespesa);
  containerDespesa.appendChild(boxParcelas);
  containerDespesa.appendChild(campoTags);
  containerDespesa.appendChild(campoObs);
  containerDespesa.appendChild(botaoConfirmar);

  wrapBoxCarteira.appendChild(boxCarteira);
  wrapBoxCarteira.appendChild(boxCarteiraAdd);

  botaoAdd.addEventListener("click", CriarCadastroCategorias)
  botaoConfirmar.addEventListener("click", () => Despesas(dashBoard))

  return containerDespesa;
};

export default ModalDespesa;