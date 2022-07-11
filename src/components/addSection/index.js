import { Fragment } from "react";

function AddPresenceHeader() {
    return (
        <Fragment>
            <h1 id="title">Lista de Presença</h1>
            <input placeholder="Digite o nome do aluno..."></input>
            <button id="addButton">Adicionar</button>
        </Fragment>
    )
}

export default AddPresenceHeader