import CriarIcone from "../shared/criar-icone/index.js";

const MudaIcone = (icone, pai, classeGeral, classe) =>{
    const boxIconeAdd = document.querySelector(`.${pai}`);
    const iconeAntigo = document.querySelector(`.${classe}`);

    boxIconeAdd.removeChild(iconeAntigo);
    const iconeNovo = CriarIcone(icone, 'icone',classeGeral, classe);
    boxIconeAdd.appendChild(iconeNovo);
}

export default MudaIcone;