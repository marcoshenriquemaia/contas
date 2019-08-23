import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarTag from "./tag/index.js";
import CriarInput from "../shared/criar-input/index.js";

const BoxTags = () => {
  const inputTag = CriarInput('text', '', 'input-tag', 'input-tag');
  const campoTags = CriarDiv("campo-tags");
  const addTag = CriarSpan("Adicionar", "text-adicionar-tag");

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
