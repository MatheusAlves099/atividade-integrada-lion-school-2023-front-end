'use strict'

import { loadCard } from "./homeAPI.js"

const cards = await loadCard();

const createCard = (card) => {
    const courseButtons = document.createElement('div')
    courseButtons.classList.add('buttonsCourse')

    const containerCourse = document.createElement('div')
    containerCourse.classList.add('course-container')

    const courseInfo = document.createElement('div')
    courseInfo.classList.add('info-course')

    const iconCourse = document.createElement('i')
    iconCourse.src = `./${card.icone}`

    const nameCourse = document.createElement('h1')
    nameCourse.classList.add('course-text')
    nameCourse.textContent = card.name

    courseButtons.append(containerCourse)
    containerCourse.append(courseInfo)
    courseInfo.append(iconCourse, nameCourse)

    return courseButtons
}

const loadCards = () => {
    const listCourses = document.getElementById('buttonsCourse')
    const coursesList = cards.map(createCard)

    listCourses.replaceChildren(...coursesList)
}

loadCards()