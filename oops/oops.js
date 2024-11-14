function Greet(name, age) {
    this.name = name;
    this.age = age;
}

const greeting = new Greet('Suyash', 27)
console.log(greeting.name);