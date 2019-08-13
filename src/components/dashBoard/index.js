const DashBoard = () =>{
    
const dashBoardItem = {
      _id: "7asd-fasdf789",
    valor: null,
    tipo: "",
    carteira: {
      nome: "",
      nomePessoa: "",
      valor: null
    },
    categoria: {
      principal: "",
      sub: ""
    },
    tags: [""],
    status: false,
    data: {
      dia: null,
      mes: null,
      ano: null
    },
    parcelado: {
      valorRestante: null,
      quantidadeParcela: null,
      parcelaAtual: {
        valor: null,
        numero: null,
        data: {
          dia: null,
          mes: null
        }
      },
      proximaParcela: {
        valor: null,
        numero: null,
        data: {
          dia: null,
          mes: null
        }
      }
    },
    obs: "",
    createdAt: new Date()
    } 
  
    return dashBoardItem;
}

export default DashBoard; 
  