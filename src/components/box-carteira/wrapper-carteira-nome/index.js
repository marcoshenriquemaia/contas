import CriarElemento from "../../shared/criar-elemento/index.js";

const WrapCarteiraNome = {
  build: ({nome, tipo, boxCarteira}) => {
    const wrapCarteiraNome = CriarElemento({ tipoElemento: 'div', classes: ["wrap-carteira-nome"] })
    const textCarteira = CriarElemento({ tipoElemento: 'span', conteudo: tipo, classes: ["text-carteira"] })
    const textNome = CriarElemento({ tipoElemento: 'span', conteudo: nome, classes: ['text-nome'] })

    wrapCarteiraNome.appendChild(textCarteira);
    wrapCarteiraNome.appendChild(textNome);

    boxCarteira.addEventListener('click', () => boxCarteiraClick(boxCarteira));

    return wrapCarteiraNome;
  },
  remove: () =>{
   const wrapCarteiraNome = document.querySelector('.wrap-carteira-nome');

   wrapCarteiraNome && wrapCarteiraNome.remove();
  }

}

const boxCarteiraClick = (boxCarteira) => {
  boxCarteira.classList.toggle('box-carteira-2')
}

export default WrapCarteiraNome;

