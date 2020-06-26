function hello() {
    console.log('Hello, ', this);
}

const user = {
    name: 'Sardor',
    age: 22,
    gender: 'male',
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    },
}

const katya = {
    name: 'Ekaterina',
    age: 27
}

// user.logInfo.bind(katya, 'Project manager', '+998(99)999-99-99')();
// user.logInfo.call(katya, 'Project manager', '+998(90)999-99-99');
user.logInfo.apply(katya, ['Project manager', '+998(99)999-99-99']);


//-----------------------------------//

const array = [5, 6, 7, 8, 2];

/*function multBy(arr, n) {
    return arr.map(function (i){
        return i * n;
    });
}*/

Array.prototype.multBy = function (number) {
    return this.map(function (item) {
        return item * number;
    });
}

array.multBy(5);