import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarIcone from "../shared/criar-icone/index.js";
import MudaIcone from "../muda-icone/index.js";

const BoxParcelas = () => {
  const wrapCheckboxParcelas = () => {
    const wrapCheckboxParcelas = CriarDiv("wrap-checkbox-parcelas");
    const checkboxParcelas = CriarIcone('checkbox.png', 'icone', 'checkbox-parcelas');
    const textCheckboxParcelas = CriarSpan(
      "Dividir-valor",
      "text-checkbox-parcelas"
    );

    wrapCheckboxParcelas.appendChild(checkboxParcelas);
    wrapCheckboxParcelas.appendChild(textCheckboxParcelas);
//icone, pai, classeGeral, classe
    checkboxParcelas.addEventListener('click', ()=>{
      MudaIcone('checkbox-marcado.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas');
    })

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
