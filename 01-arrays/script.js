const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for (let i = 0; i < teachers.length; i++) {
  stringa = `${teachers[i]} è l'isegnate in posizione ${i}`;
  console.log(stringa);
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[4];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[5] = "Patrick";
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(teachers);
console.log(lastTeacher);
// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.slice();
console.log(teachers);
console.log(firstTeacher);


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);
// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {

  if (teachers[i] == "Fabio") {
    isFabioPresent = true;

  }
}
console.log(isFabioPresent);


// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let lewisIndex = null;
for (let i = 0; i < teachers.length; i++) {

  if (teachers[i] == "Lewis") {
    lewisIndex = i;

  }
}
console.log(lewisIndex);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let teachersString = null;
console.log(teachers);

for (let i = 0; i < teachers.length; i++) {



  if (i == 0) {
    teachersString = teachers[i] + ","
  } else if (i == (teachers.length - 1)) {
    teachersString = teachersString + teachers[i] + "."
  } else {
    teachersString = teachersString + teachers[i] + ","
  }
}
console.log(teachersString);
// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = false;

for (let i = 0; i < teachers.length; i++) {

  if (teachers[i] == null) {
    isTeachersEmpty = true;
  }
}
console.log(isTeachersEmpty)
