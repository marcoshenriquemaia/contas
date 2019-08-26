import WrapCarteiraNome from "./wrapper-carteira-nome/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";


const BoxCarteira = carteira => {

  const criarValorCarteira = valor => {
    const valorCarteira = CriarElemento({tipoElemento: 'span', conteudo: `R$${valor}`, classes: ['valor-carteira']})
    return valorCarteira;
  };

  const { nome, tipo, valor, cor } = carteira;


  const cadastroConta = document.querySelector(".cadastro-conta");
  const boxCarteira = CriarElemento({tipoElemento: 'div', classes: ['box-carteira']})
  const wrapCarteiraNome = WrapCarteiraNome(nome, tipo, boxCarteira);
  const valorCarteira = criarValorCarteira(valor);
  const boxIcone = CriarElemento({tipoElemento: 'div', cor: cor, classes: ['box-icone-carteira']})
  const icone = CriarElemento({tipoElemento: 'i', icone: 'aviso', classes: ['icone-carteira']})

  boxCarteira.appendChild(boxIcone);
  boxIcone.appendChild(icone);
  boxCarteira.appendChild(wrapCarteiraNome);
  boxCarteira.appendChild(valorCarteira);
  cadastroConta.appendChild(boxCarteira);


  return boxCarteira;
};



export default BoxCarteira;
