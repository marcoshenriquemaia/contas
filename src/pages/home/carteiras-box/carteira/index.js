import CriarElemento from "../../../../components/shared/criar-elemento/index.js"
import ImportCss from "../../../../utils/import-css/index.js"
import CriarBoxIcone from "../../../../components/shared/criar-box-icone/index.js"

ImportCss({page: 'home/carteiras-box/carteira'})

const Carteira = {
    build: (carteira) =>{
    const { tituloCarteira, nomePessoaCarteira, valorCarteira } = carteira;
    const carteiraBox = CriarElemento({tipoElemento: 'div', classes: ['carteira']});
    const iconeBox = CriarBoxIcone('var(--primary)', 'icone-carteira-box');
    const icone = CriarElemento({tipoElemento: 'i', icone: 'carteira', classes: ['icones', 'icone-branco']});
    const textValorWrapper = CriarElemento({tipoElemento: 'div', classes: ['text-valor-carteira-wrapper']})
    const tituloWrapper = CriarElemento({tipoElemento: 'div', classes: ['titulo-wrapper']});
    const titulo = CriarElemento({tipoElemento: 'h1', classes: ['carteira-titulo'], conteudo: tituloCarteira});
    const nomePessoa = CriarElemento({tipoElemento: 'h2', classes: ['nome-pessoa'], conteudo: nomePessoaCarteira});
    const valor = CriarElemento({tipoElemento: 'span', classes: ['carteira-valor'], conteudo: `R$ ${valorCarteira}`});

    carteiraBox.appendChild(iconeBox);
    carteiraBox.appendChild(textValorWrapper);
    iconeBox.appendChild(icone);
    textValorWrapper.appendChild(tituloWrapper);
    textValorWrapper.appendChild(valor);
    tituloWrapper.appendChild(titulo);
    tituloWrapper.appendChild(nomePessoa);

    return carteiraBox;
    },
    remove: () =>{
        const carteira = document.querySelector('.carteira');
        carteira.remove();
    }
}

export default Carteira;