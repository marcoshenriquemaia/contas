import CriarElemento from "../../shared/criar-elemento/index.js";
import WrapCheckboxParcelas from "./wrapper-checkbox-parcelas/index.js";

const BoxParcelas = {
  build: () => {
    const campoQuantidadeParcelas = () => {
      const campoParcelas = CriarElemento({ tipoElemento: 'input', tipo: 'number', placeholder: '1 x', classes: ['campo-parcelas'] })
      return campoParcelas;
    };

    const boxParcelas = CriarElemento({ tipoElemento: 'div', classes: ['parcelas'] })
    const textParcelas = CriarElemento({ tipoElemento: 'span', conteudo: 'Repetir', classes: ['text-parcelas'] })
    const campoParcelas = campoQuantidadeParcelas();
    const checkboxParcelas = WrapCheckboxParcelas.build({campoParcelas});

    boxParcelas.appendChild(textParcelas);
    boxParcelas.appendChild(campoParcelas);
    boxParcelas.appendChild(checkboxParcelas);

    return boxParcelas;
  },
  remove: () => {
    const wrapCheckboxParcelas = document.querySelector('.wrap-checkbox-parcelas');
    const boxParcelas = document.querySelector('.parcelas');

    boxParcelas && boxParcelas.remove();
    wrapCheckboxParcelas && wrapCheckboxParcelas.removeEventListener('click', clickWrapCheckbox);
    }
};



export default BoxParcelas;
