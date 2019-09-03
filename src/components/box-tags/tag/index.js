import CriarIcone from "../../shared/criar-icone/index.js";
import CriarElemento from "../../shared/criar-elemento/index.js";

const Tag = {
    build: ({ text }) => {
        const tag = CriarElemento({ tipoElemento: 'span', conteudo: text, classes: ['text-tag'] })
        const imagemDeleteTag = CriarIcone(
            "delete (2).png",
            "Botão para deleter a tag",
            "img-delete-tag"
        );

        tag.appendChild(imagemDeleteTag);

        return tag;
    },
    remove: ({tag}) => {
        tag && tag.remove();
    }
}

export default Tag;