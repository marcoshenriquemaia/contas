import BoxCarteira from "../box-carteira/index.js";
import AddCategiria from "../add-categoria/index.js";
import DataDespesa from "./data-despesa/index.js";
import BoxParcelas from "./box-parcelas/index.js";
import BoxTags from "../box-tags/index.js";
import CriarCadastroCategorias from "./categorias-conta/index.js";
import Despesas from "../../pages/despesas/index.js";
import CriarElemento from "../shared/criar-elemento/index.js";
import Cabecalho from "../cabecalho/index.js";
import BoxTotalDespesa from "./box-valor-despesa/index.js";
import ImportCss from "../../utils/import-css/index.js";

ImportCss({path: 'modal-despesa'})

let valorDespesa = null;
let nomeCarteira; 
let nomePessoaCarteira;
let categoriaPrincipal;
let subCategoria;
let tags = [];
let obs;
let dia; 
let mes; 
let ano;
let quantidadeParcelas;

const ModalDespesa = {
  build: ({ valorDiscador, carteira, botaoAdd, dashBoard }) => {
    const containerDespesa = CriarElemento({ tipoElemento: 'section', classes: ['container-despesa'] });
    const cabecalho = Cabecalho.build();
    const boxTotal = BoxTotalDespesa.build({ valorDiscador });
    const wrapBoxCarteira = CriarElemento({ tipoElemento: 'div', classes: ['wrap-box-carteira'] })
    const boxCarteira = BoxCarteira.build({ carteira });
    const boxCarteiraAdd = AddCategiria.build();
    const dataDespesa = DataDespesa.build();
    const boxParcelas = BoxParcelas.build();
    const campoTags = BoxTags.build();
    const campoObs = CriarElemento({ tipoElemento: 'textarea', placeholder: 'Obs...', classes: ['obs'] })
    const botaoConfirmar = CriarElemento({ tipoElemento: 'button', conteudo: 'Confirmar', classes: ['botao-confirmar'] })

    containerDespesa.appendChild(boxTotal);
    containerDespesa.appendChild(cabecalho);
    containerDespesa.appendChild(wrapBoxCarteira);
    containerDespesa.appendChild(dataDespesa);
    containerDespesa.appendChild(boxParcelas);
    containerDespesa.appendChild(campoTags);
    containerDespesa.appendChild(campoObs);
    containerDespesa.appendChild(botaoConfirmar);

    wrapBoxCarteira.appendChild(boxCarteira);
    wrapBoxCarteira.appendChild(boxCarteiraAdd);

    botaoAdd.addEventListener("click", CriarCadastroCategorias)
    botaoConfirmar.addEventListener("click", () => {
      const $categoria = document.querySelector('.text-carteira-add');

      if ($categoria.textContent === 'Categoria') {avisoPreecherCategoria({boxCarteiraAdd}); return;}
      atribuiValores();
      criaDashBoard({valor: valorDespesa, carteira: {nomeCarteira, nomePessoaCarteira}, categoria: {categoriaPrincipal, subCategoria}, tags, data: {dia, mes, ano}, obs, quantidadeParcelas});
      Despesas()
    })

    return containerDespesa;
  }, 
  remove: () =>{
    const containerDespesa = document.querySelector('.container-despesa');
    containerDespesa && containerDespesa.remove();
  }
};

const avisoPreecherCategoria =({boxCarteiraAdd}) =>{
  boxCarteiraAdd.classList.add('aviso-categoria');
  setTimeout(()=>{boxCarteiraAdd.classList.remove('aviso-categoria')}, 500)
}

const atribuiValores = () =>{
  const $valorTotal = document.querySelector('.valor-total');
  const $nomeCarteira = document.querySelector('.text-carteira');
  const $nomePessoaCarteira = document.querySelector('.text-nome');
  const $categoria = document.querySelector('.text-carteira-add');
  const $subCategoria = document.querySelector('.nome-add-text');
  const $campoData = document.querySelector('.campo-data');
  const $tags = [...document.querySelectorAll('.text-tag')]
  const $obs = document.querySelector('.obs');
  const $campoParcelas = document.querySelector('.campo-parcelas');
  
  valorDespesa = parseInt($valorTotal.textContent.replace(/[^0-9]/g,''));
  nomeCarteira = $nomeCarteira.textContent;
  nomePessoaCarteira = $nomePessoaCarteira.textContent;
  categoriaPrincipal = $categoria.textContent;
  quantidadeParcelas = $campoParcelas.value;
  obs = $obs.value;
  dia = parseInt($campoData.value.substring(8,10));
  mes = parseInt($campoData.value.substring(5,7));
  ano = parseInt($campoData.value.substring(0,4));
  $tags.map(tag =>{
    tags.push(tag.textContent);
  })
  console.log(valorDespesa);
}

const criaDashBoard = ({valor, carteira, categoria, tags, data, obs, quantidadeParcelas}) =>{
  const { dia, mes, ano } = data;
  const { nomeCarteira, nomePessoaCarteira } = carteira;
  const { categoriaPrincipal, subCategoria } = categoria;

  const dashBoardItem = {
    valor: valor,
    tipo: "Despesa",
    carteira: {
      nome: nomeCarteira,
      nomePessoa: nomePessoaCarteira
    },
    categoria: {
      principal: categoriaPrincipal,
      sub: "Cinema"
    },
    tags,
    data: {
      dia,
      mes,
      ano
    },
    obs,
    quantidadeParcelas
  }
  dashBoard.push(dashBoardItem);
  console.log(dashBoard);
}

export default ModalDespesa;
