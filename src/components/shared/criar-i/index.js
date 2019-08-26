const CriarI = ({classes = [], icone}) =>{
    const element = document.createElement('i');
    element.classList.add('fas');
    element.classList.add('icones');
    classes.map(classe =>{
        element.classList.add(classe);
    })
    element.classList.add(icone);
    
    return element;
}

export default CriarI;