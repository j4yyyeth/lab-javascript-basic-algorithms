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

let longText = "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis sodales velit nec ultricies. Phasellus commodo velit leo, non tristique libero volutpat eget. Aliquam posuere, mauris nec gravida porta, risus mi elementum quam, vel tempus nisi sem id elit. Aliquam in tincidunt libero. Nunc lacinia mollis laoreet. Ut eleifend facilisis purus vitae interdum. Vestibulum eleifend fermentum suscipit. Nulla a tellus dolor. Curabitur eget pretium enim. Cras a commodo magna. Mauris lectus tellus, scelerisque in urna in, placerat euismod quam. Curabitur sodales, diam faucibus eleifend tempor, nisl mi tincidunt orci, sed faucibus ligula dui eu leo. In sagittis vitae augue quis cursus. Sed gravida, magna nec convallis dictum, mauris quam aliquet felis, a egestas erat augue ut nunc. Nam sit amet maximus dolor. Vestibulum leo mi, suscipit sit amet dolor a, porta sodales augue. Etiam in dictum quam, sit amet vulputate ligula. Vestibulum nisl dolor, hendrerit in ex at, fringilla commodo urna. Duis tempus viverra molestie. Integer eu mollis est. Curabitur a lacus sit amet nibh varius finibus. Phasellus vel porttitor dolor. Maecenas consequat, odio nec ullamcorper vulputate, nisl ipsum semper elit, vel finibus justo massa vel ante. Nulla iaculis elit at elit elementum congue. Nulla at odio eget libero euismod dictum. Pellentesque vitae maximus diam, quis vestibulum nibh. Mauris a convallis lectus. Curabitur lectus ligula, consectetur vel gravida id, aliquet vel ante. Duis imperdiet rutrum quam ut luctus. Nulla consectetur nisl eu erat aliquam blandit. Aliquam eu lacus et sem finibus fermentum quis ac tortor. Cras sit amet enim posuere, scelerisque erat vel, pretium psum.
"

let counter = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] + longText[i + 1] === "et")
  {
  counter++ }
}

console.log(counter)



//BONUS: Bonus 2

code 