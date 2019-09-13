import CriarElemento from "../../../../components/shared/criar-elemento/index.js"
import ImportCss from "../../../../utils/import-css/index.js"
import CriarBoxIcone from "../../../../components/shared/criar-box-icone/index.js"

ImportCss({page: 'home/carteiras-box/carteira'})

const Carteira = () =>{
    const carteira = CriarElemento({tipoElemento: 'div', classes: ['carteira']});
    const iconeBox = CriarBoxIcone('var(--primary)', 'icone-carteira-box');
    const icone = CriarElemento({tipoElemento: 'i', icone: 'carteira', classes: ['icones']});
    const tituloWrapper = CriarElemento({tipoElemento: 'div', classes: ['titulo-wrapper']});
    const titulo = CriarElemento({tipoElemento: 'h1', classes: ['carteira-titulo']});
    const nomePessoa = CriarElemento({tipoElemento: 'h2', classes: ['nome-pessoa'], conteudo: 'Marcos'});
    const valor = CriarElemento({tipoElemento: 'span', classes: ['carteira-valor'], conteudo: 'R$ 100,000,00'});

    carteira.appendChild(iconeBox);
    carteira.appendChild(tituloWrapper);
    carteira.appendChild(valor);

    iconeBox.appendChild(icone);

    tituloWrapper.appendChild(titulo);
    tituloWrapper.appendChild(nomePessoa);

    return carteira;
}

export default Carteira;