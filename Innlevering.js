// Oppgave 1

console.log("Oppgave 1");

let gamingArray = [
  "Monitor",
  " Keyboard",
  " Mouse",
  " Headset",
  " CPU",
  " GPU",
  " PSU",
  " RAM",
  " SSD",
  " MBoard ",
];
console.log("Lengden på arrayet: " + gamingArray.length);

gamingArray.pop();
console.log("Her har det vært ett objekt POP: " + gamingArray);

gamingArray.push("Case");
console.log("Her har det vært ett objekt PUSH: " + gamingArray);

console.log(
  "Her har du console logga index 3 & index 7: " +
    gamingArray[3] +
    " og " +
    gamingArray[7]
);

// Oppgave 1.1.
console.log("Oppgave 1.1");

console.log("Dette er index 5:", gamingArray[5]);

// Oppgave 2
console.log("Oppgave2");

const person1 = [
  {
    firstName: "Tobias",
    lastName: "Kodehode",
    age: "22",
  },

  {
    firstName: "John",
    lastName: "Krasinki",
    age: "40",
    hobbies: ["Movies", " Politics", " Travelling"],
  },
];

console.log(person1[0]);
console.log(person1[1]);
console.log(person1[1].hobbies);

// Oppgave 3
console.log("Oppgave 3");

let age = 17;

if (age >= 18) {
  console.log("Du er gammel nok til å handle snus");
} else {
  if (age <= 18) console.log("Du er ikke gammel nok til å handle snus!");
}

// Oppgave 4
console.log("Oppgave 4");

function numberDice(nrOfDice) {
  const dice = ["1", "2", "3", "4", "5", "6"];

  const diceResult = []
  
  for(let i=0; i<nrOfDice; i++) {
    const randomIndex = Math.floor(Math.random() * dice.length);
    diceResult.push(dice[randomIndex]);
    
  }
  
  return diceResult;
   
}

console.log(numberDice(3));
console.log(numberDice(1));
console.log(numberDice(20));