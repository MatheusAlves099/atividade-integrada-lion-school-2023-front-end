'use strict'

import { loadCard } from "./homeAPI.js"
import { showAlunos } from "./homeAPI.js";
import { showAlunosStatus } from "./homeAPI.js";

const cards = await loadCard();
const alunosAPI = await showAlunos();
const alunosStatus = await showAlunosStatus();

const curso = localStorage.getItem('curso')
console.log(curso)

const createCardAlunos = (aluno) => {
    const titleCourse = document.createElement('h4')
    titleCourse.classList.add('title-course')
    titleCourse.textContent = aluno.nome

    const containerCard = document.createElement('div')
    containerCard.classList.add('containerCard')

    const cardStudying = document.createElement('div')
    cardStudying.classList.add('cardStudentStudying')

    const cardFinish = document.createElement('div')
    cardFinish.classList.add('cardStudentFinish')

    // if (aluno.status == 'Cursando') {
    //     aluno.classList.add('cardStudentStudying')
    // } else {
    //     aluno.classList.add('cardStudentFinish')
    // }

    const imgStudent = document.createElement('img')
    imgStudent.classList.add('imgStudent')
    imgStudent.src = `${aluno.foto}`

    const nameStudent = document.createElement('p')
    nameStudent.classList.add('nameStudent')
    nameStudent.textContent = aluno.nome.toUpperCase()
    
    containerCard.append(cardStudying, cardFinish)
    cardStudying.append(imgStudent, nameStudent)  
    cardFinish.append(imgStudent, nameStudent)

    return containerCard
}

const loadCardsAlunos = () => {
    const listCourses = document.getElementById('containerCard')
    const listaAlunos = alunosAPI.alunos.map(createCardAlunos)

    listCourses.replaceChildren(...listaAlunos)
}

loadCardsAlunos()