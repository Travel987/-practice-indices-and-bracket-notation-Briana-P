// Practice: Indices and Bracket Notation

// Task 1: Create a multi-dimensional array with 9 books/movies
let library = [
  ["Inception", "The Matrix", "Interstellar"],   // shelf 1
  ["1984", "The Great Gatsby", "To Kill a Mockingbird"], // shelf 2
  ["Avengers", "The Dark Knight", "Titanic"]     // shelf 3
];

// Task 2: Access and log all elements with bracket notation (numbers)
console.log("Task 2:");
console.log(library[0][0], library[0][1], library[0][2]);
console.log(library[1][0], library[1][1], library[1][2]);
console.log(library[2][0], library[2][1], library[2][2]);

// Task 3: Access and log all elements with bracket notation using variables
console.log("Task 3:");
for (let row = 0; row < library.length; row++) {
  for (let item = 0; item < library[row].length; item++) {
    console.log(library[row][item]);
  }
}

// Task 4: Loop that prints all the items on the second shelf
console.log("Task 4:");
for (let i = 0; i < library[1].length; i++) {
  console.log(library[1][i]);
}