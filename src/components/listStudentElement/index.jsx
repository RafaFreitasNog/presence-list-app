import { Fragment } from "react";
import './style.css'

function StudentElement(props) {
    return (
        <Fragment>
            <div id="listElement">
                <h2 id="name">{props.name}</h2>
            </div>
        </Fragment>
    )
}

export default StudentElement;