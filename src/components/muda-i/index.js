const MudaI = ({ icone }) =>{
    const element = document.querySelector('.icone-carteira-add')
    element.classList.remove(element.classList[3]);
    element.classList.add(icone);
}
export default MudaI;