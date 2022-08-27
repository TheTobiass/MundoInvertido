
import { subscribeToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const txtbtnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log('Iscrito com sucesso: ${subscriptionId}') 
}
)