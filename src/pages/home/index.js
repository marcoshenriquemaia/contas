import CriarIcone from "../../components/shared/criar-icone/index.js";
import CriarDiv from "../../components/shared/criar-div/index.js";
import CriarSpan from "../../components/shared/criar-span/index.js";
import CriarH2 from "../../components/shared/criar-h2/index.js";
import CriarBoxIcone from "../../components/shared/criar-box-icone/index.js";

const CriaHome = () => {
  const container = document.querySelector(".container");
  const cadastroConta = CriarDiv("cadastro-conta");

  const campoValores = () => {
    const boxValores = CriarDiv("campo-valores");
    const valores = CriarSpan("R$ 100.000,00", "valores");
    // const iconeValores = CriarIcone("bill.png", "icones");

    // valores.appendChild(iconeValores);
    boxValores.appendChild(valores);

    return boxValores;
  };

  const criarWrapMetas = () => {
    const boxMetas = CriarDiv("box-metas");
    const wrapMeta = criaWrapMeta();
    const textMetas = CriarH2("Metas", "text-metas");

    boxMetas.appendChild(textMetas);
    boxMetas.appendChild(wrapMeta);

    return boxMetas;
  };

  const criaWrapMeta = () => {
    const boxIcone = CriarBoxIcone("var(--primary)", "icone-meta");
    const wrapMeta = CriarDiv("wrap-meta");
    const barraMeta = criarWrapBarraMeta();
    const valorMeta = criarValorMeta();

    wrapMeta.appendChild(boxIcone);
    wrapMeta.appendChild(barraMeta);
    wrapMeta.appendChild(valorMeta);

    return wrapMeta;
  };
  const criarWrapBarraMeta = () => {
    const wrapTituloBarra = CriarDiv("wrap-titulo-barra");
    const titulo = CriarH2("Reserva", "text-nome-meta");
    const barra = CriarDiv("barra-progresso");

    wrapTituloBarra.appendChild(titulo);
    wrapTituloBarra.appendChild(barra);

    return wrapTituloBarra;
  };

  const criarValorMeta = () => {
    const valorMeta = CriarSpan("R$ 100.000,00", "valor-meta");

    return valorMeta;
  };

  const valores = campoValores();
  const wrapMetas = criarWrapMetas();

  container.appendChild(valores);
  container.appendChild(cadastroConta);
  container.appendChild(wrapMetas);
};

export default CriaHome;