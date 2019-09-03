import CriarElemento from "../../shared/criar-elemento/index.js";

const CriarValorCarteira = {
   build: ({valor}) =>{
    const valorCarteira = CriarElemento({ tipoElemento: 'span', conteudo: `R$${valor}`, classes: ['valor-carteira'] })

    return valorCarteira;
   },
   remove: () =>{
    const valorCarteira = document.querySelector('.valor-carteira');
    valorCarteira && valorCarteira.remove();
   }
};

export default CriarValorCarteira;