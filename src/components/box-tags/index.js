import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarTag from "./tag/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";

const BoxTags = () => {
  const inputTag = CriarElemento({tipoElemento: 'input', tipo: 'text', classes: ['input-tag']})
  const campoTags = CriarElemento({tipoElemento: 'div', classes: ['campo-tags']})
  const addTag = CriarElemento({tipoElemento: 'span', conteudo: 'Adicionar', classes: ['text-adicionar-tag']})

  campoTags.appendChild(inputTag);

  inputTag.addEventListener('focus', () => {
    campoTags.appendChild(addTag);
  })

  inputTag.addEventListener('focusout', () => {
      if (inputTag.value === '') return;
      const novaTag = CriarTag(inputTag.value);
      campoTags.appendChild(novaTag);
      addTag.remove();
      inputTag.remove();
      campoTags.appendChild(inputTag);
      inputTag.value = '';
  })
  inputTag.addEventListener('keydown', e =>{
    const arrayTags = [...document.querySelectorAll('.text-tag')]
    if (e.key != 'Backspace') return;
    if (inputTag.value != '') return;
    if (!arrayTags[0]) return;
    const ultimaTag = arrayTags[arrayTags.length -1];
    campoTags.removeChild(ultimaTag);

  })

  return campoTags;
};

export default BoxTags;
