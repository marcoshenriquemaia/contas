import Discador from "./src/components/discador/index.js";
import CriaHome from "./src/pages/home/index.js";

const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const iconeHome = document.querySelector('.icone-1');

let valorDiscador;

const carteira = {
  nome: "Marcos",
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


container.onload = CriaHome(valorDiscador, carteira);