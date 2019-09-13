import CriarElemento from "../../../components/shared/criar-elemento/index.js";
import ImportCss from "../../../utils/import-css/index.js";
import Carteira from "./carteira/index.js";

ImportCss({page: 'home/carteiras-box'})

const CarteirasBox = () =>{
    const carteiraBox = CriarElemento({tipoElemento: 'div', classes: ["carteira-box"]});
    const carteira = Carteira();

    carteiraBox.appendChild(carteira);

    return carteiraBox;
}

export default CarteirasBox;