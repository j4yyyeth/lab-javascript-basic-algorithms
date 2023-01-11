// Iteration 1: Names and Input

let hacker1 = "me";
let hacker2 = "you";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if () {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1.toLocaleUpperCase())
}


/* 

3.1 Print the characters of the hacker1's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the hacker2's name, in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The hacker1's name goes first.
Yo, the hacker2 goes first definitely.
What?! You both have the same name? 

*/