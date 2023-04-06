'use strict'

import { showAlunosCurso } from "./homeAPI.js";
import { showAlunosStatus } from "./homeAPI.js";

const alunosCurso = await showAlunosCurso();
var estado;

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
    containerCard.setAttribute('href', '/html/studentInfo.html')
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
            if (button.id == "status") {
                loadCardsAlunos()
            } else {
                const retorna = await showAlunosStatus(idClicado)
                const cardJson = retorna.alunos.map(createCardAlunos)
                const listCourses = document.getElementById('containerCard')
                listCourses.replaceChildren(...cardJson)
                console.log(await showAlunosStatus(idClicado));
            }
            estado = idClicado
            console.log(estado);
        })
    })
}
const getAnoConclusao = (alunos) => {
    let anos = []

    alunos.forEach(aluno => {
        anos.push(aluno.curso[0].conclusao)
    })

    let anosConclusao = anos.filter((este, i) => anos.indexOf(este) === i)
    return anosConclusao.sort()
}
const anos = getAnoConclusao(alunosCurso.alunos)

const anoConc = async (ano) => {
    const alunoJson = {}
    const arrayAluno = []

    alunosCurso.aluno.forEach(aluno => {
        if (aluno.curso[0].conclusao == ano) {
            arrayAluno.push(aluno)
        }
    })
    alunoJson.alunos = arrayAluno
    return alunoJson
}
const createCardAno = (anos) => {
    const pai = document.createElement('dropdownButtonYear')
    anos.forEach(ano => {
        const card = document.createElement('a')
        card.id = `${ano}`
        card.innerHTML = ano
        card.addEventListener('click', async () => {
            const retorna = await anoConc(ano)
            const cardJson = retorna.alunos.map(createCardAlunos)
            const listCourses = document.getElementById('containerCard')
            listCourses.replaceChildren(...cardJson)
        })
        pai.append(card)
    })
}


const loadCardsAlunos = () => {
    const listCourses = document.getElementById('containerCard')
    const listaAlunos = alunosCurso.alunos.map(createCardAlunos)

    listCourses.replaceChildren(...listaAlunos)
}

createCardAno(anos)
cursandoFinalizado()
loadCardsAlunos()
loadTitle(alunosCurso)