import CriarIcone from "../../shared/criar-icone/index.js";
import MudaIcone from "../../muda-icone/index.js";
import CriarElemento from "../../shared/criar-elemento/index.js";
import WrapCheckboxParcelas from "./wrapper-checkbox-parcelas/index.js";

let checkbox = false;

const BoxParcelas = {
  build: () => {
    const campoQuantidadeParcelas = () => {
      const campoParcelas = CriarElemento({ tipoElemento: 'input', tipo: 'number', placeholder: '1 x', classes: ['campo-parcelas'] })
      return campoParcelas;
    };

    const boxParcelas = CriarElemento({ tipoElemento: 'div', classes: ['parcelas'] })
    const textParcelas = CriarElemento({ tipoElemento: 'span', conteudo: 'Repetir', classes: ['text-parcelas'] })
    const campoParcelas = campoQuantidadeParcelas();
    const checkboxParcelas = WrapCheckboxParcelas.build();

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

const clickWrapCheckbox = ({campoParcelas}) => {
  checkbox
    ? MudaIcone('checkbox.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas')
    : MudaIcone('checkbox-marcado.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas');
  checkbox = !checkbox;
  campoParcelas.classList.toggle('campo-parcelas-on');
}

export default BoxParcelas;
