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
import ImportCss from "../../utils/import-css/index.js";

ImportCss({path: 'modal-despesa'})

const ModalDespesa = {
  build: ({ valorDiscador, carteira, botaoAdd, dashBoard }) => {
    const containerDespesa = CriarElemento({ tipoElemento: 'section', classes: ['container-despesa'] });
    const cabecalho = Cabecalho.build();
    const boxTotal = BoxTotalDespesa.build({ valorDiscador });
    const wrapBoxCarteira = CriarElemento({ tipoElemento: 'div', classes: ['wrap-box-carteira'] })
    const boxCarteira = BoxCarteira.build({ carteira });
    const boxCarteiraAdd = AddCategiria.build();
    const dataDespesa = DataDespesa.build();
    const boxParcelas = BoxParcelas.build();
    const campoTags = BoxTags.build();
    const campoObs = CriarElemento({ tipoElemento: 'textarea', placeholder: 'Obs...', classes: ['obs'] })
    const botaoConfirmar = CriarElemento({ tipoElemento: 'button', conteudo: 'Confirmar', classes: ['botao-confirmar'] })

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
  }, 
  remove: () =>{
    const containerDespesa = document.querySelector('.container-despesa');
    containerDespesa && containerDespesa.remove();
  }
};

export default ModalDespesa;