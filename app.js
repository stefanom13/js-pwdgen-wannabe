const currentYear = 2022 ;

// prima operazione 
const userName = prompt('Come ti chiami?');
console.log(userName); // per visualizzare in console 

const userAge = prompt ('Inserisci anno di nascita');
console.log(userAge);


const colorPreferito = prompt('Inserisci il tuo colore preferito');
console.log(colorPreferito);

const birth = currentYear - userAge;
console.log(birth);   // calcolo età

const password =`${userName}${birth}${colorPreferito}`;
console.log(password);

// stampare password
document.getElementById('password').innerHTML += password ;




// seconda operazione (per selezionare id saluto)

// const salutoHTMLElement = document.getElementById('saluto')

// console.log(salutoHTMLElement)

// const ageHTMLElement = document.getElementById('age')
// console.log(ageHTMLElement)

// const passwordHTMLElement = document.getElementById('password')

// console.log(passwordHTMLElement)


// const colorPreferitoHTMLElement = document.getElementById('colorPref')

// console.log(colorPreferitoHTMLElement)




// terza operazione (visualizzare html+javascript)

// salutoHTMLElement.innerHTML += ' ' + userName // += per concatenare e salvare nell innerhtml dell elemento


// colorPreferitoHTMLElement.innerHTML += ' ' + colorPreferito

// ageHTMLElement.innerHTML += ' ' + birth + ' ' + 'anni'

// colorPreferitoHTMLElement.innerHTML += ` ${colorPreferito}`  // modo alternativo per scrivere riga36

