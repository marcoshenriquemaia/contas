import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";

ImportCss({path: 'modal-despesa/data-despesa'});

const DataDespesa = {
    build: () => {
        const dataDespesa = CriarElemento({ tipoElemento: 'div', classes: ['data'] })
        const textData = CriarElemento({ tipoElemento: 'span', conteudo: 'Data', classes: ['text-data'] })
        const campoData = CriarElemento({ tipoElemento: 'input', tipo: 'date', classes: ['campo-data'] })

        dataDespesa.appendChild(textData);
        dataDespesa.appendChild(campoData);

        return dataDespesa;
    },
    remove: () =>{
        const dataDespesa = document.querySelector('.data');
        dataDespesa && dataDespesa.remove();
    }
}

export default DataDespesa;