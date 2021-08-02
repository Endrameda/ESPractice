function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();

// let one = generator.next()
// console.log(one);
//
// let two = generator.next()
// console.log(two)
//
// let three = generator.next()
// console.log(three)

// for (let value of generator) {
//     console.log(value)
// }

let sequence = [0, ...generateSequence()]

console.log(sequence)