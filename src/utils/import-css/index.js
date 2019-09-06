import CriarElemento from "../../components/shared/criar-elemento/index.js";

const ImportCss = ({path, page}) =>{
    const head = document.querySelector('head');
    const link = CriarElemento({tipoElemento: 'link'});
    link.rel = 'stylesheet'
    if (page) {
        link.href = `./src/pages/${page}/index.css`
    } else if (path){
        link.href = `./src/components/${path}/index.css`
    } else{
        link.href = `./src/assets/theme/style.css`
    }

    head.appendChild(link);
}

export default ImportCss;