// const user = {
//     name: 'Sardor',
//     age: 22,
//     greet: function () {
//         console.log('Greet!!!');
//     }
// }

const user = new Object({
    name: 'Sardor',
    age: 22,
    greet: function () {
        console.log('Greet!!!');
    }
});

Object.prototype.sayHello = function () {
    console.log('SayHello function was called');
};

const katya = Object.create(user);

katya.name = 'Ekaterina';
katya.age = 27;

const str = new String('I am string');

function UserName(name) {
    this.name = name
}

UserName.prototype = user;

const userName = new UserName('Oytovok');


