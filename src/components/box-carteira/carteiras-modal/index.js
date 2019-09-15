import CriarElemento from "../../shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import Carteira from "../../../pages/home/carteiras-box/carteira/index.js";

ImportCss({ path: "box-carteira/carteiras-modal" });

const CarteirasModal = {
  build: () => {
    const container = CriarElemento({
      tipoElemento: "section",
      classes: ["modal-container"]
    });
    const modal = CriarElemento({
      tipoElemento: "div",
      classes: ["modal-carteiras"]
    });

    state.carteiras.map(carteira => {
      const { titulo, nomePessoa, valor, _id } = carteira;
      const elemento = Carteira.build({
        tituloCarteira: titulo,
        nomePessoaCarteira: nomePessoa,
        valorCarteira: valor,
      });
      
      elemento.addEventListener("click", () => clickCarteira({titulo, nomePessoa, _id}));
      modal.appendChild(elemento);
    });

    container.appendChild(modal);

    return container;
  },
  remove: () => {
    const container = document.querySelector(".modal-container");

    container.remove();
  }
};

const clickCarteira = ({titulo, nomePessoa, _id}) => {
  const carteiraBox = document.querySelector('.box-carteira')
  const carteiraText = document.querySelector(".text-carteira");
  const carteiraNome = document.querySelector(".text-nome");

  carteiraText.textContent = titulo;
  carteiraNome.textContent = nomePessoa;
  carteiraBox.setAttribute('ElementId', _id);

  CarteirasModal.remove();
};

export default CarteirasModal;
