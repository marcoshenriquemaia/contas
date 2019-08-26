import CriarIcone from "../../shared/criar-icone/index.js";
import MudaIcone from "../../muda-icone/index.js";
import CriarElemento from "../../shared/criar-elemento/index.js";


const BoxParcelas = () => {
  let checkbox = false;

  const wrapCheckboxParcelas = () => {
    const wrapCheckboxParcelas = CriarElemento({tipoElemento: 'div', classes: ['wrap-checkbox-parcelas']});
    const checkboxParcelas = CriarIcone('checkbox.png', 'icone', 'checkbox-parcelas');
    const textCheckboxParcelas = CriarElemento({tipoElemento: 'span', conteudo: 'Dividir-valor', classes: ['text-checkbox-parcelas']})

    wrapCheckboxParcelas.appendChild(textCheckboxParcelas);
    wrapCheckboxParcelas.appendChild(checkboxParcelas);

    wrapCheckboxParcelas.addEventListener('click', () => {
      checkbox 
      ? MudaIcone('checkbox.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas') 
      : MudaIcone('checkbox-marcado.png', 'wrap-checkbox-parcelas', 'checkbox', 'checkbox-parcelas');
      checkbox = !checkbox;
      campoParcelas.classList.toggle('campo-parcelas-on');
    })

    return wrapCheckboxParcelas;
  };

  const campoQuantidadeParcelas = () => {
    const campoParcelas = CriarElemento({ tipoElemento: 'input', tipo: 'number', placeholder: '1 x', classes: ['campo-parcelas'] })
    return campoParcelas;
  };

  const boxParcelas = CriarElemento({ tipoElemento: 'div', classes: ['parcelas']})
  const textParcelas = CriarElemento({tipoElemento: 'span', conteudo: 'Repetir', classes: ['text-parcelas']})
  const campoParcelas = campoQuantidadeParcelas();
  const checkboxParcelas = wrapCheckboxParcelas();

  boxParcelas.appendChild(textParcelas);
  boxParcelas.appendChild(campoParcelas);
  boxParcelas.appendChild(checkboxParcelas);

  return boxParcelas;
};

export default BoxParcelas;
