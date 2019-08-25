import CriarSpan from '../shared/criar-span/index.js';
import CriarBotao from '../shared/criar-botao/index.js';
import BotoesDiscador from './botoes-discador/index.js';
import ModalDespesa from '../modal-despesa/index.js';

const Discador = (valorDiscador, carteira, botaoAdd) => {
  const container = document.querySelector('.container');

  const containerDiscador = document.createElement("section");
  containerDiscador.classList.add("container-discador");

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

  const campoValoresDiscador = CriarSpan("R$ ", "campo-valores-discador");

  const botaoContinuar = CriarBotao("Continuar", "botao-discador");

  cabecalho.appendChild(receita);
  cabecalho.appendChild(despesa);
  cabecalho.appendChild(trasnferencia);
  containerDiscador.appendChild(campoValoresDiscador);
  containerDiscador.appendChild(cabecalho);
  containerDiscador.appendChild(BotoesDiscador());
  containerDiscador.appendChild(botaoContinuar);
  container.appendChild(containerDiscador);

  botaoContinuar.addEventListener("click", () => clickContinuarDiscador(ModalDespesa));
  
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
  const clickContinuarDiscador = (ModalDespesa) => {
    const containerDiscador = document.querySelector(".container-discador");
    container.removeChild(containerDiscador);
    ModalDespesa(valorDiscador, carteira, botaoAdd, container);
  };
};



export default Discador;

