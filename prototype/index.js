let animal = {
    eats: true,
    walk() {
        console.log('Animal walk!')
    }
}

let rabbit = {
    jumps: true,
    __proto__: animal
}

let longEar = {
    earLength: 20,
    __proto__: rabbit
}

console.log(longEar.earLength)
console.log(longEar.walk())

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.name); // Alice
alert(admin.surname); // Cooper