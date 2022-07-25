import { Fragment } from "react";
import './style.css'

function StudentElement(props) {
    return (
        <Fragment>
            <div id="grid-conteiner">
                <div id="grid-item1">
                    <button id="delete-button" onClick={props.handleRemoveStudent}>-</button>
                </div>
                <div id="grid-item2">
                    <h2 id="name">{props.name}</h2>
                    <h2 id="time">{props.time}</h2>
                </div>
            </div>
        </Fragment>
    )
}

export default StudentElement;