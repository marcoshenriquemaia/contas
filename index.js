const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const icone4 = document.querySelector('.icone-4');

const carteira = [];

// Criadores de elementos v

const criarBotao = (conteudo, ...classe) =>{
  const botao = document.createElement('button');
  [...classe].map(item => botao.classList.add(item))
  botao.textContent = conteudo;

  return botao; 
}

const criarImagem = (imagem, alt, ...classe) =>{
  const elemento = document.createElement('img');
  elemento.setAttribute('src', `./${imagem}`)
  elemento.setAttribute('alt', `${alt}`);
  [...classe].map(item =>{
    elemento.classList.add(item);
  })

  return elemento; 
}

const criarSpan = (conteudo, ...classe) =>{
  const elemento = document.createElement('span');
  elemento.textContent = conteudo;
  classe[1] ? classe.map(item => elemento.classList.add(item))
   : elemento.classList.add(classe);

  return elemento; 
  }


//Criadores de elementos ^






const criarDiscador = () => {
  const containerDiscador = document.createElement("section");
  containerDiscador.classList.add("container-discador");

  const cabecalho = document.createElement("header");
  cabecalho.classList.add("secoes-cabecalho");

  const receita = criarSpan('Receita', 'receita', 'receita-despesa-transferencia');

  const despesa = criarSpan('Despesa', 'despesa', 'receita-despesa-transferencia');

  const trasnferencia = criarSpan('Transferência', 'transferencia', 'receita-despesa-transferencia');

  const campoValoresDiscador = criarSpan('R$ ', 'campo-valores-discador');

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
    const botaoDiscador = criarBotao(i, 'numero-discador', `numero-discador${i}`);

    discador.appendChild(botaoDiscador);
  }
  const botaoDiscador = criarBotao(0, 'numero-discador', 'numero-discador0');

  const backspace = criarImagem('backspace-arrow.png', 'Backspace', 'backspace');

  discador.appendChild(botaoDiscador);
  discador.appendChild(backspace);


  return discador;
};

let valorDiscador;

container.addEventListener('click', e =>{
  const campoValorDiscador = document.querySelector('.campo-valores-discador');
    if (e.target.classList.contains('numero-discador')){
      const classe = e.target.classList[1];
        const valor = campoValorDiscador.textContent + `${classe[15]}`;
        const valorMask = valor.replace(/(\d{3})(\d)/g, '$1.$2');
        campoValorDiscador.textContent = valorMask;
        valorDiscador = valorMask;
    };
})

const criarPaginaDespesa = () =>{   
    const containerDespesa = document.createElement("section");
    containerDespesa.classList.add("container-despesa");
  
    const cabecalho = document.createElement("header");
    cabecalho.classList.add("secoes-cabecalho");
  
    const receita = criarSpan('Receita', 'receita', 'receita-despesa-transferencia');
  
    const despesa = criarSpan('Despesa', 'despesa', 'receita-despesa-transferencia');
  
    const trasnferencia = criarSpan('Transferência', 'transferencia', 'receita-despesa-transferencia');

    const boxTotal = document.createElement('div');
    boxTotal.classList.add('box-total');

    const excluirTotal = criarImagem('delete (1).png', 'Voltar', 'botao-excluir');

    // const cifrao = criarSpan('R$', 'cifrao');

    const valorTotal = criarSpan(valorDiscador, 'valor-total');

    const wrapBoxCarteira = document.createElement('div');
    wrapBoxCarteira.classList.add('wrap-box-carteira');

    const boxCarteira = document.createElement('div');
    boxCarteira.classList.add('box-carteira');

    const boxIcone = document.createElement('div');
    boxIcone.classList.add('box-icone-carteira');
    
    const iconeCarteira = criarImagem('bill.png', 'Icone da Carteira', 'icone-carteira');

    const wrapCarteiraNome = document.createElement('div');
    wrapCarteiraNome.classList.add('wrap-carteira-nome');

    const textCarteira = criarSpan('Carteira', 'text-carteira');

    const textNome = criarSpan('Nome', 'text-nome');

    const textValor = criarSpan('R$ 100.000,00', 'text-valor');

    const boxCarteiraAdd = document.createElement('div');
    boxCarteiraAdd.classList.add('box-carteira');

    const boxIconeAdd = document.createElement('div');
    boxIconeAdd.classList.add('box-icone-carteira');
    
    const iconeCarteiraAdd = criarImagem('bill.png', 'Botao Adicionar Carteira', 'icone-carteira');

    const wrapCarteiraNomeAdd = document.createElement('div');
    wrapCarteiraNomeAdd.classList.add('wrap-carteira-nome');

    const textCarteiraAdd = criarSpan('Carteira', 'text-carteira');

    const textNomeAdd = criarSpan('Nome', 'text-nome');

    const botaoAdd = criarBotao('+', 'add-carteira');

    const dataDespesa = document.createElement('div');
    dataDespesa.classList.add('data');

    const textData = criarSpan('Data', 'text-data');

    const campoData = document.createElement('input');
    campoData.setAttribute('type', 'date');
    campoData.classList.add('campo-data');

    const boxParcelas = document.createElement('div');
    boxParcelas.classList.add('parcelas');

    const textParcelas = criarSpan('Parcelas', 'text-parcelas');

    const campoParcelas = document.createElement('div');
    campoParcelas.classList.add('campo-parcelas');

    const textQuantidadeParcelas = criarSpan('1 vez', 'text-quantidade-parcelas');

    const wrapCheckboxParcelas = document.createElement('div');
    wrapCheckboxParcelas.classList.add('wrap-checkbox-parcelas');

    const checkboxParcelas = document.createElement('div');
    checkboxParcelas.classList.add('checkbox-parcelas');

    const textCheckboxParcelas = criarSpan('Dividir-valor', 'text-checkbox-parcelas');

    const campoTags = document.createElement('div');
    campoTags.classList.add('campo-tags');

    const tag = criarSpan('Crédito', 'text-tag');

    const imagemDeleteTag = criarImagem('delete (2).png', 'Botão para deleter a tag', 'img-delete-tag');

    const addTag = criarSpan('Adicionar', 'text-adicionar-tag');

    const campoObs = document.createElement('textarea');
    campoObs.setAttribute('placeholder', 'Obs...');
    campoObs.classList.add('obs');

    const botaoConfirmar = criarBotao('Confirmar', 'botao-confirmar');
    
    
    container.appendChild(containerDespesa);

    cabecalho.appendChild(receita);
    cabecalho.appendChild(despesa);
    cabecalho.appendChild(trasnferencia);
    
    boxTotal.appendChild(valorTotal);
    boxTotal.appendChild(excluirTotal);

    containerDespesa.appendChild(boxTotal);
    containerDespesa.appendChild(cabecalho);
    containerDespesa.appendChild(wrapBoxCarteira);
    containerDespesa.appendChild(dataDespesa);
    containerDespesa.appendChild(boxParcelas);
    containerDespesa.appendChild(campoTags);
    containerDespesa.appendChild(campoObs);
    containerDespesa.appendChild(botaoConfirmar);

    wrapBoxCarteira.appendChild(boxCarteiraAdd);

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
    botaoAdd.addEventListener('click', criarCadastroCarteira);
    
  }
  
  const clickExcluirTotal = () =>{
    const containerDespesa = document.querySelector('.container-despesa');
    container.removeChild(containerDespesa);
  }
  
  const criarCadastroCarteira = () =>{
    const containerDespesa = document.querySelector('.container-despesa');
    
    const cadastroCarteira = document.createElement('div');
    cadastroCarteira.classList.add('cadastro-carteira');
    
    const boxIconeCarteira = document.createElement('div');
    boxIconeCarteira.classList.add('box-icone-carteira');
    boxIconeCarteira.classList.add('icone-cadastro-carteira');
    
    const iconeCadastroCarteira = criarImagem('add.png', 'Escolher icone carteira', 'icone-carteira');
    
    const textTipoCarteira = document.createElement('label');
    textTipoCarteira.classList.add('text-cadastro-carteira');
    textTipoCarteira.textContent = 'Tipo de carteira';
    
    const textNomeCarteira = document.createElement('label');
    textNomeCarteira.classList.add('text-cadastro-carteira');
    textNomeCarteira.textContent = 'Nome da carteira';
    
    const campoTipo = document.createElement('input');
    campoTipo.classList.add('campo-text-tipo-carteira');
    campoTipo.classList.add('campo-cadastro-carteira');
    
    const campoNome = document.createElement('input');
    campoNome.classList.add('campo-text-nome-carteira');
    campoNome.classList.add('campo-cadastro-carteira');
    
    const botaoSalvar = criarBotao('Salvar', 'botao-salvar-cadastro-carteira');
    
    const fechar = criarImagem('delete (2).png', 'Fechar imagem', 'fechar-cadastro-carteira');
    
    cadastroCarteira.appendChild(boxIconeCarteira);
    cadastroCarteira.appendChild(textTipoCarteira);
    cadastroCarteira.appendChild(campoTipo);
    cadastroCarteira.appendChild(textNomeCarteira);
    cadastroCarteira.appendChild(campoNome);
    cadastroCarteira.appendChild(botaoSalvar);
    cadastroCarteira.appendChild(fechar);
    boxIconeCarteira.appendChild(iconeCadastroCarteira);
    
    containerDespesa.appendChild(cadastroCarteira);
    
    botaoSalvar.addEventListener('click', clickBotaoSalvar);
    fechar.addEventListener('click', clickFecharCadastroCarteira);
  }
  
const clickBotaoSalvar = () =>{
    const botaoSalvar = document.querySelector('.botao-salvar.cadastro.carteira');
    const campoTipo = document.querySelector('.campo-text-tipo-carteira');
    const campoNome = document.querySelector('.campo-text-nome-carteira');
    const containerDespesa = document.querySelector('.container-despesa');
    const cadastroCarteira = document.querySelector('.cadastro-carteira');
    const wrapBoxCarteira = document.querySelector('.wrap-box-carteira');

    carteira.push({'tipo': campoTipo.value, "nome": campoNome.value});

    const boxCarteira = document.createElement('div');
    boxCarteira.classList.add('box-carteira');

    const boxIcone = document.createElement('div');
    boxIcone.classList.add('box-icone-carteira');
    
    const iconeCarteira = criarImagem('bill.png', 'Icone da Carteira', 'icone-carteira');

    const wrapCarteiraNome = document.createElement('div');
    wrapCarteiraNome.classList.add('wrap-carteira-nome');

    const textCarteira = criarSpan(carteira[carteira.length -1].tipo, 'text-carteira');

    const textNome = criarSpan(carteira[carteira.length -1].nome, 'text-nome');

    const textValor = criarSpan('R$ 100.000,00', 'text-valor');

    wrapBoxCarteira.appendChild(boxCarteira);
    boxCarteira.appendChild(boxIcone);
    boxCarteira.appendChild(wrapCarteiraNome);
    boxCarteira.appendChild(textValor);
    boxIcone.appendChild(iconeCarteira);
    wrapCarteiraNome.appendChild(textCarteira);
    wrapCarteiraNome.appendChild(textNome);

  
    containerDespesa.removeChild(cadastroCarteira);
    botaoSalvar.removeEventListener('click');

    
}

const clickFecharCadastroCarteira = () =>{
  const containerDespesa = document.querySelector('.container-despesa');
  const cadastroCarteira = document.querySelector('.cadastro-carteira');
  containerDespesa.removeChild(cadastroCarteira);
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
  
  const textData = criarSpan('13/08', 'text-data-lista');

  const conta = document.createElement('div');
  conta.classList.add('conta');

  const iconeConta = document.createElement('div');
  iconeConta.classList.add('icone-conta');

  const boxTextConta = document.createElement('div');
  boxTextConta.classList.add('box-text-conta');

  const wrapTipoConta = document.createElement('div');
  wrapTipoConta.classList.add('wrap-tipo-conta');
  wrapTipoConta.classList.add('wrap-text-conta');

  const textTipoConta = criarSpan('Tipo', 'all-text-conta', 'text-bold');

  const textConta = criarSpan('Conta', 'all-text-conta');

  const wrapStatusPagamento = document.createElement('div');
  wrapStatusPagamento.classList.add('wrap-status-pagamento');
  wrapStatusPagamento.classList.add('wrap-text-conta');

  const textValorConta = criarSpan( 'R$ -100,00','all-text-conta','text-bold' )
  const textStatusConta =  criarSpan( 'Pago!','all-text-conta')


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





// const icon = (type) =>{
//   const iconType = document.createElement('img')
//   iconType.setAttribute('src', `./${type}.png`)
//   return iconType;
// } 



// const styledIcon = (type) => {
//   const styledIconFrame = document.createElement('div')
//   styledIconFrame.classList.add(`styled${type}`)

//   const icone = icon(type)
//   styledIconFrame.apprendChild(icone)

//   return styledIconFrame;
// }


