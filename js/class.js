'use strict'

import { showAlunosCurso } from "./homeAPI.js";
import { showAlunosStatus } from "./homeAPI.js";
// import { showAlunosStatus } from "./homeAPI.js"

// const cards = await loadCard();
 //const alunosAPI = await showAlunosStatus();
const alunosCurso = await showAlunosCurso();

const loadTitle = (aluno) => {

    const titleContainer = document.getElementById('titulo') 

    const nomeTitulo = document.createElement('h2')
    nomeTitulo.classList.add()
    nomeTitulo.textContent = aluno.nomeCurso

    titleContainer.append(nomeTitulo)
}

const createCardAlunos = (aluno) => {
    const matriculaAluno = document.createElement('span')
    matriculaAluno.classList.add('matricula')
    matriculaAluno.textContent = aluno.matricula

    const containerCard = document.createElement('a')
    containerCard.classList.add('containerCard')
    containerCard.setAttribute('href', 'http://127.0.0.1:5500/html/studentInfo.html')
    containerCard.addEventListener('click', () => {
        localStorage.setItem('matricula', matriculaAluno.textContent)
    })

    if (aluno.status == 'Cursando') {
        containerCard.classList.add('cardStudentStudying')
    } else {
        containerCard.classList.add('cardStudentFinish')
    }

    const imgStudent = document.createElement('img')
    imgStudent.classList.add('imgStudent')
    imgStudent.src = `${aluno.foto}`

    const nameStudent = document.createElement('p')
    nameStudent.classList.add('nameStudent')
    nameStudent.textContent = aluno.nome.toUpperCase()
    
    containerCard.append(imgStudent, nameStudent)

    return containerCard
}

const cursandoFinalizado = () => {
    const buttons = document.querySelectorAll('.card-')

    buttons.forEach(button => {
        button.addEventListener('click', async () => {

            const idClicado = button.id
            const retorna = await showAlunosStatus(idClicado)
            const cardJson = retorna.alunos.map(createCardAlunos)
            const listCourses = document.getElementById('containerCard')
            listCourses.replaceChildren(...cardJson)
            console.log(await showAlunosStatus(idClicado));
        })
    })
}

const loadCardsAlunos = () => {
    const listCourses = document.getElementById('containerCard')
    const listaAlunos = alunosCurso.alunos.map(createCardAlunos)

    listCourses.replaceChildren(...listaAlunos)
}

cursandoFinalizado()
loadCardsAlunos()
loadTitle(alunosCurso)