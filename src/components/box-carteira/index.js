import CriarDiv from '../shared/criar-div/index.js';
import CriarSpan from '../shared/criar-span/index.js';
import CriarBoxIcone from '../shared/criar-box-icone/index.js';
import CriarIcone from '../shared/criar-icone/index.js';

const BoxCarteira = (carteira) => {
    const { nome, tipo, valor, cor } = carteira;
  
    const cadastroConta = document.querySelector(".cadastro-conta");
  
    const boxConta = CriarDiv("box-conta");
  
    const wrapCarteiraNome = criarWrapCarteiraNome(nome, tipo);
    
    const valorCarteira = criarValorCarteira(valor);
  
    const boxIcone = criarIconeBoxCarteiraCadastro();
  
    const icone = CriarIcone('add (2).png', 'Icone Carteira', 'icone-carteira');
  
  
    boxConta.appendChild(boxIcone);
    boxIcone.appendChild(icone);
    boxConta.appendChild(wrapCarteiraNome);
    boxConta.appendChild(valorCarteira)
    cadastroConta.appendChild(boxConta);
};

const criarWrapCarteiraNome = (nome, tipo) => {

  const wrapCarteiraNome = CriarDiv("wrap-carteira-nome");

  const textCarteira = CriarSpan(tipo, "text-carteira");

  const textNome = CriarSpan(nome, "text-nome");

  wrapCarteiraNome.appendChild(textCarteira);
  wrapCarteiraNome.appendChild(textNome);

  return wrapCarteiraNome;
};

const criarValorCarteira = valor => {
  const valorCarteira = CriarSpan(
    valor,
    "valor-carteira"
  );
  return valorCarteira; 
};

const criarIconeBoxCarteiraCadastro = () =>{
  const boxIcone = CriarBoxIcone('red');
  
  const icone = CriarIcone('add.png', 'icones', 'icones');

  boxIcone.appendChild(icone);

  return boxIcone;
}


export default BoxCarteira; 