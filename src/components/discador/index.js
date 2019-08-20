import CriarSpan from '../shared/criar-span/index.js';
import CriarBotao from '../shared/criar-botao/index.js';
import BotoesDiscador from './botoes-discador/index.js';

const container = document.querySelector(".container");


const Discador = (criarPaginaDespesa) => {
  
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
  
    botaoContinuar.addEventListener("click", () => clickContinuarDiscador(criarPaginaDespesa));
    botaoContinuar.addEventListener('click', () =>{
      // const { valor, _id } = dashBoard;
      // dashBoard.valor = campoValoresDiscador.textContent;
      console.log(campoValoresDiscador.textContent);
    })
  };
  
  const clickContinuarDiscador = (criarPaginaDespesa) => {
    const containerDiscador = document.querySelector(".container-discador");
    container.removeChild(containerDiscador);
    criarPaginaDespesa();
  };
  

  export default Discador; 

