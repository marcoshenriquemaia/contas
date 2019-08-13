import CriarDiv from "../shared/criar-div/index.js";
import CriarSpan from "../shared/criar-span/index.js";
import CriarBoxIcone from "../shared/criar-box-icone/index.js";
import CriarIcone from "../shared/criar-icone/index.js";
import CriarBotao from "../shared/criar-botao/index.js";


const AddCategiria = () => {

  const icone = () =>{
    const boxIconeAdd = CriarBoxIcone("var(--primary)");

    const iconeCategoriaAdd = CriarIcone(
      "bill.png",
      "Botao Adicionar Carteira",
      "icone-carteira"
    );

    boxIconeAdd.appendChild(iconeCategoriaAdd);

    return boxIconeAdd;
  }

  const wrapCategoriaNomeAdd = () =>{
    const wrapCategoriaNomeAdd = CriarDiv("wrap-carteira-nome");

    const textCategoriaAdd = CriarSpan("Categoria", "text-carteira");
  
    const textNomeAdd = CriarSpan("Nome", "text-nome");

    wrapCategoriaNomeAdd.appendChild(textCategoriaAdd);
    wrapCategoriaNomeAdd.appendChild(textNomeAdd);

    return wrapCategoriaNomeAdd;
  
}
const boxCategoriaAdd = CriarDiv("box-carteira");

const iconeCategoria = icone();

const wrapText = wrapCategoriaNomeAdd();

const botaoAdd = CriarBotao("+", "add-carteira");

boxCategoriaAdd.appendChild(iconeCategoria);
boxCategoriaAdd.appendChild(wrapText);
boxCategoriaAdd.appendChild(botaoAdd);

return boxCategoriaAdd;
};

export default AddCategiria;
