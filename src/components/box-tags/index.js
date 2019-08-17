import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarIcone from "../shared/criar-icone/index.js";

const BoxTags = () => {
  const tag = () =>{
    const tag = CriarSpan("Crédito", "text-tag");

    const imagemDeleteTag = CriarIcone(
      "delete (2).png",
      "Botão para deleter a tag",
      "img-delete-tag"
    );

    tag.appendChild(imagemDeleteTag);

    return tag;
  }
  const campoTags = CriarDiv("campo-tags");
  const tags = tag();
  const addTag = CriarSpan("Adicionar", "text-adicionar-tag");

  campoTags.appendChild(tags);
  campoTags.appendChild(addTag);

  return campoTags;
};

export default BoxTags;
