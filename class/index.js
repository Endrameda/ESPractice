// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }
//
// class Animal {
//     static type = 'ANIMAL'
//
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     voice() {
//         console.log(`I am ${this.name}!`);
//     }
// }
//
// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// })
//
// class Cat extends Animal {
//     constructor(options) {
//         super(options);
//         this.color = options.color
//     }
//
//     voice() {
//         super.voice();
//         console.log('Sure I am Cat))')
//     }
//
//     get ageInfo() {
//         return this.age * 7
//     }
//
//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }
//
// const cat = new Cat({
//     name: 'Cat',
//     age: 3,
//     hasTail: true,
//     color: 'black'
// })

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.backgroundColor
    }
}

class Circle extends Box {
    constructor(options) {
        super(options);

        this.$el.style.borderRadius = '50%'
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    backgroundColor: 'red',
});

const box2 = new Box({
    selector: '#box2',
    size: 150,
    backgroundColor: 'green',
});

const circle = new Circle({
    selector: '#circle',
    size: 200,
    backgroundColor: 'blue'
});