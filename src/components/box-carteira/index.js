import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarBoxIcone from "../shared/criar-box-icone/index.js";
import CriarIcone from "../shared/criar-icone/index.js";
import DashBoard from '../dashBoard/index.js';

const dashBoard = DashBoard();

const BoxCarteira = carteira => {

  const criarWrapCarteiraNome = (nome, tipo) => {
    const wrapCarteiraNome = CriarDiv("wrap-carteira-nome");
    const textCarteira = CriarSpan(tipo, "text-carteira");
    const textNome = CriarSpan(nome, "text-nome");

    wrapCarteiraNome.appendChild(textCarteira);
    wrapCarteiraNome.appendChild(textNome);

    boxCarteira.addEventListener('click', () => boxCarteiraClick(textCarteira, textNome));


    return wrapCarteiraNome;
  };

  const criarValorCarteira = valor => {
    const valorCarteira = CriarSpan(`R$${valor}`, "valor-carteira");
    return valorCarteira;
  };

  const { nome, tipo, valor, cor } = carteira;

  const cadastroConta = document.querySelector(".cadastro-conta");
  const boxCarteira = CriarDiv("box-carteira");
  const wrapCarteiraNome = criarWrapCarteiraNome(nome, tipo);
  const valorCarteira = criarValorCarteira(valor);
  const boxIcone = CriarBoxIcone(cor);
  const icone = CriarIcone("add (2).png", "Icone Carteira", "icone-carteira");

  boxCarteira.appendChild(boxIcone);
  boxIcone.appendChild(icone);
  boxCarteira.appendChild(wrapCarteiraNome);
  boxCarteira.appendChild(valorCarteira);
  cadastroConta.appendChild(boxCarteira);

  const boxCarteiraClick = (textCarteira, textNome) =>{
    // const { carteira: { nome, nomePessoa } } = dashBoard;
    dashBoard.categoria.nome = textCarteira.textContent;
    dashBoard.categoria.nomePessoa = textNome.textContent;
    boxCarteira.classList.toggle('box-carteira2');
    console.log(dashBoard);
  }

  return boxCarteira;
};



export default BoxCarteira;
