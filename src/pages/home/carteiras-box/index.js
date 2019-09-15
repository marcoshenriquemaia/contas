import CriarElemento from "../../../components/shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import Carteira from "./carteira/index.js";

ImportCss({ page: "home/carteiras-box" });

const CarteirasBox = {
  build: () => {
    const carteiraBox = CriarElemento({
      tipoElemento: "div",
      classes: ["carteira-box"]
    });
    state.carteiras.map(carteira =>{
        const { titulo, nomePessoa, valor } = carteira;
        const elemento = Carteira.build({tituloCarteira: titulo, nomePessoaCarteira: nomePessoa, valorCarteira: valor});
        
        carteiraBox.appendChild(elemento);
    })


    return carteiraBox;
  },
  remove: () =>{
      const carteiraBox = document.querySelector('.carteira-box');
      carteiraBox.remove();
  }
};

export default CarteirasBox;
