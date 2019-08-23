import BoxCarteira from "./src/components/box-carteira/index.js";
import CriarCadastroCategorias from "./src/components/categorias-conta/index.js";
import Discador from "./src/components/discador/index.js";
import BoxTotalDespesa from "./src/components/box-valor-despesa/index.js";
import Despesas from './src/pages/despesas/index.js';

import CriarBoxIcone from "./src/components/shared/criar-box-icone/index.js";
import CriarDiv from "./src/components/shared/criar-div/index.js";
import CriarImagem from "./src/components/shared/criar-imagem/index.js";
import CriarBotao from "./src/components/shared/criar-botao/index.js";
import CriarIcone from "./src/components/shared/criar-icone/index.js";
import CriarSpan from "./src/components/shared/criar-span/index.js";
import CriarH2 from "./src/components/shared/criar-h2/index.js";
import CriarInput from "./src/components/shared/criar-input/index.js";
import AddCategiria from "./src/components/add-categoria/index.js";
import BoxParcelas from "./src/components/box-parcelas/index.js";
import BoxTags from "./src/components/box-tags/index.js";
import CriaHome from "./src/pages/home/index.js";
import DataDespesa from "./src/components/data-despesa/index.js";

const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const iconeHome = document.querySelector('.icone-1');


const carteira = {
  nome: "Marcoss",
  tipo: "Nubank",
  valor: 100,
  cor: "var(--primary)"
};

const dashBoardItem = {
  _id: "7asd-fasdf789",
  valor: 123123,
  tipo: "Despesa",
  carteira: {
    nome: "Nubank",
    nomePessoa: "raul"
  },
  categoria: {
    principal: "Lazer",
    sub: "Cinema"
  },
  tags: ["rei leao"],
  status: false,
  data: {
    dia: 11,
    mes: 8,
    ano: 2019
  },
  parcelado: {
    valorRestante: 100,
    quantidadeParcela: 2,
    parcelaAtual: {
      valor: 50,
      numero: 1,
      data: {
        dia: 11,
        mes: 8
      }
    },
    proximaParcela: {
      valor: 50,
      numero: 2,
      data: {
        dia: 11,
        mes: 9
      }
    }
  },
  obs: "Hakuna matata",
  createdAt: new Date()
};

const dashBoard = [
  dashBoardItem,
  { ...dashBoardItem, status: true },
  { ...dashBoardItem, valor: 111 }
];

botaoAdd.addEventListener("click", e => {
  Discador(criarPaginaDespesa);
});

let valorDiscador;

container.addEventListener("click", e => {
  const campoValorDiscador = document.querySelector(".campo-valores-discador");
  if (e.target.classList.contains("numero-discador")) {
    const classe = e.target.classList[1];
    const valor = campoValorDiscador.textContent + `${classe[15]}`;
    const valorMask = valor.replace(/(\d{3})(\d)/g, "$1.$2");
    campoValorDiscador.textContent = valorMask;
    valorDiscador = valorMask;
  }
});

const criarPaginaDespesa = () => {
  const containerList = document.querySelector(".container-lista");

  containerList && containerList.remove();

  const containerDespesa = document.createElement("section");
  containerDespesa.classList.add("container-despesa");

  const cabecalho = document.createElement("header");
  cabecalho.classList.add("secoes-cabecalho");

  const receita = CriarSpan(
    "Receita",
    "receita",
    "receita-despesa-transferencia"
  );
  const despesa = CriarSpan(
    "Despesa",
    "despesa",
    "receita-despesa-transferencia"
  );
  const trasnferencia = CriarSpan(
    "Transferência",
    "transferencia",
    "receita-despesa-transferencia"
  );

  const boxTotal = BoxTotalDespesa(valorDiscador);

  const wrapBoxCarteira = CriarDiv("wrap-box-carteira");
  const boxCarteira = BoxCarteira(carteira);
  const boxCarteiraAdd = AddCategiria();
  const dataDespesa = DataDespesa();
  const boxParcelas = BoxParcelas();
  const campoTags = BoxTags();
  const campoObs = document.createElement("textarea");
  campoObs.setAttribute("placeholder", "Obs...");
  campoObs.classList.add("obs");
  const botaoConfirmar = CriarBotao("Confirmar", "botao-confirmar");

  container.appendChild(containerDespesa);

  cabecalho.appendChild(receita);
  cabecalho.appendChild(despesa);
  cabecalho.appendChild(trasnferencia);

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

  botaoAdd.addEventListener("click", CriarCadastroCategorias);
  botaoConfirmar.addEventListener("click", Despesas)
  botaoConfirmar.addEventListener("click", listarDashboard);
};

const dashboardItem = dashItem => {
  const {
    categoria: { principal, sub },
    valor,
    status
  } = dashItem;

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

  return conta;
};

const listarDashboard = () => {
  const container = document.querySelector(".container-data-conta");
  dashBoard.map(item => {
    const dashBoardElement = dashboardItem(item);
    container.appendChild(dashBoardElement);
  });
};

iconeHome.addEventListener('click', () =>{
  const containerDiscador = document.querySelector('.container-discador');
  const containerDespesa = document.querySelector('.container-despesa');
  const containerLista = document.querySelector('.container-lista');

  containerDespesa && container.removeChild(containerDespesa);
  containerDiscador && container.removeChild(containerDiscador);
  containerLista && container.removeChild(containerLista);
})


container.onload = CriaHome();