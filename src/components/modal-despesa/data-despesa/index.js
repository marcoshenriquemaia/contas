import CriarElemento from "../../shared/criar-elemento/index.js";

const DataDespesa = () => {
    const dataDespesa = CriarElemento({tipoElemento: 'div', classes: ['data']})
    const textData = CriarElemento({tipoElemento: 'span', conteudo: 'Data', classes: ['text-data']})
    const campoData = CriarElemento({tipoElemento: 'input', tipo: 'date', classes: ['campo-data']})

    dataDespesa.appendChild(textData);
    dataDespesa.appendChild(campoData);

    return dataDespesa;
}

export default DataDespesa;