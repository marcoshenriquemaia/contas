import CriarIcone from '../../shared/criar-icone/index.js';
import CriarElemento from '../../shared/criar-elemento/index.js';
import ImportCss from '../../../utils/import-css/index.js';

ImportCss({ path: 'discador/botoes-discador' })

const BotoesDiscador = {
    build: () => {
        const discador = CriarElemento({ tipoElemento: 'div', classes: ['discador'] })

        for (let i = 1; i < 10; i++) {
            const botaoDiscador = CriarElemento({ tipoElemento: 'button', conteudo: i, classes: ["numero-discador", `numero-discador${i}`] })
            discador.appendChild(botaoDiscador);
        }
        const botaoDiscador = CriarElemento({ tipoElemento: 'button', conteudo: '0', classes: ["numero-discador", "numero-discador0"] })

        const backspace = CriarIcone(
            "backspace-arrow.png",
            "Backspace",
            "backspace"
        );

        discador.appendChild(botaoDiscador);
        discador.appendChild(backspace);

        return discador;
    },
    remove: () => {
        const discador = document.querySelector('.discador');
        discador && discador.remove();
    }
};

export default BotoesDiscador;