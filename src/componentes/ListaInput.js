import React, { Component } from "react";

export default class ListaInput extends Component {
  render() {
    const { item, MudarItem, SubmitItem, editarItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={SubmitItem}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="adicionar item"
              value={item}
              onChange={MudarItem}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editarItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
          >
            {editarItem ? "editar item" : "adicionar item"}
          </button>
        </form>
      </div>
    );
  }
}
