'use strict'

//import { showAlunosCurso } from "./homeAPI.js";
//import { showAlunosMatricula } from "./homeAPI.js";
import { aluna } from "../resources/debora.js";

//console.log(alunosMatricula)

//const alunosCurso = await showAlunosMatricula('20151001014');

const createCardAluno = () => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cardsContainer')

    const containerCard = document.createElement('div')
    containerCard.classList.add('cardStudent')

    const imgStudent = document.createElement('img')
    imgStudent.classList.add('imgStudent')
    imgStudent.src = `${aluna.foto}`

    const nameStudent = document.createElement('p')
    nameStudent.classList.add('nameStudent')
    nameStudent.textContent = aluna.nome
    
    cardContainer.append(containerCard)
    containerCard.append(imgStudent, nameStudent)

    return containerCard
}

const loadCardAluno = () => {
    const cardAlunos = document.getElementById('cardsContainer')
    //Sconsole.log(aluna.map(createCardAluno));
    const listaAlunos = aluna.map(createCardAluno)

    cardAlunos.replaceChildren(...listaAlunos)
    
}
loadCardAluno()
console.log('teste')