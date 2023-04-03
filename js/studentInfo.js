'use strict'

//import { showAlunosCurso } from "./homeAPI.js";
import { showAlunosMatricula } from "./homeAPI.js";
//import { aluna } from "../resources/debora.js";

//console.log(alunosMatricula)

const showAlunosMatriculas = await showAlunosMatricula();

const createCardAluno = (aluno) => {
    console.log('uiiui');

    // const cardContainer = document.createElement('div')
    // cardContainer.classList.add('cardsContainer')

    const containerCard = document.createElement('div')
    containerCard.classList.add('cardStudent')

    const imgStudent = document.createElement('img')
    imgStudent.classList.add('imgStudent')
    imgStudent.src = `${aluno.foto}`

    const nameStudent = document.createElement('p')
    nameStudent.classList.add('nameStudent')
    nameStudent.textContent = aluno.nome
    
    //cardContainer.append(containerCard)
    containerCard.append(imgStudent, nameStudent)

    return containerCard
}
const createCardGrafico = () => {

    console.log('entrei rapaz');

    const cardNotes = document.createElement('div')
    cardNotes.classList.add('cardNotes')

    const disciplineContainer = document.createElement('div')
    disciplineContainer.classList.add('disciplineContainer')

    const disciplineBar = document.createElement('div')
    disciplineBar.classList.add('disciplineBar')

    const nameDisciplineContainer = document.createElement('div')
    nameDisciplineContainer.classList.add('nameDisciplineContainer')

    showAlunosMatriculas.curso[0].disciplinas.forEach(disciplina => {

        const numerosGrafico = document.createElement('span')
        numerosGrafico.classList.add()
        numerosGrafico.textContent = disciplina.media

        disciplineContainer.append(numerosGrafico)

        const disciplinesBar = document.createElement('div')
        disciplinesBar.classList.add('disciplinesBar')

        const valor = document.createElement('div')
        valor.classList.add('bar')

          setTimeout(() => {
            valor.style.height = disciplina.media + '%'
        }, 100);

        if (disciplina.media < 50) {
            valor.classList.add('barra-vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            valor.classList.add('barra-amarelo')
        }

        disciplineBar.append(disciplinesBar)
        disciplinesBar.append(valor)

        const disciplinas = document.createElement('span')
        disciplinas.classList.add()
        disciplinas.textContent = disciplina.sigla

        nameDisciplineContainer.append(disciplinas)

        if (disciplina.media < 50) {
            numerosGrafico.classList.add('numeroNome-Vermelho')
            disciplinas.classList.add('numeroNome-Vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            numerosGrafico.classList.add('numeroNome-Amarelo')
            disciplinas.classList.add('numeroNome-Amarelo')
        }

    })

    cardNotes.append(disciplineContainer)
    cardNotes.append(disciplineBar)
    cardNotes.append(nameDisciplineContainer)

    return cardNotes
}

const loadCardAluno = () => {
    const cardAlunos = document.getElementById('cardsContainer')
    //Sconsole.log(aluna.map(createCardAluno));
    const listaAlunos = createCardAluno(showAlunosMatriculas)
    const containerGrafico = createCardGrafico(showAlunosMatriculas)


    cardAlunos.append(listaAlunos, containerGrafico)
    
}
loadCardAluno()
console.log('teste')