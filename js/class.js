'use strict'

import { showAlunosCurso } from "./homeAPI.js";

// const cards = await loadCard();
// const alunosAPI = await showAlunos();
const alunosCurso = await showAlunosCurso();

const loadTitle = (aluno) => {

    const pai = document.getElementById('titulo') 

    const nomeTitulo = document.createElement('h2')
    nomeTitulo.classList.add()
    nomeTitulo.textContent = aluno.nomeCurso
    // console.log(aluno.NomeCurso);

    pai.append(nomeTitulo)
    
}

const createCardAlunos = (aluno) => {

    const dropdownContainer = document.createElement('div')
    dropdownContainer.classList.add('dropdownContainer')

    const dropdownButton = document.createElement('button')
    dropdownButton.classList.add('dropdownButton')

    const dropdownContent = document.createElement('div')
    dropdownContent.classList.add('dropdownContent')

    const finalizadoStatus = document.createElement('a')
    finalizadoStatus.classList.add('finalizado')

    const cursandoStatus = document.createElement('a')
    cursandoStatus.classList.add('cursando')

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

    // dropdownContainer.append()
    // dropdownContainer.append(dropdownButton, dropdownContent)
    // dropdownContent.append(cursandoStatus, finalizadoStatus)
    
    containerCard.append(imgStudent, nameStudent)

    return containerCard
}

const loadCardsAlunos = () => {
    const listCourses = document.getElementById('containerCard')
    const listaAlunos = alunosCurso.alunos.map(createCardAlunos)

    listCourses.replaceChildren(...listaAlunos)
}

// const loadTitle = () => {
//     const courseTitle = document.getElementById('containerCard')
//     const listaAlunosCurso = alunosCurso.alunos.curso.map(createCardAlunos)

//     courseTitle.replaceChildren(...listaAlunosCurso)
// }

loadCardsAlunos()
loadTitle(alunosCurso)