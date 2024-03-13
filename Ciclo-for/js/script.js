// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];

// Stampare sulla pagina gli elementi della lista individualmente.
// Svolgete questo esercizio col ciclo for.


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
for(let i = 0; i < list.length; i++) {
    const listItem = list[i];

    const arrayList = `<div>${listItem}</div>`;

    userList.innerHTML += arrayList;
}