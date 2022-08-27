
import { subscribeToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById("txtName")
const txtEmail = document.getElementById("txtEmail")
const txtLevel = document.getElementById("txtLevel")
const txtCharacter = document.getElementById("txtCharacter")

const txtbtnSubscribe = document.getElementById("txtbtnSubscribe")

btnSubscribe.addEventListener("click", async () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
    }
    
    const subscriptionID = await subscribeToHellfireClub(subscription)
    console.log('Iscrito com sucesso: ${subscripionId}') 
})