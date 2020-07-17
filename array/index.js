const people = [
    {name: 'Сардор', age: 22, budget: 100000},
    {name: 'Катя', age: 24, budget: 200000},
    {name: 'Ойтовок', age: 16, budget: 300000},
    {name: 'Момось', age: 17, budget: 400000},
    {name: 'Бобось', age: 27, budget: 500000},
]

// ForEach

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// people.forEach(person => console.log(person))



// Map

// const newPeople = people.map(person => {
//     return person.name
// })
//
// console.log(newPeople)



// Filter

// for (let i =0; i < people.length; i++) {
//     if (people[i].age > 18) {
//         adjust.push(people[i])
//     }
// }

// const adjust = people.filter(person => person.age >= 18)
//
// console.log(adjust)



// Reduce

// let sum = 0
//
// for (let i = 0; people.length > i; i++) {
//     sum += people[i].budget
// }

// let sum = people.reduce((total, person) => total + person.budget, 0)
//
// console.log(sum)



// Find

const bobos = people.find(person => person.name === 'Бобось')

console.log(bobos)


// FindIndex

const bobosIndex = people.findIndex(person => person.name === 'Бобось')

console.log(bobosIndex)
