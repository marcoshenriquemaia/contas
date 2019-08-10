import CriarDiv from '../../shared/criar-div/index.js';
import CriarBotao from '../../shared/criar-botao/index.js';
import CriarIcone from '../../shared/criar-icone/index.js';

const BotoesDiscador = () => {
    const discador = CriarDiv("discador");
  
    for (let i = 1; i < 10; i++) {
      const botaoDiscador = CriarBotao(
        i,
        "numero-discador",
        `numero-discador${i}`
      );
  
      discador.appendChild(botaoDiscador);
    }
    const botaoDiscador = CriarBotao(0, "numero-discador", "numero-discador0");
  
    const backspace = CriarIcone(
      "backspace-arrow.png",
      "Backspace",
      "backspace"
    );
  
    discador.appendChild(botaoDiscador);
    discador.appendChild(backspace);
  
    return discador;
};
  
export default BotoesDiscador; 