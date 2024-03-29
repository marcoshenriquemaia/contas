import CriarIcone from "../../../components/shared/criar-icone/index.js";
import Discador from "../../../components/discador/index.js";
import CriarElemento from "../../../components/shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import CriaHome from "../index.js";

ImportCss({ page: "home/rodape" });

const Rodape = {
  build: ({ valorDiscador, carteira, dashBoard }) => {
    const container = document.querySelector(".container");
    const boxRodape = CriarElemento({
      tipoElemento: "div",
      classes: ["rodape"]
    });
    const botaoAdd = CriarElemento({
      tipoElemento: "button",
      classes: ["button-add"]
    });
    const wrapBoxEsquerda = CriarElemento({
      tipoElemento: "div",
      classes: ["wrap-div-left"]
    });
    const wrapBoxDireita = CriarElemento({
      tipoElemento: "div",
      classes: ["wrap-div-right"]
    });
    const imagemAdd = CriarIcone("add (2).png", "", "imagem-add");
    const botaoHome = CriarElemento({ tipoElemento: "i", icone: ["home"] });
    const icone2 = CriarElemento({
      tipoElemento: "i",
      icone: ["estatisticas"]
    });
    const icone3 = CriarElemento({
      tipoElemento: "i",
      icone: ["contaCompartilhada"]
    });
    const icone4 = CriarElemento({ tipoElemento: "i", icone: ["config"] });

    boxRodape.appendChild(wrapBoxEsquerda);
    boxRodape.appendChild(botaoAdd);
    boxRodape.appendChild(wrapBoxDireita);
    botaoAdd.appendChild(imagemAdd);
    wrapBoxEsquerda.appendChild(botaoHome);
    wrapBoxEsquerda.appendChild(icone2);
    wrapBoxDireita.appendChild(icone3);
    wrapBoxDireita.appendChild(icone4);

    botaoAdd.addEventListener("click", e => {
      const containerDespesa = document.querySelector(".container-despesa");
      const containerLista = document.querySelector(".container-lista");

      containerDespesa && container.removeChild(containerDespesa);
      containerLista && container.removeChild(containerLista);

      const discador = Discador.build({
        valorDiscador,
        carteira,
        botaoAdd,
        dashBoard
      });
      CriaHome.remove();
      container.appendChild(discador);
    });

    botaoHome.addEventListener("click", () => {
      const containerDiscador = document.querySelector(".container-discador");
      const containerDespesa = document.querySelector(".container-despesa");
      const containerLista = document.querySelector(".container-lista");
      const containerHome = document.querySelector('.conta-container');

      containerDespesa && container.removeChild(containerDespesa);
      containerDiscador && container.removeChild(containerDiscador);
      containerLista && container.removeChild(containerLista);
      !containerHome && CriaHome.build();
    });
    return boxRodape;
  },
  remove: () => {}
};

export default Rodape;
