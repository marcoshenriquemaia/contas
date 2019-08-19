import CriarDiv from '../criar-div/index.js';

const CriarBoxIcone = (cor, classe) => {
  const elemento = CriarDiv("box-icone-carteira");
  elemento.classList.add(classe);
  elemento.style.backgroundColor = cor;

  return elemento;
};

export default CriarBoxIcone;