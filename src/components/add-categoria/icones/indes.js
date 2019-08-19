import CriarBoxIcone from "../../shared/criar-box-icone/index.js";
import CriarIcone from "../../shared/criar-icone/index.js";

const Icone = (cor, imagem) =>{
    const boxIconeAdd = CriarBoxIcone(cor, 'box-carteira-add');

    const iconeCategoriaAdd = CriarIcone(
      imagem,
      "Botao Adicionar Carteira",
      "icone-carteira-add",
      'icone-carteira'
    );

    boxIconeAdd.appendChild(iconeCategoriaAdd);

    return boxIconeAdd;
  }

  export default Icone; 