import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";

const BoxParcelas = () => {
  const wrapCheckboxParcelas = () => {
    const wrapCheckboxParcelas = CriarDiv("wrap-checkbox-parcelas");
    const checkboxParcelas = CriarDiv("checkbox-parcelas");
    const textCheckboxParcelas = CriarSpan(
      "Dividir-valor",
      "text-checkbox-parcelas"
    );

    wrapCheckboxParcelas.appendChild(checkboxParcelas);
    wrapCheckboxParcelas.appendChild(textCheckboxParcelas);

    return wrapCheckboxParcelas;
  };

  const campoQuantidadeParcelas = () => {
    const campoParcelas = CriarDiv("campo-parcelas");
    const textQuantidadeParcelas = CriarSpan(
      "1 vez",
      "text-quantidade-parcelas"
    );

    campoParcelas.appendChild(textQuantidadeParcelas);

    return campoParcelas; 
  };

  const boxParcelas = CriarDiv("parcelas");
  const textParcelas = CriarSpan("Parcelas", "text-parcelas");
  const campoParcelas = campoQuantidadeParcelas();
  const checkboxParcelas = wrapCheckboxParcelas();

  boxParcelas.appendChild(textParcelas);
  boxParcelas.appendChild(campoParcelas);
  boxParcelas.appendChild(checkboxParcelas);

  return boxParcelas;
};

export default BoxParcelas;
