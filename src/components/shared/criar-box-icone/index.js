import CriarElemento from '../criar-elemento/index.js';

const CriarBoxIcone = (cor, classe) => {
  const elemento = CriarElemento({tipoElemento: 'div', classes: ['box-icone-carteira']});
  elemento.classList.add(classe);
  elemento.style.backgroundColor = cor;

  return elemento;
};

export default CriarBoxIcone;