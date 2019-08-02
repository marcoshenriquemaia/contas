const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const icone4 = document.querySelector('.icone-4');

let $discador;
let $continuarDiscador;

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

  $discador = [...document.querySelectorAll('.numero-discador')];
  $continuarDiscador = document.querySelector('.botao-discador');
};

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
        console.log($continuarDiscador)
        criarPaginaDespesa();

    };
})

const criarPaginaDespesa = () =>{   
    const containerDespesa = document.createElement("section");
    containerDespesa.classList.add("container-discador");
  
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

    const valorTotal = document.createElement('span');
    valorTotal.classList.add('valor-total');

    const boxCarteira = document.createElement('div');
    boxCarteira.classList.add('box-carteira');

    const boxIcone = document.createElement('div');
    boxIcone.classList.add('box-icone-despesa');
    
    const iconeCarteira = document.createElement('img');
    iconeCarteira.setAttribute('src', 'bill.png')
    iconeCarteira.classList.add('icone-carteira');

    const wrapCarteiraNome = document.createElement('div');
    wrapCarteiraNome.classList.add('wrap-carteira-nome');

    const textCarteira = document.createElement('span');
    textCarteira.classList.add('text-carteira');

    const textNome = document.createElement('span');
    textNome.classList.add('text-nome');

    const textValor = document.createElement('span');
    textValor.classList.add('text-valor');


    container.appendChild(containerDespesa);
    containerDespesa.appendChild(boxTotal);
    containerDespesa.appendChild(boxCarteira);
    boxCarteira.appendChild(boxIcone);
    boxCarteira.appendChild(textValor);
    boxCarteira.appendChild(boxIcone);
    boxCarteira.appendChild(wrapCarteiraNome);
    wrapCarteiraNome.appendChild(textCarteira);
    wrapCarteiraNome.appendChild(textNome);
    boxIcone.appendChild(iconeCarteira);
    boxTotal.appendChild(valorTotal);
    boxTotal.appendChild(excluirTotal);
    containerDespesa.appendChild(cabecalho);
    cabecalho.appendChild(receita);
    cabecalho.appendChild(despesa);
    cabecalho.appendChild(trasnferencia);
}

icone4.addEventListener('click', e=>{
    console.log('a');
    criarPaginaDespesa();
})

