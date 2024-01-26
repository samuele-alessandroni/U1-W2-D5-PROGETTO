/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

/*for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
  
}*/

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/*pets.sort()*/


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/*pets.reverse()*/

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/*let x = 0
x = pets[0]
pets[0] = pets[pets.length - 1]
pets[pets.length - 1] = x*/

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

/*for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'GB 35' + i + " " + 'AS'
  
}

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  
}*/

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

/*cars[cars.length] =  {
  brand: 'Fiat',
  model: 'Panda',
  color: 'white',
  trims:['titanium', '4x4', 'indestructible']
}

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}*/

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

/*const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims[0]
  
}*/

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/*for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

/*const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

while (numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++
}*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

/*const charactersArray = ['g', 'n', 'u', 'z', 'd']

let numericArray = []

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      numericArray[i] = 1
      break;
      case 'b':
      numericArray[i] = 2
      break;
      case 'c':
      numericArray[i] = 3
      break;
      case 'd':
      numericArray[i] = 4
      break;
      case 'e':
      numericArray[i] = 5
      break;
      case 'f':
      numericArray[i] = 6
      break;
      case 'g':
      numericArray[i] = 7
      break;
      case 'h':
      numericArray[i] = 8
      break;
      case 'i':
      numericArray[i] = 9
      break;
      case 'j':
      numericArray[i] = 10
      break;
      case 'k':
      numericArray[i] = 11
      break;
      case 'l':
      numericArray[i] = 12
      break;
      case 'm':
      numericArray[i] = 13
      break;
      case 'n':
      numericArray[i] = 14
      break;
      case 'o':
      numericArray[i] = 15
      break;
      case 'p':
      numericArray[i] = 16
      break;
      case 'q':
      numericArray[i] = 17
      break;
      case 'r':
      numericArray[i] = 18
      break;
      case 's':
      numericArray[i] = 19
      break;
      case 't':
      numericArray[i] = 20
      break;
      case 'u':
      numericArray[i] = 21
      break;
      case 'v':
      numericArray[i] = 22
      break;
      case 'w':
      numericArray[i] = 23
      break;
      case 'x':
      numericArray[i] = 24
      break;
      case 'y':
      numericArray[i] = 25
      break;
      case 'z':
      numericArray[i] = 26
      break;

  }
  
}

console.log(numericArray);*/