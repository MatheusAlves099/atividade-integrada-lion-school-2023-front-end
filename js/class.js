'use strict'

import { loadCard } from "./homeAPI.js"
import { showAlunos } from "./homeAPI.js";

const cards = await loadCard();
const alunos = await showAlunos();

const createCardAlunos = (card) => {
    const titleCourse = document.createElement('h4')
    titleCourse.classList.add('title-course')
    titleCourse.textContent = card.cursos.nome

    const containerCard = document.createElement('div')
    containerCard.classList.add('containerCard')

    if (card.status == 'Cursando') {
        card.classList.add('cardStudentStudying')
    } else {
        card.classList.add('cardStudentFinish')
    }

    const imgStudent = document.createElement('img')
    imgStudent.classList.add('imgStudent')
    imgStudent.src = `./${card.icone}`

    const nameStudent = document.createElement('p')
    nameStudent.classList.add('nameStudent')
    nameStudent.textContent = card.nome

    titleCourse.append()
    containerCard.append(imgStudent, nameStudent)

    return titleCourse,
        containerCard
}

const loadCardsAlunos = () => {
    const listStudents = document.getElementById('containerCard')
    const listaAlunos = alunos.curso.map(createCardAlunos)

    listStudents.replaceChildren(...listaAlunos)
}

loadCardsAlunos()