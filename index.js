const botaoAdd = document.querySelector(".imagem-add");
const container = document.querySelector(".container");
const $botaoDiscador = document.querySelector('botao-discador');

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
        console.log(e.target.classList)
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

    cabecalho.appendChild(receita);
    cabecalho.appendChild(despesa);
    cabecalho.appendChild(trasnferencia);
}

$botaoDiscador.addEventListener('click', e =>{

    criarPaginaDespesa();
})

