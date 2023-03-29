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