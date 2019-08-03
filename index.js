const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const icone4 = document.querySelector('.icone-4');

const criarDiscador = () => {
  const containerDiscador = document.createElement("section");
  containerDiscador.classList.add("container-discador");

  const cabecalho = document.createElement("header");
  cabecalho.classList.add("secoes-cabecalho");

  const receita = document.createElement("span");
  receita.classList.add("receita");
  receita.classList.add("receita-despesa-transferencia");
  receita.textContent = "Receita";

  const despesa = document.createElement("span");
  despesa.classList.add("despesa");
  despesa.classList.add("receita-despesa-transferencia");
  despesa.textContent = "Despesa";

  const trasnferencia = document.createElement("span");
  trasnferencia.classList.add("transferencia");
  trasnferencia.classList.add("receita-despesa-transferencia");
  trasnferencia.textContent = "Trasnferência";

  const campoValoresDiscador = document.createElement("span");
  campoValoresDiscador.classList.add("campo-valores-discador");
  campoValoresDiscador.textContent = "R$ 100.000,00";

  const botaoContinuar = document.createElement("button");
  botaoContinuar.classList.add("botao-discador");
  botaoContinuar.textContent = "Continuar";

  cabecalho.appendChild(receita);
  cabecalho.appendChild(despesa);
  cabecalho.appendChild(trasnferencia);
  containerDiscador.appendChild(campoValoresDiscador);
  containerDiscador.appendChild(cabecalho);
  containerDiscador.appendChild(criarBotoesDiscador());
  containerDiscador.appendChild(botaoContinuar);
  container.appendChild(containerDiscador);

  botaoContinuar.addEventListener('click', clickContinuarDiscador)
  
};

const clickContinuarDiscador = () =>{
  const containerDiscador = document.querySelector('.container-discador');
  container.removeChild(containerDiscador)

  criarPaginaDespesa();
}

botaoAdd.addEventListener("click", e => {
  criarDiscador();
});

const criarBotoesDiscador = () => {
  const discador = document.createElement("div");
  discador.classList.add("discador");

  for (let i = 1; i < 10; i++) {
    const botaoDiscador = document.createElement("span");
    botaoDiscador.classList.add("numero-discador");
    botaoDiscador.classList.add(`mumero-discador${i}`);
    botaoDiscador.textContent = i;

    discador.appendChild(botaoDiscador);
  }
  const botaoDiscador = document.createElement("span");
  botaoDiscador.classList.add("numero-discador");
  botaoDiscador.classList.add("numero-discador0");
  botaoDiscador.textContent = "0";

  const backspace = document.createElement("img");
  backspace.setAttribute("src", "backspace-arrow.png");
  backspace.classList.add("backspace");

  discador.appendChild(botaoDiscador);
  discador.appendChild(backspace);


  return discador;
};


container.addEventListener('click', e =>{
    if (e.target.classList.contains('numero-discador')){
        criarPaginaDespesa();

    };
})

const criarPaginaDespesa = () =>{   
    const containerDespesa = document.createElement("section");
    containerDespesa.classList.add("container-despesa");
  
    const cabecalho = document.createElement("header");
    cabecalho.classList.add("secoes-cabecalho");
  
    const receita = document.createElement("span");
    receita.classList.add("receita");
    receita.classList.add("receita-despesa-transferencia");
    receita.textContent = "Receita";
  
    const despesa = document.createElement("span");
    despesa.classList.add("despesa");
    despesa.classList.add("receita-despesa-transferencia");
    despesa.textContent = "Despesa";
  
    const trasnferencia = document.createElement("span");
    trasnferencia.classList.add("transferencia");
    trasnferencia.classList.add("receita-despesa-transferencia");
    trasnferencia.textContent = "Trasnferência";

    const boxTotal = document.createElement('div');
    boxTotal.classList.add('box-total');

    const excluirTotal = document.createElement('img');
    excluirTotal.setAttribute('src', 'delete (1).png');
    excluirTotal.classList.add('botao-excluir');

    const cifrao = document.createElement('span');
    cifrao.classList.add('cifrao');
    cifrao.textContent = 'R$';

    const valorTotal = document.createElement('span');
    valorTotal.classList.add('valor-total');
    valorTotal.textContent = '100.000,00';

    const boxCarteira = document.createElement('div');
    boxCarteira.classList.add('box-carteira');

    const boxIcone = document.createElement('div');
    boxIcone.classList.add('box-icone-carteira');
    
    const iconeCarteira = document.createElement('img');
    iconeCarteira.setAttribute('src', 'bill.png')
    iconeCarteira.classList.add('icone-carteira');

    const wrapCarteiraNome = document.createElement('div');
    wrapCarteiraNome.classList.add('wrap-carteira-nome');

    const textCarteira = document.createElement('span');
    textCarteira.classList.add('text-carteira');
    textCarteira.textContent = 'Carteira';

    const textNome = document.createElement('span');
    textNome.classList.add('text-nome');
    textNome.textContent = 'Nome';

    const textValor = document.createElement('span');
    textValor.classList.add('text-valor');
    textValor.textContent = 'R$ 100.000,00'

    const boxCarteiraAdd = document.createElement('div');
    boxCarteiraAdd.classList.add('box-carteira');

    const boxIconeAdd = document.createElement('div');
    boxIconeAdd.classList.add('box-icone-carteira');
    
    const iconeCarteiraAdd = document.createElement('img');
    iconeCarteiraAdd.setAttribute('src', 'bill.png')
    iconeCarteiraAdd.classList.add('icone-carteira');

    const wrapCarteiraNomeAdd = document.createElement('div');
    wrapCarteiraNomeAdd.classList.add('wrap-carteira-nome');

    const textCarteiraAdd = document.createElement('span');
    textCarteiraAdd.classList.add('text-carteira');
    textCarteiraAdd.textContent = 'Carteira';

    const textNomeAdd = document.createElement('span');
    textNomeAdd.classList.add('text-nome');
    textNomeAdd.textContent = 'Nome';

    const botaoAdd = document.createElement('span');
    botaoAdd.classList.add('add-carteira');
    botaoAdd.textContent = '+';

    const dataDespesa = document.createElement('div');
    dataDespesa.classList.add('data');

    const textData = document.createElement('span');
    textData.classList.add('text-data');
    textData.textContent = 'Data';

    const campoData = document.createElement('input');
    campoData.setAttribute('type', 'date');
    campoData.classList.add('campo-data');

    const boxParcelas = document.createElement('div');
    boxParcelas.classList.add('parcelas');

    const textParcelas = document.createElement('span');
    textParcelas.classList.add('text-parcelas');
    textParcelas.textContent = 'Parcelas';

    const campoParcelas = document.createElement('div');
    campoParcelas.classList.add('campo-parcelas');

    const textQuantidadeParcelas = document.createElement('span');
    textQuantidadeParcelas.classList.add('text-quantidade-parcelas');
    textQuantidadeParcelas.textContent = '1 vez';

    const wrapCheckboxParcelas = document.createElement('div');
    wrapCheckboxParcelas.classList.add('wrap-checkbox-parcelas');

    const checkboxParcelas = document.createElement('div');
    checkboxParcelas.classList.add('checkbox-parcelas');

    const textCheckboxParcelas = document.createElement('span');
    textCheckboxParcelas.classList.add('text-checkbox-parcelas');
    textCheckboxParcelas.textContent = 'Dividir valor';



    const campoTags = document.createElement('div');
    campoTags.classList.add('campo-tags');

    const tag = document.createElement('span');
    tag.classList.add('text-tag');
    tag.textContent = 'Crédito';

    const imagemDeleteTag = document.createElement('img');
    imagemDeleteTag.setAttribute('src', 'delete (2).png');
    imagemDeleteTag.classList.add('img-delete-tag');

    const addTag = document.createElement('span');
    addTag.classList.add('text-adicionar-tag');
    addTag.textContent = 'Adicionar +';

    const campoObs = document.createElement('textarea');
    campoObs.setAttribute('placeholder', 'Obs...');
    campoObs.classList.add('obs');

    const botaoConfirmar = document.createElement('button');
    botaoConfirmar.classList.add('botao-confirmar');
    botaoConfirmar.textContent = 'Confirmar';
    
    
    container.appendChild(containerDespesa);

    cabecalho.appendChild(receita);
    cabecalho.appendChild(despesa);
    cabecalho.appendChild(trasnferencia);
    
    boxTotal.appendChild(valorTotal);
    boxTotal.appendChild(excluirTotal);
    valorTotal.appendChild(cifrao);

    containerDespesa.appendChild(boxTotal);
    containerDespesa.appendChild(boxCarteira);
    containerDespesa.appendChild(boxCarteiraAdd);
    containerDespesa.appendChild(cabecalho);
    containerDespesa.appendChild(dataDespesa);
    containerDespesa.appendChild(boxParcelas);
    containerDespesa.appendChild(campoTags);
    containerDespesa.appendChild(campoObs);
    containerDespesa.appendChild(botaoConfirmar);

    boxIcone.appendChild(iconeCarteira);
    boxCarteira.appendChild(boxIcone);
    boxCarteira.appendChild(wrapCarteiraNome);
    boxCarteira.appendChild(textValor);
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

    excluirTotal.addEventListener('click', clickExcluirTotal);
    botaoConfirmar.addEventListener('click', criarListaContas);

}

const clickExcluirTotal = () =>{
  const containerDespesa = document.querySelector('.container-despesa');
  container.removeChild(containerDespesa);
}


const criarListaContas = () =>{
  const containerDespesa = document.querySelector('.container-despesa');
  container.removeChild(containerDespesa);

  const containerLista = document.createElement('section');
  containerLista.classList.add('container-lista');

  const campoValores = document.createElement('span');
  campoValores.classList.add('campo-valores');
  campoValores.classList.add('valores');
  campoValores.textContent = 'R$ 100.000,00';

  const iconeValor = document.createElement('img')
  iconeValor.setAttribute('src', 'bill.png');
  iconeValor.classList.add('icones');

  const containerDataConta = document.createElement('div');
  containerDataConta.classList.add('container-data-conta');
  
  const textData = document.createElement('span');
  textData.classList.add('text-data-lista');
  textData.textContent  = '13/08';

  const conta = document.createElement('div');
  conta.classList.add('conta');

  const iconeConta = document.createElement('div');
  iconeConta.classList.add('icone-conta');

  const boxTextConta = document.createElement('div');
  boxTextConta.classList.add('box-text-conta');

  const wrapTipoConta = document.createElement('div');
  wrapTipoConta.classList.add('wrap-tipo-conta');
  wrapTipoConta.classList.add('wrap-text-conta');

  const textTipoConta = document.createElement('span');
  textTipoConta.classList.add('all-text-conta');
  textTipoConta.classList.add('text-bold');
  textTipoConta.textContent = 'Tipo';

  const textConta = document.createElement('span');
  textConta.classList.add('all-text-conta');
  textConta.textContent = 'Conta';

  const wrapStatusPagamento = document.createElement('div');
  wrapStatusPagamento.classList.add('wrap-status-pagamento');
  wrapStatusPagamento.classList.add('wrap-text-conta');

  const textValorConta = document.createElement('span');
  textValorConta.classList.add('all-text-conta');
  textValorConta.classList.add('text-bold');
  textValorConta.textContent = 'R$ -100,00';

  const textStatusConta = document.createElement('span');
  textStatusConta.classList.add('all-text-conta');
  textStatusConta.textContent = 'não pago';


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

}


