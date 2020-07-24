const myNumber = 22

console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber)
console.log(localStorage.getItem('number'))

localStorage.removeItem('myNumber')

localStorage.user = JSON.stringify({name: "John"});

let user = JSON.parse( localStorage.user );
alert( user.name );