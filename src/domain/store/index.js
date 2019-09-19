const carteira1 = {
  _id: 55,
  banco: "Itau",
  nomePessoa: "Marcos",
  valor: (Math.random() * 1000).toFixed(2)
};
const carteira2 = {
  _id: Math.random() * 99,
  banco: "Nubank",
  nomePessoa: "Raul",
  valor: (Math.random() * 1000).toFixed(2)
};
const carteira3 = {
  _id: Math.random() * 99,
  banco: "Bradesco",
  nomePessoa: "Sabrina",
  valor: (Math.random() * 1000).toFixed(2)
};

class Store {
  state = {
    carteiras: [carteira1, carteira2, carteira3],
    dashBoard: []
  };

  getCarteiras() {
    return { ...this.state.carteiras };
  }
  getTitulo({ id }) {
    this.state.carteiras.forEach(carteira => {
      const { banco } = carteira;
      if (id == carteira.id) banco;
    });
  }
}

const store = new Store();

export default store;
