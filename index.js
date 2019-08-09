const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const icone4 = document.querySelector(".icone-4");


const carteira = {
  nome: "Marcos",
  tipo: "Carteira",
  valor: "100",
  cor: 'red'
};
const carteiras = [];

const contas = [];



// Criadores de elementos v

const criarBoxIcone = (cor) =>{
  const elemento = criarDiv('box-icone-carteira');
  elemento.style.backgroundColor = cor;

  return elemento;
}

const criarIcone = (icone, alt) =>{
  const elemento = document.createElement('img');
  elemento.setAttribute('src', `${icone}`);
  elemento.setAttribute('alt', alt);
  elemento.classList.add('icones')

  return elemento; 
}

const criarDiv = (...classe) => {
  const elemento = document.createElement("div");

  [...classe].map(item => elemento.classList.add(item));

  return elemento;
};

const criarBotao = (conteudo, ...classe) => {
  const botao = document.createElement("button");
  [...classe].map(item => botao.classList.add(item));
  botao.textContent = conteudo;

  return botao;
};

const criarImagem = (imagem, alt, ...classe) => {
  const elemento = document.createElement("img");
  elemento.setAttribute("src", `./${imagem}`);
  elemento.setAttribute("alt", `${alt}`);
  [...classe].map(item => {
    elemento.classList.add(item);
  });

  return elemento;
};

const criarSpan = (conteudo, ...classe) => {
  const elemento = document.createElement("span");
  elemento.textContent = conteudo;
  [...classe].map(item => elemento.classList.add(item))

  return elemento;
};

const criarH2 = (conteudo, ...classe) => {
  const elemento = document.createElement("h2");
  elemento.textContent = conteudo;
  classe[1]
    ? classe.map(item => elemento.classList.add(item))
    : elemento.classList.add(classe);

  return elemento;
};

const criarInput = (tipo, placeholder, id, ...classe) => {
  const elemento = document.createElement("input");
  elemento.setAttribute("type", tipo);
  elemento.setAttribute("placeholder", placeholder);
  elemento.setAttribute("id", id);
  [...classe].map(item => elemento.classList.add(item));

  return elemento;
};

const criarLabel = (text, nameInput, ...classe) => {
  const elemento = document.createElement("label");

  elemento.setAttribute("for", nameInput);
  elemento.textContent = text;
  [...classe].map(item => elemento.classList.add(item));

  return elemento;
};

//Criadores de elementos ^

const criarDiscador = () => {
  const containerDiscador = document.createElement("section");
  containerDiscador.classList.add("container-discador");

  const cabecalho = document.createElement("header");
  cabecalho.classList.add("secoes-cabecalho");

  const receita = criarSpan(
    "Receita",
    "receita",
    "receita-despesa-transferencia"
  );

  const despesa = criarSpan(
    "Despesa",
    "despesa",
    "receita-despesa-transferencia"
  );

  const trasnferencia = criarSpan(
    "Transferência",
    "transferencia",
    "receita-despesa-transferencia"
  );

  const campoValoresDiscador = criarSpan("R$ ", "campo-valores-discador");

  const botaoContinuar = criarBotao("Continuar", "botao-discador");

  cabecalho.appendChild(receita);
  cabecalho.appendChild(despesa);
  cabecalho.appendChild(trasnferencia);
  containerDiscador.appendChild(campoValoresDiscador);
  containerDiscador.appendChild(cabecalho);
  containerDiscador.appendChild(criarBotoesDiscador());
  containerDiscador.appendChild(botaoContinuar);
  container.appendChild(containerDiscador);

  botaoContinuar.addEventListener("click", clickContinuarDiscador);
};

const clickContinuarDiscador = () => {
  const containerDiscador = document.querySelector(".container-discador");
  container.removeChild(containerDiscador);
  criarPaginaDespesa();
};

botaoAdd.addEventListener("click", e => {
  criarDiscador();
});

const criarBotoesDiscador = () => {
  const discador = criarDiv("discador");

  for (let i = 1; i < 10; i++) {
    const botaoDiscador = criarBotao(
      i,
      "numero-discador",
      `numero-discador${i}`
    );

    discador.appendChild(botaoDiscador);
  }
  const botaoDiscador = criarBotao(0, "numero-discador", "numero-discador0");

  const backspace = criarImagem(
    "backspace-arrow.png",
    "Backspace",
    "backspace"
  );

  discador.appendChild(botaoDiscador);
  discador.appendChild(backspace);

  return discador;
};

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

  const receita = criarSpan(
    "Receita",
    "receita",
    "receita-despesa-transferencia"
  );

  const despesa = criarSpan(
    "Despesa",
    "despesa",
    "receita-despesa-transferencia"
  );

  const trasnferencia = criarSpan(
    "Transferência",
    "transferencia",
    "receita-despesa-transferencia"
  );

  const boxTotal = criarBoxTotalConta(valorDiscador);

  const excluirTotal = criarImagem("delete (1).png", "Voltar", "botao-excluir");

  const wrapNomeCampoConta = criarDiv('wrap-nome-campo-conta');

  const campoNomeConta = criarInput("text", "Nome da conta", "campo-nome-conta", "campo-nome-conta");

  const wrapBoxCarteira = criarDiv("wrap-box-carteira");

  const boxCarteira = criarBoxCarteiraCadastro();

  const boxIcone = criarDiv("box-icone-carteira");

  const iconeCarteira = criarImagem(
    "bill.png",
    "Icone da Carteira",
    "icone-carteira"
  );

  const wrapCarteiraNome = criarDiv("wrap-carteira-nome");

  const textCarteira = criarSpan("Carteira", "text-carteira");

  const textNome = criarSpan("Nome", "text-nome");

  const textValor = criarSpan("R$ 100.000,00", "text-valor");

  const boxCarteiraAdd = criarDiv("box-carteira");

  const boxIconeAdd = criarDiv("box-icone-carteira");

  const iconeCarteiraAdd = criarImagem(
    "bill.png",
    "Botao Adicionar Carteira",
    "icone-carteira"
  );

  const wrapCarteiraNomeAdd = criarDiv("wrap-carteira-nome");

  const textCarteiraAdd = criarSpan("Categoria", "text-carteira");

  const textNomeAdd = criarSpan("Nome", "text-nome");

  const botaoAdd = criarBotao("+", "add-carteira");

  const dataDespesa = criarDiv("data");

  const textData = criarSpan("Data", "text-data");

  const campoData = criarInput("date", "", "campo-data", "campo-data");

  const boxParcelas = criarDiv("parcelas");

  const textParcelas = criarSpan("Parcelas", "text-parcelas");

  const campoParcelas = criarDiv("campo-parcelas");

  const textQuantidadeParcelas = criarSpan("1 vez", "text-quantidade-parcelas");

  const wrapCheckboxParcelas = criarDiv("wrap-checkbox-parcelas");

  const checkboxParcelas = criarDiv("checkbox-parcelas");

  const textCheckboxParcelas = criarSpan(
    "Dividir-valor",
    "text-checkbox-parcelas"
  );

  const campoTags = criarDiv("campo-tags");

  const tag = criarSpan("Crédito", "text-tag");

  const imagemDeleteTag = criarImagem(
    "delete (2).png",
    "Botão para deleter a tag",
    "img-delete-tag"
  );

  const addTag = criarSpan("Adicionar", "text-adicionar-tag");

  const campoObs = document.createElement("textarea");
  campoObs.setAttribute("placeholder", "Obs...");
  campoObs.classList.add("obs");

  const botaoConfirmar = criarBotao("Confirmar", "botao-confirmar");

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
  botaoAdd.addEventListener("click", criarCadastroCarteira);
  botaoConfirmar.addEventListener('click', () =>{
    criarArrayConta(campoNomeConta.value, valorDiscador);
    console.log(contas[0].nome);
  })
};

const clickExcluirTotal = () => {
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);
};

const criarCadastroCarteira = () => {
  const containerDespesa = document.querySelector(".container-despesa");

  const cadastroCarteira = criarDiv("cadastro-carteira");

  const boxCategorias = criarCategoriasConta();

  
  cadastroCarteira.appendChild(boxCategorias);
  containerDespesa.appendChild(cadastroCarteira);

  boxCategorias.addEventListener("click", clickBotaoSalvar);
};

const criarCategoriasConta = () =>{
  const boxCategorias = document.createElement('div');
  boxCategorias.classList.add('box-categorias');

  const wrapLazer = criarDiv('wrap-lazer', 'wrap-all-categorias');

  const wrapAlimentacao = criarDiv('wrap-alimentacao', 'wrap-all-categorias');

  const wrapRoupas = criarDiv('wrap-roupas', 'wrap-all-categorias');

  const wrapSupermercado = criarDiv('wrap-supermercado', 'wrap-all-categorias');

  const iconeLazer = criarIcone('park.png', 'icones');

  const iconeAlimentacao = criarIcone('fork.png', 'icones');

  const iconeRoupas = criarIcone('clothes.png', 'icones');

  const iconeSupermercado = criarIcone('shopping-cart.png', 'icones');

  const textLazer = criarSpan('Lazer', 'text-categoria');

  const textAlimentacao = criarSpan('Alimentação','text-categoria');

  const textRoupas = criarSpan('Roupas', 'text-categoria');

  const textSupermercado = criarSpan('Supermercado', 'text-categoria');

  wrapLazer.appendChild(iconeLazer);
  wrapLazer.appendChild(textLazer);
  wrapAlimentacao.appendChild(iconeAlimentacao);
  wrapAlimentacao.appendChild(textAlimentacao);
  wrapRoupas.appendChild(iconeRoupas);
  wrapRoupas.appendChild(textRoupas);
  wrapSupermercado.appendChild(iconeSupermercado);
  wrapSupermercado.appendChild(textSupermercado);

  boxCategorias.appendChild(wrapLazer);
  boxCategorias.appendChild(wrapAlimentacao);
  boxCategorias.appendChild(wrapRoupas);
  boxCategorias.appendChild(wrapSupermercado);

  return boxCategorias;
};




const clickBotaoSalvar = () => {
  const cadastroCarteira = document.querySelector(".cadastro-carteira");
  const containerDespesa = document.querySelector('.container-despesa');

  containerDespesa.removeChild(cadastroCarteira);
};


const criarListaContas = () => {
  const containerDespesa = document.querySelector(".container-despesa");
  container.removeChild(containerDespesa);

  const containerLista = document.createElement("section");
  containerLista.classList.add("container-lista");

  const campoValores = criarSpan("R$ 100.000,00", "campo-valores", "valores");

  const iconeValor = criarImagem("bill.png", "Icone valores", "icones");

  const containerDataConta = criarDiv("container-data-conta");

  const textData = criarSpan("13/08", "text-data-lista");

  const conta = criarDiv("conta");

  const iconeConta = criarDiv("icone-conta");

  const boxTextConta = criarDiv("box-text-conta");

  const wrapTipoConta = criarDiv("wrap-tipo-conta", "wrap-text-conta");

  const textTipoConta = criarSpan("Tipo", "all-text-conta", "text-bold");

  const textConta = criarSpan("Conta", "all-text-conta");

  const wrapStatusPagamento = criarDiv(
    "wrap-status-pagamento",
    "wrap-text-conta"
  );

  const textValorConta = criarSpan("R$ -100,00", "all-text-conta", "text-bold");

  const textStatusConta = criarSpan("Pago!", "all-text-conta");

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

const criarBoxCarteira = (carteira) => {
  const { nome, tipo, valor, cor } = carteira;

  const cadastroConta = document.querySelector(".cadastro-conta");

  const boxConta = criarDiv("box-conta");

  const wrapCarteiraNome = criarWrapCarteiraNome(nome, tipo);
  
  const valorCarteira = criarValorCarteira(valor);

  const boxIcone = criarBoxIcone(cor);

  const icone = criarIcone('add (2).png', 'Icone Carteira');


  boxConta.appendChild(boxIcone);
  boxIcone.appendChild(icone);
  boxConta.appendChild(wrapCarteiraNome);
  boxConta.appendChild(valorCarteira)
  cadastroConta.appendChild(boxConta);
};



const criarWrapCarteiraNome = (nome, tipo) => {

  const wrapCarteiraNome = criarDiv("wrap-carteira-nome");

  const textCarteira = criarSpan(tipo, "text-carteira");

  const textNome = criarSpan(nome, "text-nome");


  wrapCarteiraNome.appendChild(textCarteira);
  wrapCarteiraNome.appendChild(textNome);

  return wrapCarteiraNome;
};

const criarValorCarteira = valor => {
  const valorCarteira = criarSpan(
    valor,
    "valor-carteira"
  );
  return valorCarteira; 
};


const criarWrapMeta = () => {
  const boxMetas = document.querySelector(".box-metas");

  const wrapMeta = criarDiv("wrap-metas");

  boxMetas.appendChild(wrapMeta);
};

const criarWrapBarraMeta = () => {
  const wrapMeta = document.querySelector("wrap-meta");

  const wrapTituloBarra = criarDiv("wrap-titulo-barra");

  const titulo = criarH2("Reserva", "text-nome-meta");

  const barra = criarDiv("barra-progresso");

  wrapMeta.appendChild(wrapTituloBarra);
  wrapTituloBarra.appendChild(titulo);
  wrapTituloBarra.appendChild(barra);
};


const criarValorMeta = () => {
  const wrapMeta = document.querySelector("wrap-meta");

  const valorMeta = criarSpan("R$ 100.000,00", "valor-meta");

  wrapMeta.appendChild(valorMeta);
};

const mostrarCarteira = () =>{
  const cadastroConta = document.querySelector('.cadastro-conta');
  cadastroConta.innerHTML = '';
  
  carteiras.forEach(carteira => {
    
    criarBoxCarteira(carteira);
    
  });

  carteiras.push(carteira);
}
icone4.addEventListener('click', mostrarCarteira);

const criarBoxTotalConta = () =>{ 

  const boxTotal = criarDiv('box-total');

  const valorTotalConta = criarValorTotalConta();

  boxTotal.appendChild(valorTotalConta);

  return boxTotal;
}

const criarValorTotalConta = () =>{
  const valorTotalConta = criarSpan('', 'valor-total');
  valorTotalConta.textContent = valorDiscador;

  return valorTotalConta;
}

const criarArrayConta = (nome, valor, carteira, data, parcelas, obs, ...tags) =>{
  const conta = {
    nome: nome,
    valor: valor,
    carteira: carteira,
    data: data,
    parcelas: parcelas,
    obs: obs,
    tags: tags
  }

  contas.push(conta);
}

const criarBoxCarteiraCadastro = () =>{
  const boxCarteiraCadastro = criarDiv('box-carteira');

  const wrapCarteiraNomeCadastro = criarWrapCarteiraNomeCadastro();

  const boxIcone = criarIconeBoxCarteiraCadastro();

  const valor = criarSpan('R$ 100.000,00', 'valor-carteira');

  boxCarteiraCadastro.appendChild(boxIcone);
  boxCarteiraCadastro.appendChild(wrapCarteiraNomeCadastro);
  boxCarteiraCadastro.appendChild(valor);

  return boxCarteiraCadastro;
}

const criarWrapCarteiraNomeCadastro = () =>{
  const wrapCarteiraNome = criarDiv('wrap-carteira-nome');

  const tipoCarteira = criarSpan('Carteira', 'text-carteira');

  const nomeCarteira = criarSpan('Nome', 'text-nome');

  wrapCarteiraNome.appendChild(tipoCarteira);
  wrapCarteiraNome.appendChild(nomeCarteira);

  return wrapCarteiraNome;

}

const criarIconeBoxCarteiraCadastro = () =>{
  const boxIcone = criarBoxIcone('red');
  
  const icone = criarIcone('add.png', 'icones');

  boxIcone.appendChild(icone);

  return boxIcone;
}



