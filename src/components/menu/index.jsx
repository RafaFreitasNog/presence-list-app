import { Fragment, useState } from "react";
import './style.css'
import StudentElement from "../listStudentElement";

function Menu() {
    
    const [studentName, setStudentName] = useState();
    const [studentList, setStudentList] = useState([]);

    function handleButtonClick() {
        const studentToAdd = {
            name: studentName,
            present: true,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        }

        setStudentList(prevState => [studentToAdd, ...prevState])
    }

    function handleRemoveStudent(deletedStudent) {
        console.log(deletedStudent)
        setStudentList(studentList.filter((element) => element.name !== deletedStudent))
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

                    <button 
                    type="button" 
                    id="addButton" 
                    onClick={handleButtonClick}
                    >Add to the list</button>
                </div>

                <div id="listConteiner">
                    {studentList.map((element)=>
                    <StudentElement 
                    key = {element.time}
                    name = {element.name} 
                    present = {element.present} 
                    time = {element.time} 
                    handleRemoveStudent = {() => handleRemoveStudent(element.name)}
                    />)}
                </div>
            </div>
        </Fragment>
    )
}

export default Menu