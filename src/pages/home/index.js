import CriarBoxIcone from "../../components/shared/criar-box-icone/index.js";
import CriarElemento from "../../components/shared/criar-elemento/index.js";
import ImportCss from "../../utils/import-css/index.js";
import CarteirasBox from "./carteiras-box/index.js";
import Rodape from "./rodape/index.js";

ImportCss({ page: "home" });

const CriaHome = {
  build: () => {
    const containerGeral = document.querySelector('.container')
    const container = CriarElemento({tipoElemento: 'section', classes: ['conta-container']});
    const cadastroConta = CarteirasBox.build();

    const campoValores = () => {
      const valorTotalCarteiras = somarCarteiras();
      const boxValores = CriarElemento({
        tipoElemento: "div",
        classes: ["campo-valores"]
      });
      const valores = CriarElemento({
        tipoElemento: "span",
        conteudo: `R$ ${valorTotalCarteiras}`,
        classes: ["valores"]
      });

      boxValores.appendChild(valores);

      return boxValores;
    };

    const criarWrapMetas = () => {
      const boxMetas = CriarElemento({
        tipoElemento: "div",
        classes: ["box-metas"]
      });
      const wrapMeta = criaWrapMeta();
      const textMetas = CriarElemento({
        tipoElemento: "h2",
        conteudo: "Metas",
        classes: ["text-metas"]
      });

      boxMetas.appendChild(textMetas);
      boxMetas.appendChild(wrapMeta);

      return boxMetas;
    };

    const criaWrapMeta = () => {
      const boxIcone = CriarBoxIcone("var(--primary)", "icone-meta");
      const wrapMeta = CriarElemento({
        tipoElemento: "div",
        classes: ["wrap-meta"]
      });
      const barraMeta = criarWrapBarraMeta();
      const valorMeta = criarValorMeta();

      wrapMeta.appendChild(boxIcone);
      wrapMeta.appendChild(barraMeta);
      wrapMeta.appendChild(valorMeta);

      return wrapMeta;
    };
    const criarWrapBarraMeta = () => {
      const wrapTituloBarra = CriarElemento({
        tipoElemento: "div",
        classes: ["wrap-titulo-barra"]
      });
      const titulo = CriarElemento({
        tipoElemento: "h2",
        conteudo: "Reserva",
        classes: ["text-nome-meta"]
      });
      const barra = CriarElemento({
        tipoElemento: "div",
        classes: ["barra-progresso"]
      });

      wrapTituloBarra.appendChild(titulo);
      wrapTituloBarra.appendChild(barra);

      return wrapTituloBarra;
    };

    const criarValorMeta = () => {
      const valorMeta = CriarElemento({
        tipoElemento: "span",
        conteudo: "R$ 100.000,00",
        classes: ["valor-meta"]
      });

      return valorMeta;
    };
    const valores = campoValores();
    const wrapMetas = criarWrapMetas();

    containerGeral.appendChild(container);
    container.appendChild(valores);
    container.appendChild(cadastroConta);
    container.appendChild(wrapMetas);
  },
  remove: () =>{
    const container = document.querySelector(".container");
    const containerHome = document.querySelector('.conta-container');

    container.removeChild(containerHome);
  }
};

const somarCarteiras = () => {
  let valor = 0;
  state.carteiras.map(carteira => {
    valor = valor + parseFloat(carteira.valor);
  });
  return valor.toFixed(2);
};

export default CriaHome;
