import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarBoxIcone from "../shared/criar-box-icone/index.js";
import CriarIcone from "../shared/criar-icone/index.js";
import WrapCarteiraNome from "./wrapper-carteira-nome/index.js";


const BoxCarteira = carteira => {

  const criarValorCarteira = valor => {
    const valorCarteira = CriarSpan(`R$${valor}`, "valor-carteira");
    return valorCarteira;
  };

  const { nome, tipo, valor, cor } = carteira;

  const cadastroConta = document.querySelector(".cadastro-conta");
  const boxCarteira = CriarDiv("box-carteira");
  const wrapCarteiraNome = WrapCarteiraNome(nome, tipo, boxCarteira);
  const valorCarteira = criarValorCarteira(valor);
  const boxIcone = CriarBoxIcone(cor);
  const icone = CriarIcone("add (2).png", "Icone Carteira", "icone-carteira");

  boxCarteira.appendChild(boxIcone);
  boxIcone.appendChild(icone);
  boxCarteira.appendChild(wrapCarteiraNome);
  boxCarteira.appendChild(valorCarteira);
  cadastroConta.appendChild(boxCarteira);


  return boxCarteira;
};



export default BoxCarteira;
