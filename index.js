// Iteration 1: Names and Input

let hacker1 = "me";
let hacker2 = "you";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops

console.log(hacker1.split('').join(' ').toUpperCase());

console.log(hacker2.split("").reverse("").join(""));

if (hacker1.localeCompare(hacker2) > 0) {
    console.log("The hacker1's name goes first.");
  } 
  else if (hacker1.localeCompare(hacker2) < 0) {
    console.log("Yo, the hacker2 goes first definitely.");
  }
  else {
  console.log("What?! You both have the same name? ");
  }

// BONUS: Bonus 1



//BONUS: Bonus 2