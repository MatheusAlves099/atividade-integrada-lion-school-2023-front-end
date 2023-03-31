'use strict'

import { showAlunosCurso } from "./homeAPI.js";

const alunosCurso = await showAlunosCurso();

const createCardAluno = () => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cardsContainer')

    const containerCard = document.createElement('div')
    containerCard.classList.add('cardStudent')

    const imgStudent = document.createElement('img')
    imgStudent.classList.add('imgStudent')
    imgStudent.src = `${alunosCurso.alunos.foto}`

    const nameStudent = document.createElement('p')
    nameStudent.classList.add('nameStudent')
    nameStudent.textContent = alunosCurso.alunos.nome
    
    cardContainer.append(containerCard)
    containerCard.append(imgStudent, nameStudent)

    return cardContainer
}

const loadCardAluno = () => {
    const cardAlunos = document.getElementById('cardsContainer')
    const listaAlunos = createCardAluno()

    cardAlunos.append(listaAlunos)
}

loadCardAluno()