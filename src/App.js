import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ListaInput from "./componentes/ListaInput.js";
import Lista from "./componentes/Lista.js";

/*Estado dos items da lista*/
class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editarItem: false,
  };

  /*Mudar item da lista */
  MudarItem = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  /*Postar item da lista */
  SubmitItem = (e) => {
    e.preventDefault();
    const novoItem = {
      id: this.state.id,
      titulo: this.state.item,
    };
    //juntar os antigos itens com os novos itens
    const atualizarItems = [...this.state.items, novoItem];

    this.setState({
      items: atualizarItems,
      item: "",
      id: uuidv4(),
      editarItem: false,
    });
  };

  /*Limpar item da lista */
  LimparLista = () => {
    this.setState({
      items: [],
    });
  };

  /*Deletar item da lista */
  DeletarItem = (id) => {
    //retornar o array com itens que nao tem o mesmo id
    const FiltrarItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: FiltrarItem,
    });
  };

  /*Editar item da lista */
  Editar = (id) => {
    //retornar o array com itens que nao tem o mesmo id
    const FiltrarItem = this.state.items.filter((item) => item.id !== id);
    const ItemSelecionado = this.state.items.find((item) => item.id === id);
    this.setState({
      items: FiltrarItem,
      item: ItemSelecionado.titulo,
      id: id,
      editarItem: true,
    });
  };

  /*Renderizar a lista e seus itens na tela */
  render() {
    /*Retornar os inputs e a lista na tela */
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">lista de tarefas</h3>
            <ListaInput
              item={this.state.item}
              MudarItem={this.MudarItem}
              SubmitItem={this.SubmitItem}
              editarItem={this.state.editarItem}
            />
            <Lista
              items={this.state.items}
              LimparLista={this.LimparLista}
              DeletarItem={this.DeletarItem}
              Editar={this.Editar}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
