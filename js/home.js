'use strict'

import { loadCard } from "./homeAPI.js"

const cards = await loadCard();

const buttonClose = document.getElementById('buttonExit')
buttonClose.addEventListener('click', () => {
        alert('Você está deixando a página.')
        window.close()
})

const createCard = (card) => {
    const courseButtons = document.createElement('div')
    courseButtons.classList.add('buttonsCourse')

    const containerCourse = document.createElement('a')
    containerCourse.classList.add('course-container')
    containerCourse.setAttribute('href', '../html/class.html')

    const courseInfo = document.createElement('div')
    courseInfo.classList.add('info-course')

    const imageCourse = document.createElement('img')
    imageCourse.classList.add('img_course')
    imageCourse.src = `${card.icone}`
    imageCourse.alt = "Icones dos cursos"

    const nameCourse = document.createElement('h1')
    nameCourse.classList.add('course-text')
    nameCourse.textContent = card.sigla

    containerCourse.addEventListener('click', () => {
        localStorage.setItem('curso', nameCourse.textContent)
    })

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