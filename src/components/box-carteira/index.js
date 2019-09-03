import WrapCarteiraNome from "./wrapper-carteira-nome/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";
import CriarValorCarteira from "./valor-carteira/index.js";

const BoxCarteira = {
  build: ({carteira}) => {
    const { nome, tipo, valor, cor } = carteira;

    const cadastroConta = document.querySelector(".cadastro-conta");
    const boxCarteira = CriarElemento({ tipoElemento: 'div', classes: ['box-carteira'] })
    const wrapCarteiraNome = WrapCarteiraNome.build({ nome, tipo, boxCarteira });
    const valorCarteira = CriarValorCarteira.build({ valor });
    const boxIcone = CriarElemento({ tipoElemento: 'div', cor: cor, classes: ['box-icone-carteira'] })
    const icone = CriarElemento({ tipoElemento: 'i', icone: 'aviso', classes: ['icone-carteira'] })

    boxCarteira.appendChild(boxIcone);
    boxIcone.appendChild(icone);
    boxCarteira.appendChild(wrapCarteiraNome);
    boxCarteira.appendChild(valorCarteira);
    cadastroConta.appendChild(boxCarteira);

    return boxCarteira;
  },
  remove: () =>{
    const cadastroConta = document.querySelector('.cadastro-conta');
    cadastroConta && cadastroConta.remove();
  }
}

export default BoxCarteira;
