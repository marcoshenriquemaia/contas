import Tag from "./tag/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";

const BoxTags = {
  build: () => {
    const campoTags = CriarElemento({ tipoElemento: 'div', classes: ['campo-tags'] })
    const inputTag = CriarElemento({ tipoElemento: 'input', tipo: 'text', classes: ['input-tag'] })
    const addTag = CriarElemento({ tipoElemento: 'span', conteudo: 'Adicionar', classes: ['text-adicionar-tag'] })

    campoTags.appendChild(inputTag);

    inputTag.addEventListener('focus', () => escreveTag2({ addTag, campoTags }))
    inputTag.addEventListener('focusout', () => escreveTag({ inputTag, campoTags, addTag }));
    inputTag.addEventListener('keydown', (e) => apagaTag({ e, inputTag, campoTags }))

    return campoTags;
  },
  remove: () =>{
    const campoTags = document.querySelector('.campo-tags');
    campoTags && campoTags.remove();
  }
};


const escreveTag2 = ({ addTag, campoTags }) => {
  campoTags.appendChild(addTag);
}

const escreveTag = ({ inputTag, campoTags, addTag }) => {
  if (inputTag.value === '') return;
  const novaTag = Tag.build({ text: inputTag.value });
  campoTags.appendChild(novaTag);
  addTag.remove();
  inputTag.remove();
  campoTags.appendChild(inputTag);
  inputTag.value = '';
}

const apagaTag = ({ e, inputTag, campoTags }) => {
  const arrayTags = [...document.querySelectorAll('.text-tag')]
  if (e.key != 'Backspace') return;
  if (inputTag.value != '') return;
  if (!arrayTags[0]) return;
  const ultimaTag = arrayTags[arrayTags.length - 1];
  Tag.remove({ tag: ultimaTag });
}

export default BoxTags;
