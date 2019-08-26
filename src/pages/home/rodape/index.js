import CriarDiv from "../../../components/shared/criar-div/index.js";
import CriarBotao from "../../../components/shared/criar-botao/index.js";
import CriarIcone from "../../../components/shared/criar-icone/index.js";
import Discador from "../../../components/discador/index.js";
import CriarI from "../../../components/shared/criar-i/index.js";

const Rodape = ({valorDiscador, carteira, dashBoard}) =>{
    const container = document.querySelector('.container');
    const boxRodape = CriarDiv('rodape');
    const botaoAdd = CriarBotao('', 'button-add');
    const wrapBoxEsquerda = CriarDiv('wrap-div-left');
    const wrapBoxDireita = CriarDiv('wrap-div-right');
    const imagemAdd = CriarIcone('add (2).png','', 'imagem-add');
    // const icone1 = CriarIcone('house.png','home', 'icones', 'icone-1')
    const icone1 = CriarI({icone: 'fa-home'});
    const icone2 = CriarI({icone: 'fa-chart-line'})
    const icone3 = CriarI({icone: 'fa-user-friends'})
    const icone4 = CriarI({icone: 'fa-cog'});  

    boxRodape.appendChild(wrapBoxEsquerda);
    boxRodape.appendChild(botaoAdd);
    boxRodape.appendChild(wrapBoxDireita);
    botaoAdd.appendChild(imagemAdd);
    wrapBoxEsquerda.appendChild(icone1);
    wrapBoxEsquerda.appendChild(icone2);
    wrapBoxDireita.appendChild(icone3);
    wrapBoxDireita.appendChild(icone4);

    botaoAdd.addEventListener("click", e => {
        console.log(carteira);
        
        Discador({valorDiscador, carteira, botaoAdd, dashBoard});
    });

    icone1.addEventListener('click', () => {
        const containerDiscador = document.querySelector('.container-discador');
        const containerDespesa = document.querySelector('.container-despesa');
        const containerLista = document.querySelector('.container-lista');
      
        containerDespesa && container.removeChild(containerDespesa);
        containerDiscador && container.removeChild(containerDiscador);
        containerLista && container.removeChild(containerLista);
      })

    container.appendChild(boxRodape);
}

export default Rodape;