import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarInput from "../shared/criar-input/index.js";

const DataDespesa = () => {
    const dataDespesa = CriarDiv("data");
    const textData = CriarSpan("Data", "text-data");
    const campoData = CriarInput("date", "", "campo-data", "campo-data");

    dataDespesa.appendChild(textData);
    dataDespesa.appendChild(campoData);

    return dataDespesa;
}

export default DataDespesa;