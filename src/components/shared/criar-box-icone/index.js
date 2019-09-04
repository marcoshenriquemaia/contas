import CriarElemento from '../criar-elemento/index.js';
import ImportCss from '../../../utils/import-css/index.js';

ImportCss({path: '/shared/criar-box-icone'});

const CriarBoxIcone = (cor, classe) => {
  const elemento = CriarElemento({tipoElemento: 'div', classes: ['box-icone-carteira']});
  elemento.classList.add(classe);
  elemento.style.backgroundColor = cor;

  return elemento;
};

export default CriarBoxIcone;