import BotoesDiscador from './botoes-discador/index.js';
import ModalDespesa from '../modal-despesa/index.js';
import CriarElemento from '../shared/criar-elemento/index.js';
import Cabecalho from '../cabecalho/index.js';
import ImportCss from '../../utils/import-css/index.js';

ImportCss({ path: 'discador' });

const Discador = {
    build: ({ valorDiscador, carteira, botaoAdd, dashBoard }) => {
        const containerDiscador = CriarElemento({ tipoElemento: 'section', classes: ['container-discador'] })
        const cabecalho = Cabecalho.build();
        const campoValoresDiscador = CriarElemento({ tipoElemento: 'span', conteudo: 'R$', classes: ['campo-valores-discador'] })
        const botaoContinuar = CriarElemento({ tipoElemento: 'button', conteudo: 'Continuar', classes: ['botao-discador'] })

        containerDiscador.appendChild(campoValoresDiscador);
        containerDiscador.appendChild(cabecalho);
        containerDiscador.appendChild(BotoesDiscador.build());
        containerDiscador.appendChild(botaoContinuar);

        containerDiscador.addEventListener("click", e => clickDiscador({ target: e.target, valorDiscador }));
        botaoContinuar.addEventListener("click", () => clickContinuarDiscador({ carteira, botaoAdd, dashBoard }))

        return containerDiscador;
    },
    remove: () => {
        const containerDiscador = document.querySelector('.container-discador');
        const botaoContinuar = document.querySelector('.botao-discador');

        containerDiscador && containerDiscador.remove();

        containerDiscador && containerDiscador.removeEventListener('click', clickDiscador);
        botaoContinuar && botaoContinuar.removeEventListener('click', clickContinuarDiscador);
    }
};

const clickContinuarDiscador = ({ carteira, botaoAdd, dashBoard }) => {
    const containerDiscador = document.querySelector(".container-discador");
    const campoValorDiscador = document.querySelector('.campo-valores-discador')
    const container = document.querySelector('.container');
    const despesa = ModalDespesa.build({ valorDiscador: campoValorDiscador.textContent, carteira, botaoAdd, dashBoard });
    container.appendChild(despesa);
    Discador.remove();
    containerDiscador.removeEventListener('click', clickDiscador);
};

const clickDiscador = ({ target, valorDiscador }) => {
    const campoValorDiscador = document.querySelector(".campo-valores-discador");
    if (!target.classList.contains("numero-discador")) return;
    const valor = campoValorDiscador.textContent + target.textContent;
    const valorMask = valor.replace(/(\d{3})(\d)/g, "$1.$2");
    campoValorDiscador.textContent = valorMask;
    valorDiscador = valorMask;
}

export default Discador;