import Cabecalho from "../cabecalho/index.js";
import BoxTotalDespesa from "../box-valor-despesa/index.js";
import CriarDiv from "../shared/criar-div/index.js";
import BoxCarteira from "../box-carteira/index.js";
import AddCategiria from "../add-categoria/index.js";
import DataDespesa from "../data-despesa/index.js";
import BoxParcelas from "../box-parcelas/index.js";
import BoxTags from "../box-tags/index.js";
import TextArea from "../shared/criar-textarea/index.js";
import CriarBotao from "../shared/criar-botao/index.js";
import CriarCadastroCategorias from "../categorias-conta/index.js";
import Despesas from "../../pages/despesas/index.js";

const ModalDespesa = (valorDiscador, carteira, botaoAdd, container, dashBoard) => {
    const containerList = document.querySelector(".container-lista");
    containerList && containerList.remove();
  
    const containerDespesa = document.createElement("section");
    containerDespesa.classList.add("container-despesa");
  
    const cabecalho = Cabecalho();
  
    const boxTotal = BoxTotalDespesa(valorDiscador);
  
    const wrapBoxCarteira = CriarDiv("wrap-box-carteira");
    const boxCarteira = BoxCarteira(carteira);
    const boxCarteiraAdd = AddCategiria();
    const dataDespesa = DataDespesa();
    const boxParcelas = BoxParcelas();
    const campoTags = BoxTags();
    const campoObs = TextArea('Obs...', 'obs');
    const botaoConfirmar = CriarBotao("Confirmar", "botao-confirmar");
  
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
    botaoConfirmar.addEventListener("click",() => Despesas(dashBoard))

    return containerDespesa;
  };

  export default ModalDespesa;