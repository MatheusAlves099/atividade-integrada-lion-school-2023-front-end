export const loadCard = async () => {
    const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const card = await response.json()

    return card
}

export const showAlunos = async () => {
    const url = `http://localhost:8080/v1/lion-school/alunos`
    const response = await fetch(url)
    const alunos = await response.json()

    return alunos

}

export const showAlunosCurso = async () => {
    const url = `http://localhost:8080/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const alunosCurso = await response.json()

    return alunosCurso
}

export const showAlunosMatricula = async () => {
    const url = `http://localhost:8080/v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const alunosMatricula = await response.json()

    return alunosMatricula

}

const curso = localStorage.getItem('curso')
const matricula = localStorage.getItem('matricula')