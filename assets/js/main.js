
const txtName = document.getElementById("txtName")
const txtEmail = document.getElementById("txtEmail")
const txtLevel = document.getElementById("txtLevel")
const txtCharacter = document.getElementById("txtCharacter")

const txtbtnSubscribe = document.getElementById("txtbtnSubscribe")

btnSubscribe.addEventListener("click", () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
    }
    // Salvar no banco de dados:
    console.log(subscription)
})