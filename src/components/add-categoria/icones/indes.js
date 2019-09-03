import CriarBoxIcone from "../../shared/criar-box-icone/index.js";
import CriarElemento from "../../shared/criar-elemento/index.js";

const Icone = {
  build: ({ cor = 'var(--primary)', icone }) => {
      const boxIconeAdd = CriarBoxIcone(cor, 'box-carteira-add');
      const iconeCategoriaAdd = CriarElemento({ tipoElemento: 'i', icone: icone, classes: ['icone-carteira-add'] })

      boxIconeAdd.appendChild(iconeCategoriaAdd);

      return boxIconeAdd;
  },
  remove: () =>{
    const boxIconeAdd = document.querySelector('.box-carteira-add');
    boxIconeAdd && boxIconeAdd.remove();
  }
}



export default Icone; 