import { Fragment, useState } from "react";
import './style.css'
import StudentElement from "../listStudentElement";

function Menu() {
    
    const [studentName, setStudentName] = useState();

    function handleButtonClick() {

    }

    return (
        <Fragment>
            <div id="conteiner1">
                <div id="addConteiner">
                    <h1 id="title">PRESENCE LIST</h1>

                    <input 
                    type="text" 
                    placeholder="   Digite o nome do aluno..." 
                    id="addInput"
                    onChange={e => setStudentName(e.target.value)}></input>

                    <button type="button" id="addButton">Add to the list</button>
                </div>

                <div id="listConteiner">
                    <StudentElement name={studentName}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Menu