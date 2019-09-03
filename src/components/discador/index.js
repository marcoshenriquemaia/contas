import BotoesDiscador from './botoes-discador/index.js';
import ModalDespesa from '../modal-despesa/index.js';
import CriarElemento from '../shared/criar-elemento/index.js';
import Cabecalho from '../cabecalho/index.js';

const Discador = ({valorDiscador, carteira, botaoAdd, dashBoard}) => {
  const container = document.querySelector('.container');

  const containerDiscador = CriarElemento({tipoElemento: 'section', classes: ['container-discador']})
  const cabecalho = Cabecalho();
  const campoValoresDiscador = CriarElemento({tipoElemento: 'span', conteudo: 'R$', classes: ['campo-valores-discador']})
  const botaoContinuar = CriarElemento({ tipoElemento: 'button', conteudo: 'Continuar', classes: ['botao-discador'] })

  containerDiscador.appendChild(campoValoresDiscador);
  containerDiscador.appendChild(cabecalho);
  containerDiscador.appendChild(BotoesDiscador());
  containerDiscador.appendChild(botaoContinuar);
  container.appendChild(containerDiscador);

  botaoContinuar.addEventListener("click", () => clickContinuarDiscador());
  
  const clickDiscador = ( { target } ) =>{
    const campoValorDiscador = document.querySelector(".campo-valores-discador");
    if (!target.classList.contains("numero-discador")) { return };
    const valor = campoValorDiscador.textContent + target.textContent;
    const valorMask = valor.replace(/(\d{3})(\d)/g, "$1.$2");
    campoValorDiscador.textContent = valorMask;
    valorDiscador = valorMask;
  }

  container.addEventListener("click", clickDiscador);

  const clickContinuarDiscador = () => {
    const containerDiscador = document.querySelector(".container-discador");
    container.removeChild(containerDiscador);
    container.removeEventListener('click', clickDiscador);
    ModalDespesa({valorDiscador, carteira, botaoAdd, container, dashBoard});
  };
};



export default Discador;

