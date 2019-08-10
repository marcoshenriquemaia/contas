const CriarBotao = (conteudo, ...classe) => {
    const botao = document.createElement("button");
    [...classe].map(item => botao.classList.add(item));
    botao.textContent = conteudo;
  
    return botao;
  };

export default CriarBotao;