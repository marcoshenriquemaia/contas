import CriarElemento from "../../../shared/criar-elemento/index.js";
import CriarIcone from "../../../shared/criar-icone/index.js";

const WrapCheckboxParcelas = {
    build: () => {
        const wrapCheckboxParcelas = CriarElemento({ tipoElemento: 'div', classes: ['wrap-checkbox-parcelas'] });
        const checkboxParcelas = CriarIcone('checkbox.png', 'icone', 'checkbox-parcelas');
        const textCheckboxParcelas = CriarElemento({ tipoElemento: 'span', conteudo: 'Dividir-valor', classes: ['text-checkbox-parcelas'] })

        wrapCheckboxParcelas.appendChild(textCheckboxParcelas);
        wrapCheckboxParcelas.appendChild(checkboxParcelas);

        wrapCheckboxParcelas.addEventListener('click', () => clickWrapCheckbox({ campoParcelas }));

        return wrapCheckboxParcelas;
    },
    remove: () =>{
        const wrapCheckboxParcelas = document.querySelector('.wrap-checkbox-parcelas');
        wrapCheckboxParcelas && wrapCheckboxParcelas.remove();
    }
};

export default WrapCheckboxParcelas;