'use strict'

import { loadCard } from "./homeAPI.js"
import { showAlunos } from "./homeAPI.js";

const cards = await loadCard();
const alunos = await showAlunos();

const exitWindow = () => {
    const buttonExit = document.getElementById('buttonExit')
    buttonExit.onclick = function () {
        window.open()
        window.close()
    }
}

const createCard = (card) => {
    const courseButtons = document.createElement('div')
    courseButtons.classList.add('buttonsCourse')

    const containerCourse = document.createElement('a')
    containerCourse.classList.add('course-container')
    containerCourse.setAttribute('href', 'http://127.0.0.1:5500/html/class.html')

    const courseInfo = document.createElement('div')
    courseInfo.classList.add('info-course')

    const imageCourse = document.createElement('img')
    imageCourse.classList.add('img_course')
    imageCourse.src = `${card.icone}`

    const nameCourse = document.createElement('h1')
    nameCourse.classList.add('course-text')
    nameCourse.textContent = card.sigla

    courseButtons.append(containerCourse)
    containerCourse.append(courseInfo)
    courseInfo.append(imageCourse, nameCourse)

    return courseButtons
}

const loadCards = () => {
    const listCourses = document.getElementById('buttonsCourse')
    const coursesList = cards.cursos.map(createCard)

    listCourses.replaceChildren(...coursesList)
}

loadCards()
exitWindow()