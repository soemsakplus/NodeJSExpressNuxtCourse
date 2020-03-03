const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const printPerson = (person) => {
  console.log('printPerson ' + person.name + ' ' + person.age)
}

const printName = ({ name, age }) => {
  console.log(name + ' ' + age);
};

printName(person);
printPerson(person);

const { name, age } = person;
console.log(name, age);

// const copiedPerson = { ...person };
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));
