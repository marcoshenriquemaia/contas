const TextArea = (placeholder, ...classes) =>{
    const campoObs = document.createElement("textarea");
    campoObs.setAttribute("placeholder", placeholder);

    [...classes].map(classe =>{
        campoObs.classList.add(classe);
    })

    return campoObs;
}

export default TextArea;

