import CriarDiv from "../../../components/shared/criar-div/index.js";
import CriarBotao from "../../../components/shared/criar-botao/index.js";
import CriarIcone from "../../../components/shared/criar-icone/index.js";
import Discador from "../../../components/discador/index.js";

const Rodape = (valorDiscador, carteira) =>{
    const container = document.querySelector('.container');
    const boxRodape = CriarDiv('rodape');
    const botaoAdd = CriarBotao('', 'button-add');
    const wrapBoxEsquerda = CriarDiv('wrap-div-left');
    const wrapBoxDireita = CriarDiv('wrap-div-right');
    const imagemAdd = CriarIcone('add (2).png','', 'imagem-add');
    const icone1 = CriarIcone('house.png','home', 'icones', 'icone-1')
    const icone2 = CriarIcone('bill.png','', 'icones', 'icone-2')
    const icone3 = CriarIcone('bill.png','', 'icones', 'icone-3')
    const icone4 = CriarIcone('bill.png','', 'icones', 'icone-4')

    boxRodape.appendChild(wrapBoxEsquerda);
    boxRodape.appendChild(botaoAdd);
    boxRodape.appendChild(wrapBoxDireita);
    botaoAdd.appendChild(imagemAdd);
    wrapBoxEsquerda.appendChild(icone1);
    wrapBoxEsquerda.appendChild(icone2);
    wrapBoxDireita.appendChild(icone3);
    wrapBoxDireita.appendChild(icone4);

    botaoAdd.addEventListener("click", e => {
        Discador(valorDiscador, carteira, botaoAdd);
    });

    icone1.addEventListener('click', () => {
        const containerDiscador = document.querySelector('.container-discador');
        const containerDespesa = document.querySelector('.container-despesa');
        const containerLista = document.querySelector('.container-lista');
      
        containerDespesa && container.removeChild(containerDespesa);
        containerDiscador && container.removeChild(containerDiscador);
        containerLista && container.removeChild(containerLista);
      })

    return boxRodape;
}

export default Rodape;