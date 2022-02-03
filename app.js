// prima operazione 

const userName = prompt('Come ti chiami?')

console.log(userName) // per visualizzare in console 


const passWord = prompt('Inserisci la tua password')

console.log(passWord)



// seconda operazione (per selezionare id saluto)

const salutoHTMLElement = document.getElementById('saluto')

console.log(salutoHTMLElement)


const passwordHTMLElement = document.getElementById('password')

console.log(passwordHTMLElement)




// terza operazione (visualizzare html+javascript)

salutoHTMLElement.innerHTML += ' ' + userName // += per concatenare e salvare nell innerhtml dell elemento

passwordHTMLElement.innerHTML += ' ' + passWord

// password 
