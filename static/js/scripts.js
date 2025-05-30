console.log("Hola desde la consola.");
let age = 18;

// age += 1; //0-21:20€  22-65:50€ 65-...:0€
age = age + 70;

if (age <= 21) {
    console.log("20€ al mes.");
} else if (age < 65) {
    console.log("50€ al mes.");
} else {
    console.log("Gratis.")
}

const dogs = ["Kuga", "Pipi", "Simón", "Kira"];

// let i = 0; // BUCLE WHILE

// while (i < dogs.length) {
//     console.log(dogs[i]);
//     i ++;
// }

// for (let i = 0; i < dogs.length; i ++) { //BUCLE FOR
//     console.log(dogs[i]);
// }

// console.log(i);
function list() {
    for (let dog of dogs) {
        console.log(dog);
    }
}

// list()
// const nums = [1,2,3,4];

// for (let num of nums) {
//     if(num % 2 == 0) {
//         console.log(num);
//     }
// }

function filterByLetter() {

    const inputLetter = document.querySelector("#filter");
    
    for (let dog of dogs) {
        if (dog[0].toUpperCase() == inputLetter.value.toUpperCase()) {
            console.log(dog);
        }
    }
}