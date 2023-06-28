import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {

    constructor() {
        super();
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(`Titulo: ` + this.titulo `Texto: ` + this.texto);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
