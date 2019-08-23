import CriarSpan from "../../shared/criar-span/index.js";
import CriarIcone from "../../shared/criar-icone/index.js";

const CriarTag = (text) => {
    const tag = CriarSpan(text, "text-tag");

    const imagemDeleteTag = CriarIcone(
        "delete (2).png",
        "Botão para deleter a tag",
        "img-delete-tag"
    );

    tag.appendChild(imagemDeleteTag);

    return tag; 
}

export default CriarTag;