import CriarDiv from '../criar-div/index.js';

const CriarBoxIcone = cor => {
  const elemento = CriarDiv("box-icone-carteira");
  elemento.style.backgroundColor = cor;

  return elemento;
};

export default CriarBoxIcone;