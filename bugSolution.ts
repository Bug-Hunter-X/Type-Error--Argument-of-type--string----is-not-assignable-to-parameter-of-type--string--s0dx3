function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user)); //Corrected, outputs 'Hello, Jane User, John Smith'

//Alternative solution: Handling each element separately
function greeterImproved(people: string[]) {
    people.forEach(person => console.log("Hello, "+ person));
}

greeterImproved(user); //Corrected, outputs separate greetings for each element in the array