const name = 'breeze';
let age = 37;
var job = 'programmer';
var married = true;

function myInfoToString(name, age, job, married) {
  return 'My name is ' + name + ". My age is " + age + '. My job is ' + job + '. Married = ' + married
}

console.log(myInfoToString(name, age, job, married));

var greeting1 = "Hello";
let greeting2 = "Sawadee";
const greeting3 = "Sabaydee";

var number1 = 4;

if (number1 < 5) {
  var greeting1 = "Hi";
  let greeting2 = "Dee";
  // greeting3 = "BayDee";
  console.log(greeting1 + ' ' + greeting2 + ' ' + greeting3);
}

// let greeting2 = "Dee mark"
// var greeting1 = "Hi 2"
console.log(greeting1 + ' ' + greeting2 + ' ' + greeting3);

const user = {
  name: 'breeze',
  age: 37,
  greet() {
    return "Hello"
  },
  spouse: 'mint'
};

user.name = "Soemsak x";

console.log(user.name);

const useInfo = (name, age) => {
  return 'My name is ' + name + ". My age is " + age + '.';
}

console.log(useInfo(user.name, user.age));
console.log(user.greet())

const hobbies = ['running', 'swimming', 'doing'];

console.log(hobbies.map( hobby =>
  'My hobby is ' + hobby
))

console.log(hobbies)

hobbies.push('Cooking')

for (let hobby of hobbies) {
  console.log(hobby)
}

const copyArray = [...hobbies];
console.log(copyArray)

const copyArrayFunc = (...arg) => {
  console.log(arg[0])
  return arg
}

console.log(copyArrayFunc(1,2,3,4,5))

function test1() {
  const {name, age} = user
  console.log(name, age)


  const [hobby1, hobby2] = hobbies;
  console.log(hobby1, hobby2);
}
test1()

