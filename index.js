const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const icone4 = document.querySelector('.icone-4');

const carteira = [];

// Criadores de elementos v

const criarDiv = (...classe) =>{
  const elemento = document.createElement('div');

  [...classe].map(item => elemento.classList.add(item))
  
  return elemento;
}

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

  const criarH2 = (conteudo, ...classe) =>{
    const elemento = document.createElement('h2');
    elemento.textContent = conteudo;
    classe[1] ? classe.map(item => elemento.classList.add(item))
     : elemento.classList.add(classe);
  
    return elemento; 
    }

  const criarInput = (tipo, placeholder, id, ...classe) =>{
  const elemento = document.createElement('input');
  elemento.setAttribute('type', tipo);
  elemento.setAttribute('placeholder', placeholder);
  elemento.setAttribute('id', id);
  [...classe].map(item => elemento.classList.add(item));

  return elemento; 
}

const criarLabel = (text, nameInput,...classe) =>{
  const elemento = document.createElement('label');

  elemento.setAttribute('for', nameInput);
  elemento.textContent = text;
  [...classe].map(item => elemento.classList.add(item));

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

  const botaoContinuar = criarBotao('Continuar', 'botao-discador');


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
  const discador = criarDiv('discador')

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

    const boxTotal = criarDiv('box-total');

    const excluirTotal = criarImagem('delete (1).png', 'Voltar', 'botao-excluir');

    // const cifrao = criarSpan('R$', 'cifrao');

    const valorTotal = criarSpan(valorDiscador, 'valor-total');

    const wrapBoxCarteira = criarDiv('wrap-box-carteira');

    const boxCarteira = criarDiv('box-carteira');

    const boxIcone = criarDiv('box-icone-carteira');

    const iconeCarteira = criarImagem('bill.png', 'Icone da Carteira', 'icone-carteira');

    const wrapCarteiraNome = criarDiv('wrap-carteira-nome');

    const textCarteira = criarSpan('Carteira', 'text-carteira');

    const textNome = criarSpan('Nome', 'text-nome');

    const textValor = criarSpan('R$ 100.000,00', 'text-valor');

    const boxCarteiraAdd = criarDiv('box-carteira');

    const boxIconeAdd = criarDiv('box-icone-carteira');
    
    const iconeCarteiraAdd = criarImagem('bill.png', 'Botao Adicionar Carteira', 'icone-carteira');

    const wrapCarteiraNomeAdd = criarDiv('wrap-carteira-nome')

    const textCarteiraAdd = criarSpan('Carteira', 'text-carteira');

    const textNomeAdd = criarSpan('Nome', 'text-nome');

    const botaoAdd = criarBotao('+', 'add-carteira');

    const dataDespesa = criarDiv('data');

    const textData = criarSpan('Data', 'text-data');

    const campoData = criarInput('date', '','campo-data', 'campo-data');

    const boxParcelas = criarDiv('parcelas');

    const textParcelas = criarSpan('Parcelas', 'text-parcelas');

    const campoParcelas = criarDiv('campo-parcelas');

    const textQuantidadeParcelas = criarSpan('1 vez', 'text-quantidade-parcelas');

    const wrapCheckboxParcelas = criarDiv('wrap-checkbox-parcelas')

    const checkboxParcelas = criarDiv('checkbox-parcelas');

    const textCheckboxParcelas = criarSpan('Dividir-valor', 'text-checkbox-parcelas');

    const campoTags = criarDiv('campo-tags');

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
    
    const cadastroCarteira = criarDiv('cadastro-carteira'); 
    
    const boxIconeCarteira = criarDiv('box-icone-carteira', 'icone-cadastro-carteira');
    
    const iconeCadastroCarteira = criarImagem('add.png', 'Escolher icone carteira', 'icone-carteira');
    
    const textTipoCarteira = criarLabel('Tipo de carteira', 'campo-text-tipo-carteira', 'text-cadastro-carteira');
    
    const textNomeCarteira = criarLabel('Nome da carteira', 'campo-text-nome-carteira', 'text-cadastro-carteira');

    const textValorCarteira = criarLabel('Valor', 'campo-text-valor-carteira', 'text-cadastro-carteira' );
    
    const campoTipo = criarInput('text', 'Tipo','campo-text-tipo-carteira', 'campo-text-tipo-carteira', 'campo-cadastro-carteira');
    
    const campoNome = criarInput('text', 'Nome','campo-text-nome-carteira', 'campo-text-nome-carteira', 'campo-cadastro-carteira');

    const campoValor = criarInput('text', 'Valor','campo-text-valor-carteira', 'campo-text-valor-carteira', 'campo-cadastro-carteira');
    
    const botaoSalvar = criarBotao('Salvar', 'botao-salvar-cadastro-carteira');
    
    const fechar = criarImagem('delete (2).png', 'Fechar imagem', 'fechar-cadastro-carteira');
    
    cadastroCarteira.appendChild(boxIconeCarteira);
    cadastroCarteira.appendChild(textTipoCarteira);
    cadastroCarteira.appendChild(campoTipo);
    cadastroCarteira.appendChild(textNomeCarteira);
    cadastroCarteira.appendChild(campoNome);
    cadastroCarteira.appendChild(textValorCarteira);
    cadastroCarteira.appendChild(campoValor);
    cadastroCarteira.appendChild(botaoSalvar);
    cadastroCarteira.appendChild(fechar);
    boxIconeCarteira.appendChild(iconeCadastroCarteira);
    
    containerDespesa.appendChild(cadastroCarteira);
    
    botaoSalvar.addEventListener('click', clickBotaoSalvar);
    fechar.addEventListener('click', clickFecharCadastroCarteira);
  }
  
const clickBotaoSalvar = () =>{
    const campoTipo = document.querySelector('.campo-text-tipo-carteira');
    const campoNome = document.querySelector('.campo-text-nome-carteira');
    const campoValor = document.querySelector('.campo-text-valor-carteira');
    const containerDespesa = document.querySelector('.container-despesa');
    const cadastroCarteira = document.querySelector('.cadastro-carteira');
    const wrapBoxCarteira = document.querySelector('.wrap-box-carteira');

    carteira.push({'tipo': campoTipo.value, "nome": campoNome.value, 'valor': campoValor.value});

    const boxCarteira = criarDiv('box-carteira');

    const boxIcone = criarDiv('box-icone-carteira');
    
    const iconeCarteira = criarImagem('bill.png', 'Icone da Carteira', 'icone-carteira');

    const wrapCarteiraNome = criarDiv('wrap-carteira-nome');

    const textCarteira = criarSpan(carteira[carteira.length -1].tipo, 'text-carteira');

    const textNome = criarSpan(carteira[carteira.length -1].nome, 'text-nome');

    const textValor = criarSpan(`R$ ${carteira[carteira.length -1].valor}`, 'text-valor');

    wrapBoxCarteira.appendChild(boxCarteira);
    boxCarteira.appendChild(boxIcone);
    boxCarteira.appendChild(wrapCarteiraNome);
    boxCarteira.appendChild(textValor);
    boxIcone.appendChild(iconeCarteira);
    wrapCarteiraNome.appendChild(textCarteira);
    wrapCarteiraNome.appendChild(textNome);

    containerDespesa.removeChild(cadastroCarteira);

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

  const campoValores = criarSpan('R$ 100.000,00', 'campo-valores', 'valores');

  const iconeValor = criarImagem('bill.png', 'Icone valores', 'icones');

  const containerDataConta = criarDiv('container-data-conta');
  
  const textData = criarSpan('13/08', 'text-data-lista');

  const conta = criarDiv('conta');

  const iconeConta = criarDiv('icone-conta');

  const boxTextConta = criarDiv('box-text-conta')

  const wrapTipoConta = criarDiv('wrap-tipo-conta', 'wrap-text-conta');

  const textTipoConta = criarSpan('Tipo', 'all-text-conta', 'text-bold');

  const textConta = criarSpan('Conta', 'all-text-conta');

  const wrapStatusPagamento = criarDiv('wrap-status-pagamento', 'wrap-text-conta');

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

//Componentes carteiras

const criarBoxCarteira = () =>{
  const cadastroConta = document.querySelector('.cadastro-conta');

  const boxConta = criarDiv('box-conta'); 

  cadastroConta.appendChild(boxConta);
}

const criarWrapCarteiraNome = () =>{
  const boxConta = document.querySelector('.box-conta');
  
  const wrapCarteiraNome = criarDiv('wrap-carteira-nome');

  const textCarteira = criarSpan(carteira[length -1].tipo, 'text-carteira');

  const textNome = criarSpan(carteira[length -1].nome, 'text-nome');

  boxConta.appendChild(wrapCarteiraNome);
  wrapCarteiraNome.appendChild(textCarteira);
  wrapCarteiraNome.appendChild(textNome);
}

const criarValorCarteira = () =>{
  const boxConta = document.querySelector('.box-conta');

  const valorCarteira = criarSpan(carteira[length -1].valor, 'valor-carteira');

  boxConta.appendChild(valorCarteira);
}

const criarWrapMeta = () =>{
  const boxMetas = document.querySelector('.box-metas');

  const wrapMeta = criarDiv('wrap-metas');

  boxMetas.appendChild(wrapMeta);

}

const criarWrapBarraMeta = () =>{
  const wrapMeta = document.querySelector('wrap-meta');

  const wrapTituloBarra = criarDiv('wrap-titulo-barra');

  const titulo = criarH2('Reserva', 'text-nome-meta');

  const barra = criarDiv('barra-progresso');

  wrapMeta.appendChild(wrapTituloBarra);
  wrapTituloBarra.appendChild(titulo);
  wrapTituloBarra.appendChild(barra);
}

const criarValorMeta = () =>{
  const wrapMeta = document.querySelector('wrap-meta');

  const valorMeta = criarSpan('R$ 100.000,00', 'valor-meta');

  wrapMeta.appendChild(valorMeta);
}

//componentes contas
