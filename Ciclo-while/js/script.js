// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];

// Stampare sulla pagina li elementi della lista individualmente.
// Svolgete questo esercizio col ciclo while.

// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// Lista Array
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// Stampo ogni elemento nell'array 
const userList = document.querySelector('#user-message');

let i = 0;
while(i < list.length) {
    const listItem = list[i];
    i++;

    const arrayList = `<div>${listItem}</div>`;

    userList.innerHTML += arrayList;
}