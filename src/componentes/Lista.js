import React, { Component } from "react";
import ListaItem from "./ListaItem";

export default class Lista extends Component {
  render() {
    const { items, LimparLista, DeletarItem, Editar } = this.props;

    /*retornar os itens da ListaItem na Lista*/
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">itens da lista</h3>
        {items.map((item) => {
          return (
            <ListaItem
              key={item.id}
              titulo={item.titulo}
              DeletarItem={() => DeletarItem(item.id)}
              Editar={() => Editar(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={LimparLista}
        >
          limpar lista
        </button>
      </ul>
    );
  }
}
