import CriarElemento from "../../components/shared/criar-elemento/index.js";

const ImportCss = ({path}) =>{
    const head = document.querySelector('head');
    const link = CriarElemento({tipoElemento: 'link'});
    link.rel = 'stylesheet'
    link.href = path ? `./src/components/${path}/index.css` : `./src/assets/theme/style.css`;

    head.appendChild(link);
}

export default ImportCss;