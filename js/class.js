'use strict'

import { showAlunosCurso } from "./homeAPI.js";
import { showAlunosStatus } from "./homeAPI.js";

const studentCourse = await showAlunosCurso();
var state;

const loadTitle = (aluno) => {

    const titleContainer = document.getElementById('title')

    const titleName = document.createElement('h2')
    titleName.classList.add()
    titleName.textContent = aluno.nomeCurso

    titleContainer.append(titleName)
}

const createCardStudent = (aluno) => {
    const matriculaAluno = document.createElement('span')
    matriculaAluno.classList.add('matricula')
    matriculaAluno.textContent = aluno.matricula

    const containerCard = document.createElement('a')
    containerCard.classList.add('containerCard')
    containerCard.setAttribute('href', '../html/studentInfo.html')
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

const studyingAndFinished = () => {
    const buttons = document.querySelectorAll('.card-')

    buttons.forEach(button => {
        button.addEventListener('click', async () => {

            const idClicked = button.id
            if (button.id == "status") {
                loadCardsAlunos()
            } else {
                const returns = await showAlunosStatus(idClicked)
                const cardJSON = returns.alunos.map(createCardStudent)
                const listCourses = document.getElementById('containerCard')
                listCourses.replaceChildren(...cardJSON)
            }
            state = idClicked
        })
    })
}

const getYearConclusion = (alunos) => {
    let years = []

    alunos.forEach(aluno => {
        years.push(aluno.curso[0].conclusao)
    })

    let conclusionYears = years.filter((este, i) => years.indexOf(este) === i)
    return conclusionYears.sort()
}

const years = getYearConclusion(studentCourse.alunos)

const conclusionYear = async (year) => {
    const studentJSON = {}
    const arrayStudent = []

    studentCourse.alunos.forEach(aluno => {
        if (aluno.curso[0].conclusao == year) {
            arrayStudent.push(aluno)
        }
    })
    studentJSON.alunos = arrayStudent
    return studentJSON
}

const createCardYear = (years) => {
    const container = document.getElementById('dropdownYearContent')
    years.forEach(year => {
        const card = document.createElement('a')
        card.id = `${year}`
        card.innerHTML = year
        card.addEventListener('click', async () => {
            const returns = await conclusionYear(year)
            const cardJSON = returns.alunos.map(createCardStudent)
            const card = document.getElementById('containerCard')
            card.replaceChildren(...cardJSON)
        })
        container.append(card)
    })
}

const loadCardStudents = () => {
    const listCourses = document.getElementById('containerCard')
    const listStudents = studentCourse.alunos.map(createCardStudent)

    listCourses.replaceChildren(...listStudents)
}

createCardYear(years)
studyingAndFinished()
loadCardStudents()
loadTitle(studentCourse)