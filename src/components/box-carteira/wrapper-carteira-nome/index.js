import CriarDiv from "../../shared/criar-div/index.js";
import CriarSpan from "../../shared/criar-span/index.js";

const WrapCarteiraNome = (nome, tipo, boxCarteira) => {
    const wrapCarteiraNome = CriarDiv("wrap-carteira-nome");
    const textCarteira = CriarSpan(tipo, "text-carteira");
    const textNome = CriarSpan(nome, "text-nome");

    wrapCarteiraNome.appendChild(textCarteira);
    wrapCarteiraNome.appendChild(textNome);

    boxCarteira.addEventListener('click', () => boxCarteiraClick(textCarteira, textNome));


    return wrapCarteiraNome;
  };

  export default WrapCarteiraNome; 

  