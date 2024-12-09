class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(secondUser) {
    if (this.age > secondUser.age) {
      return `${this.firstName} è più vecchio di ${secondUser.firstName}`;
    } else if (this.age < secondUser.age) {
      return `${this.firstName} è più giovane di ${secondUser.firstName}`;
    } else {
      return `${this.firstName} e ${secondUser.firstName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Giuseppe", "Pomo", 30, "Racalmuto");
const user2 = new User("Giovanni", "Spataro", 29, "Roma");
const user3 = new User("Adriano", "Schillaci", 31, "Roma");
const user4 = new User("Alessio", "Schillaci",34,"Padova");


console.log(user1.compareAge(user2)); 
console.log(user2.compareAge(user1));
console.log(user3.compareAge(user4)); 
console.log(user4.compareAge(user3)); 