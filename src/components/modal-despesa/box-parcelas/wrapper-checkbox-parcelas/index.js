import CriarElemento from "../../../shared/criar-elemento/index.js";
import CriarIcone from "../../../shared/criar-icone/index.js";
import MudaIcone from "../../../muda-icone/index.js";

let checkbox = false;

const WrapCheckboxParcelas = {
    build: ({campoParcelas}) => {
        const wrapCheckboxParcelas = CriarElemento({ tipoElemento: 'div', classes: ['wrap-checkbox-parcelas'] });
        const checkboxParcelas = CriarIcone('checkbox.png', 'icone', 'checkbox-parcelas');
        const textCheckboxParcelas = CriarElemento({ tipoElemento: 'span', conteudo: 'Dividir-valor', classes: ['text-checkbox-parcelas'] })

        wrapCheckboxParcelas.appendChild(textCheckboxParcelas);
        wrapCheckboxParcelas.appendChild(checkboxParcelas);

        wrapCheckboxParcelas.addEventListener('click', () => clickWrapCheckbox({ campoParcelas }));

        return wrapCheckboxParcelas;
    },
    remove: () => {
        const wrapCheckboxParcelas = document.querySelector('.wrap-checkbox-parcelas');
        wrapCheckboxParcelas && wrapCheckboxParcelas.remove();
    }
};

const clickWrapCheckbox = ({ campoParcelas }) => {
    checkbox
        ? MudaIcone('checkbox.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas')
        : MudaIcone('checkbox-marcado.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas');
    checkbox = !checkbox;
    campoParcelas.classList.toggle('campo-parcelas-on');
};

export default WrapCheckboxParcelas;