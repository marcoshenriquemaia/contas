import BoxCarteira from './src/components/box-carteira/index.js';
import CriarCadastroCategorias from './src/components/categorias-conta/index.js';
import Discador from './src/components/discador/index.js';


import CriarBoxIcone from './src/components/shared/criar-box-icone/index.js';
import CriarDiv from './src/components/shared/criar-div/index.js';
import CriarImagem from './src/components/shared/criar-imagem/index.js';
import CriarBotao from './src/components/shared/criar-botao/index.js';
import CriarIcone from './src/components/shared/criar-icone/index.js'; 
import CriarSpan from './src/components/shared/criar-span/index.js'; 
import CriarH2 from './src/components/shared/criar-h2/index.js'; 
import CriarInput from './src/components/shared/criar-input/index.js'; 


const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const icone4 = document.querySelector(".icone-4");

const carteira = {
  nome: "Marcos",
  tipo: "Carteira",
  valor: "100",
  cor: '#0099ff'
};
const carteiras = [];

const contas = [];


botaoAdd.addEventListener("click", e => {
  Discador(criarPaginaDespesa);
});

let valorDiscador;

container.addEventListener("click", e => {
  const campoValorDiscador = document.querySelector(".campo-valores-discador");
  if (e.target.classList.contains("numero-discador")) {
    const classe = e.target.classList[1];
    const valor = campoValorDiscador.textContent + `${classe[15]}`;
    const valorMask = valor.replace(/(\d{3})(\d)/g, "$1.$2");
    campoValorDiscador.textContent = valorMask;
    valorDiscador = valorMask;
  }
});


const criarPaginaDespesa = () => {
  const containerDespesa = document.createElement("section");
  containerDespesa.classList.add("container-despesa");

  const cabecalho = document.createElement("header");
  cabecalho.classList.add("secoes-cabecalho");

  const receita = CriarSpan(
    "Receita",
    "receita",
    "receita-despesa-transferencia"
  );

  const despesa = CriarSpan(
    "Despesa",
    "despesa",
    "receita-despesa-transferencia"
  );

  const trasnferencia = CriarSpan(
    "Transferência",
    "transferencia",
    "receita-despesa-transferencia"
  );

  const boxTotal = criarBoxTotalConta(valorDiscador);

  const excluirTotal = CriarIcone("delete (1).png", "Voltar", "botao-excluir");

  const wrapNomeCampoConta = CriarDiv('wrap-nome-campo-conta');

  const campoNomeConta = CriarInput("text", "Nome da conta", "campo-nome-conta", "campo-nome-conta");

  const wrapBoxCarteira = CriarDiv("wrap-box-carteira");

  const boxCarteira = BoxCarteira();

  const boxIcone = CriarDiv("box-icone-carteira");

  const iconeCarteira = CriarIcone(
    "bill.png",
    "Icone da Carteira",
    "icone-carteira"
  );

  const wrapCarteiraNome = CriarDiv("wrap-carteira-nome");

  const textCarteira = CriarSpan("Carteira", "text-carteira");

  const textNome = CriarSpan("Nome", "text-nome");

  const textValor = CriarSpan("R$ 100.000,00", "text-valor");

  const boxCarteiraAdd = CriarDiv("box-carteira");

  const boxIconeAdd = CriarDiv("box-icone-carteira");

  const iconeCarteiraAdd = CriarIcone(
    "bill.png",
    "Botao Adicionar Carteira",
    "icone-carteira"
  );

  const wrapCarteiraNomeAdd = CriarDiv("wrap-carteira-nome");

  const textCarteiraAdd = CriarSpan("Categoria", "text-carteira");

  const textNomeAdd = CriarSpan("Nome", "text-nome");

  const botaoAdd = CriarBotao("+", "add-carteira");

  const dataDespesa = CriarDiv("data");

  const textData = CriarSpan("Data", "text-data");

  const campoData = CriarInput("date", "", "campo-data", "campo-data");

  const boxParcelas = CriarDiv("parcelas");

  const textParcelas = CriarSpan("Parcelas", "text-parcelas");

  const campoParcelas = CriarDiv("campo-parcelas");

  const textQuantidadeParcelas = CriarSpan("1 vez", "text-quantidade-parcelas");

  const wrapCheckboxParcelas = CriarDiv("wrap-checkbox-parcelas");

  const checkboxParcelas = CriarDiv("checkbox-parcelas");

  const textCheckboxParcelas = CriarSpan(
    "Dividir-valor",
    "text-checkbox-parcelas"
  );

  const campoTags = CriarDiv("campo-tags");

  const tag = CriarSpan("Crédito", "text-tag");

  const imagemDeleteTag = CriarIcone(
    "delete (2).png",
    "Botão para deleter a tag",
    "img-delete-tag"
  );

  const addTag = CriarSpan("Adicionar", "text-adicionar-tag");

  const campoObs = document.createElement("textarea");
  campoObs.setAttribute("placeholder", "Obs...");
  campoObs.classList.add("obs");

  const botaoConfirmar = CriarBotao("Confirmar", "botao-confirmar");

  container.appendChild(containerDespesa);

  cabecalho.appendChild(receita);
  cabecalho.appendChild(despesa);
  cabecalho.appendChild(trasnferencia);

  boxTotal.appendChild(excluirTotal);

  wrapNomeCampoConta.appendChild(campoNomeConta);

  containerDespesa.appendChild(boxTotal);
  containerDespesa.appendChild(cabecalho);
  containerDespesa.appendChild(wrapNomeCampoConta);
  containerDespesa.appendChild(wrapBoxCarteira);
  containerDespesa.appendChild(dataDespesa);
  containerDespesa.appendChild(boxParcelas);
  containerDespesa.appendChild(campoTags);
  containerDespesa.appendChild(campoObs);
  containerDespesa.appendChild(botaoConfirmar);

  wrapBoxCarteira.appendChild(boxCarteira)
  wrapBoxCarteira.appendChild(boxCarteiraAdd);

  boxIcone.appendChild(iconeCarteira);
  // boxCarteira.appendChild(boxIcone);
  // boxCarteira.appendChild(wrapCarteiraNome);
  // boxCarteira.appendChild(textValor);
  wrapCarteiraNome.appendChild(textCarteira);
  wrapCarteiraNome.appendChild(textNome);

  boxCarteiraAdd.appendChild(boxIconeAdd);
  boxCarteiraAdd.appendChild(wrapCarteiraNomeAdd);
  boxCarteiraAdd.appendChild(botaoAdd);
  boxIconeAdd.appendChild(iconeCarteiraAdd);
  wrapCarteiraNomeAdd.appendChild(textCarteiraAdd);
  wrapCarteiraNomeAdd.appendChild(textNomeAdd);

  dataDespesa.appendChild(textData);
  dataDespesa.appendChild(campoData);

  campoTags.appendChild(tag);
  campoTags.appendChild(addTag);
  tag.appendChild(imagemDeleteTag);

  boxParcelas.appendChild(textParcelas);
  boxParcelas.appendChild(campoParcelas);
  boxParcelas.appendChild(wrapCheckboxParcelas);
  campoParcelas.appendChild(textQuantidadeParcelas);
  wrapCheckboxParcelas.appendChild(checkboxParcelas);
  wrapCheckboxParcelas.appendChild(textCheckboxParcelas);

  excluirTotal.addEventListener('click', mostrarCarteira);
  excluirTotal.addEventListener("click", clickExcluirTotal);
  botaoConfirmar.addEventListener("click", criarListaContas);
  botaoAdd.addEventListener("click",CriarCadastroCategorias);
  botaoConfirmar.addEventListener('click', () =>{
    criarArrayConta(campoNomeConta.value, valorDiscador);
  })
};

const clickExcluirTotal = () => {
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);
};

const criarListaContas = () => {
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);

  const containerLista = document.createElement("section");
  containerLista.classList.add("container-lista");

  const campoValores = CriarSpan("R$ 100.000,00", "campo-valores", "valores");

  const iconeValor = CriarIcone("bill.png", "Icone valores", "icones");

  const containerDataConta = CriarDiv("container-data-conta");

  const textData = CriarSpan("13/08", "text-data-lista");

  const conta = CriarDiv("conta");

  const iconeConta = CriarDiv("icone-conta");

  const boxTextConta = CriarDiv("box-text-conta");

  const wrapTipoConta = CriarDiv("wrap-tipo-conta", "wrap-text-conta");

  const textTipoConta = CriarSpan("Tipo", "all-text-conta", "text-bold");

  const textConta = CriarSpan("Conta", "all-text-conta");

  const wrapStatusPagamento = CriarDiv(
    "wrap-status-pagamento",
    "wrap-text-conta"
  );

  const textValorConta = CriarSpan("R$ -100,00", "all-text-conta", "text-bold");

  const textStatusConta = CriarSpan("Pago!", "all-text-conta");

  container.appendChild(containerLista);

  containerLista.appendChild(campoValores);
  containerLista.appendChild(containerDataConta);

  campoValores.appendChild(iconeValor);

  containerDataConta.appendChild(textData);
  containerDataConta.appendChild(conta);

  conta.appendChild(iconeConta);
  conta.appendChild(boxTextConta);

  boxTextConta.appendChild(wrapTipoConta);
  boxTextConta.appendChild(wrapStatusPagamento);

  wrapTipoConta.appendChild(textTipoConta);
  wrapTipoConta.appendChild(textConta);

  wrapStatusPagamento.appendChild(textValorConta);
  wrapStatusPagamento.appendChild(textStatusConta);
};

const criarWrapMeta = () => {
  const boxMetas = document.querySelector(".box-metas");

  const wrapMeta = CriarDiv("wrap-metas");

  boxMetas.appendChild(wrapMeta);
};

const criarWrapBarraMeta = () => {
  const wrapMeta = document.querySelector("wrap-meta");

  const wrapTituloBarra = CriarDiv("wrap-titulo-barra");

  const titulo = CriarH2("Reserva", "text-nome-meta");

  const barra = CriarDiv("barra-progresso");

  wrapMeta.appendChild(wrapTituloBarra);
  wrapTituloBarra.appendChild(titulo);
  wrapTituloBarra.appendChild(barra);
};


const criarValorMeta = () => {
  const wrapMeta = document.querySelector("wrap-meta");

  const valorMeta = CriarSpan("R$ 100.000,00", "valor-meta");

  wrapMeta.appendChild(valorMeta);
};

const mostrarCarteira = () =>{
  const cadastroConta = document.querySelector('.cadastro-conta');
  cadastroConta.innerHTML = '';
  
  carteiras.forEach(carteira => {
    
    BoxCarteira(carteira);
    
  });

  carteiras.push(carteira);
}
icone4.addEventListener('click', mostrarCarteira);

const criarBoxTotalConta = () =>{ 

  const boxTotal = CriarDiv('box-total');

  const valorTotalConta = criarValorTotalConta();

  boxTotal.appendChild(valorTotalConta);

  return boxTotal;
}

const criarValorTotalConta = () =>{
  const valorTotalConta = CriarSpan('', 'valor-total');
  valorTotalConta.textContent = valorDiscador;

  return valorTotalConta;
}

const criarArrayConta = (nome, valor, carteira, data, parcelas, obs, ...tags) =>{
  const conta = {
    nome,
    valor,
    carteira,
    data,
    parcelas,
    obs,
    tags
  }

  contas.push(conta);
}


const criarWrapCarteiraNomeCadastro = () =>{
  const wrapCarteiraNome = CriarDiv('wrap-carteira-nome');

  const tipoCarteira = CriarSpan('Carteira', 'text-carteira');

  const nomeCarteira = CriarSpan('Nome', 'text-nome');

  wrapCarteiraNome.appendChild(tipoCarteira);
  wrapCarteiraNome.appendChild(nomeCarteira);

  return wrapCarteiraNome;

}


// Arrumar box carteira, icone. 