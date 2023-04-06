export const loadCard = async () => {
    const url = `https://lion-school-2023.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const card = await response.json()

    return card
}

export const showAlunos = async () => {
    const url = `https://lion-school-2023.cyclic.app/v1/lion-school/alunos`
    const response = await fetch(url)
    const alunos = await response.json()

    return alunos

}

export const showAlunosCurso = async () => {
    const url = `https://lion-school-2023.cyclic.app/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const alunosCurso = await response.json()

    return alunosCurso
}

export const showAlunosMatricula = async () => {
    const url = `https://lion-school-2023.cyclic.app/v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const alunosMatricula = await response.json()

    return alunosMatricula

}
export const showAlunosStatus = async (idDoBotaoClicado) => {
    const url = `https://lion-school-2023.cyclic.app/v1/lion-school/alunos?curso=${curso}&status=${idDoBotaoClicado}`
    const response = await fetch(url)
    const alunosStatus = await response.json()
    
    return alunosStatus
}

//const status = localStorage.getItem('status')
const curso = localStorage.getItem('curso')
const matricula = localStorage.getItem('matricula')