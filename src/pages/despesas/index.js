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

const dashboardItem = dashBoardItem => {
  const {
    categoria: { principal, sub },
    valor,
    status
  } = dashBoardItem;

  const iconeDespesa = () => {
    const boxIcone = CriarDiv("icone-conta");
    const icone = CriarIcone(`${principal}.png`, "Icone", "icones");

    boxIcone.appendChild(icone);

    return boxIcone;
  };

  const wrapTipoConta = () => {
    const wrapTipoDespesa = CriarDiv("wrap-tipo-conta", "wrap-text-conta");
    const textTipo = CriarSpan(principal, "all-text-conta", "text-bold");
    const textConta = CriarSpan(sub, "all-texte-conta");

    wrapTipoDespesa.appendChild(textTipo);
    wrapTipoDespesa.appendChild(textConta);

    return wrapTipoDespesa;
  };

  const wrapStatusPagamento = () => {
    const wrapStatusPagamento = CriarDiv(
      "wrap-status-pagamento",
      "wrap-text-conta"
    );
    const valorDespesa = CriarSpan(`R$ ${valor}`, "all-text-conta", "text-bold");
    const statusDespesa = CriarSpan(status ? 'Pago' : 'Não pago', "all-text-conta");

    wrapStatusPagamento.appendChild(valorDespesa);
    wrapStatusPagamento.appendChild(statusDespesa);

    return wrapStatusPagamento;
  };

  const conta = CriarDiv('conta');
  const boxTextDespesa = CriarDiv("box-text-conta");
  const icone = iconeDespesa();
  const wrapTipoContaDespesa = wrapTipoConta();
  const wrapStatusPagamentoDespesa = wrapStatusPagamento();

  conta.appendChild(icone);
  conta.appendChild(boxTextDespesa);
  boxTextDespesa.appendChild(wrapTipoContaDespesa);
  boxTextDespesa.appendChild(wrapStatusPagamentoDespesa);

  listarDashboard();

  return conta;
};

const listarDashboard = () => {
  const container = document.querySelector(".container-data-conta");
  dashBoard.map(item => {
    const dashBoardElement = dashboardItem(item);
    container.appendChild(dashBoardElement);
  });
};


export default Despesas;

