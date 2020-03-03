var name = 'Breeze 1'
var age = 37

console.log(name);

function printHello(name) {
  return 'Hello ' + name
}

var hello = printHello(name)
console.log(hello)

let info = 'info 1'
const detail = 'detail xxx'

if (true) {
  var name = 'Breeze 2'
  let info = 'info 2'
  const detail = 'detail yyy'
  console.log(detail)
}

console.log(name)
console.log(info)
console.log(detail)

// function fun2(name, info) {

// }

const fun2 = (name, info) => {
  return 'name: ' + name + " info: " + info
}

console.log(fun2(name,info))

var breeze = {
  firstName: 'Soemsak',
  lastName: 'Lpps',
  age: 37,
  job: 'programmer'
}

console.log(breeze.firstName + ' ' + breeze.lastName)

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Swimming')

console.log(hobbies)

const x = hobbies.map( hobby => {
  return 'Hobby: ' + hobby
})

console.log(
  x
)






console.log('=================================')

const copiedArray2 = [...hobbies];
console.log(copiedArray2);

const toArray = (...args) => {
  return args;
};

toArray('a','b','c')

// toArray(1, 2, 3, 4, 5)

console.log(toArray(1, 2, 3, 4));



console.log('=================================')

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!')
  }, 2000)
})

console.log('p1')

promise.then( text => {
  console.log('p2 ' + text)
})

console.log('p3')
