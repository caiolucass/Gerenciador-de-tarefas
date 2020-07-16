import React, { Component } from "react";

export default class ListaItem extends Component {
  render() {
    const { titulo, DeletarItem, EditarItem } = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{titulo}</h6>
        <div className="lista-icone">
          <span className="mx-2 text-success" onClick={EditarItem}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={DeletarItem}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
