import CriarDiv from "../shared/criar-div/index.js";
import CriarBotao from "../shared/criar-botao/index.js";
import CriarCadastroCategorias from '../categorias-conta/index.js'; 
import Icone from "./icones/indes.js";
import WrapCategoriaNomeAdd from "./wrap-categoria-nome-add/indes.js";


const AddCategiria = () => {

const boxCategoriaAdd = CriarDiv("box-carteira");

const iconeCategoria = Icone('var(--primary)', 'bill.png');

const wrapText = WrapCategoriaNomeAdd('Categoria','Nome');

const botaoAdd = CriarBotao("+", "add-carteira");

boxCategoriaAdd.appendChild(iconeCategoria);
boxCategoriaAdd.appendChild(wrapText);
boxCategoriaAdd.appendChild(botaoAdd);

botaoAdd.addEventListener('click', CriarCadastroCategorias);

return boxCategoriaAdd;
};

export default AddCategiria;
