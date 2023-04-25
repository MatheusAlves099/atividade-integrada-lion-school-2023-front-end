//Crianda uma variável para chamar o input que contém a checkbox
const containerCheckbox = document.querySelector('input.checkbox')
const rootElement = document.documentElement

//Variável criada para mudar somente a cor do body
const bodyChange = document.getElementById('checkbox')

//Adicionando um evento de mudança da cor do body
bodyChange.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

//Variável que contém todas as cores do tema claro
const lightTheme = {
    '--header-color': '#3347B0',
    '--text-description-color': '#000',
}

//Variável que contém todas as cores do tema escuro
const darkTheme = {
    '--header-color': '#3347B0',
    '--text-description-color': '#FFF',
}

//Adicionando o evento de mudança de cores, de claro para escuro e vice-versa
containerCheckbox.addEventListener('change', () => {
    const isChecked = containerCheckbox.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

//Função criada para efetuar a mudança de tema com base na checkbox
function changeTheme (checkbox) {
    for (let prop in checkbox) {
        changeProperty(prop, checkbox[prop])
    }
}

//Função criada para mudar a proprieda e valor, utilizada na função acima
function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}