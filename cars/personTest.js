"use strict";

const person = require("./person.json");
// next will not work due to errors in json-file
// const person = require('./wrongPerson.json');

console.log(person);
console.log(person.firstname);
console.log(`${person.firstname} ${person.lastname}`);

console.log(person["age"]);
console.log(person.age);

let fieldname = "age";
console.log(person[fieldname]);
fieldname = "member";
console.log(person[fieldname]);

fieldname = "firstname";
console.log(person[fieldname]);

console.log(Object.keys(person));

function print(fieldname) {
  console.log(person[fieldname]);
}

console.log("#########");
print("age");
print("firstname");

function print2(fieldname) {
  if (fieldname === "age") {
    console.log(person.age);
  } else if (fieldname === "firstname") {
    console.log(person.firstname);
  }
}

console.log("#########keys#######");
console.log(Object.keys(person));

console.log("################");
for (const key of Object.keys(person)) {
  print(key);
}

console.log("######## values ######");
console.log(Object.values(person));

console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
  console.log(`for key "${key}" the value is ${value}`);
}

const person2 = {
  //comments aren't allowed in json file
  firstname: "Vera",
  lastname: "River",
  notes: `vera is ${person.age}`, //this take the age of Matt
};
console.log(person2);
