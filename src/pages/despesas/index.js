import CriarIcone from "../../components/shared/criar-icone/index.js";
import CriarElemento from "../../components/shared/criar-elemento/index.js";
import ImportCss from "../../utils/import-css/index.js";

ImportCss({page: 'despesas'});

const Despesas = () => {
  const container = document.querySelector('.container');
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);

  const valorDespesa = somarContas();

  const containerLista = CriarElemento({tipoElemento: 'section', classes: ['container-lista']})
  const campoValores = CriarElemento({tipoElemento: 'span', conteudo: `R$ ${valorDespesa}`, classes: ["campo-valores", "valores"]})
  const iconeValor = CriarIcone("bill.png", "Icone valores", "icones");
  const containerDataConta = CriarElemento({tipoElemento: 'div', classes: ['container-data-conta']})
  const textData = CriarElemento({tipoElemento: 'span', conteudo: '13/08', classes: ['text-data-lista']})

  container.appendChild(containerLista);

  containerLista.appendChild(campoValores);
  containerLista.appendChild(containerDataConta);

  campoValores.appendChild(iconeValor);

  containerDataConta.appendChild(textData);

  const dashboardItem = dashBoardItem => {
    const {
      categoria: { principal, sub },
      valor,
      status
    } = dashBoardItem;
  
    const iconeDespesa = () => {
      const boxIcone = CriarElemento({tipoElemento: 'div', classes: ['box-icone-carteira']})
      const icone = CriarElemento({tipoElemento: 'i', icone: principal.toLowerCase(), classes: ['despesa-icone']});

      boxIcone.appendChild(icone);
  
      return boxIcone;
    };
  
    const wrapTipoConta = () => {
      const wrapTipoDespesa = CriarElemento({tipoElemento: 'div', classes: ["wrap-tipo-conta", "wrap-text-conta"]})
      const textTipo = CriarElemento({tipoElemento: 'span', conteudo: principal, classes: ["text-bold"]})
      const textConta = CriarElemento({tipoElemento: 'span', conteudo: sub, classes: ["all-texte-conta"]})
  
      wrapTipoDespesa.appendChild(textTipo);
      wrapTipoDespesa.appendChild(textConta);
  
      return wrapTipoDespesa;
    };
  
    const wrapStatusPagamento = () => {
      const wrapStatusPagamento = CriarElemento({tipoElemento: 'div', classes: ["wrap-status-pagamento","wrap-text-conta"]})
      const valorDespesa = CriarElemento({tipoElemento: 'span', conteudo: `R$ ${valor}`, classes: ["all-text-conta", "text-bold"]})
      const statusDespesa = CriarElemento({tipoElemento: 'span', conteudo: status ? 'Pago' : 'Não pago', classes: ["all-text-conta"]})
  
      wrapStatusPagamento.appendChild(valorDespesa);
      wrapStatusPagamento.appendChild(statusDespesa);
  
      return wrapStatusPagamento;
    };
  
    const conta = CriarElemento({tipoElemento: 'div', classes: ['conta']})
    const boxTextDespesa = CriarElemento({tipoElemento: 'div', classes: ["box-text-conta"]})
    const icone = iconeDespesa();
    const wrapTipoContaDespesa = wrapTipoConta();
    const wrapStatusPagamentoDespesa = wrapStatusPagamento();
  
    conta.appendChild(icone);
    conta.appendChild(boxTextDespesa);
    boxTextDespesa.appendChild(wrapTipoContaDespesa);
    boxTextDespesa.appendChild(wrapStatusPagamentoDespesa);

    
  return conta;
  
  };
  
  const listarDashboard = () => {
    const container = document.querySelector(".container-data-conta");
    state.dashBoard.map(item => {
      const dashBoardElement = dashboardItem(item);
      container.appendChild(dashBoardElement);
    });
  };  
  listarDashboard();
};

const somarContas = () =>{
  let valor = 0;
  state.dashBoard.map(item =>{
    console.log(item.valor)
    valor = valor + item.valor;
  })
  return valor;
}


export default Despesas;

