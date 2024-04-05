class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}

const user = new User('user', 15);
console.log(user);
