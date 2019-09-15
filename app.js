import CriaHome from "./src/pages/home/index.js";
import Rodape from "./src/pages/home/rodape/index.js";

const container = document.querySelector(".container");

let valorDiscador;

const carteira = {
  nome: "Marcos",
  tipo: "Nubank",
  valor: 100,
  cor: "#fff"
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

const rodape = Rodape.build({valorDiscador, carteira, dashBoard: state.dashBoard});

container.onload = CriaHome.build({valorDiscador, carteira, dashBoard: state.dashBoard});
container.appendChild(rodape);