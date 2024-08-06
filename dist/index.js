"use strict";
// class User {
//   public name: string;
//   email: string;
//   private readonly city: string = "New York";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const melina = new User("Melina", "melina@example.com");
// melina.city;
// melina.city =4; // Error: City must be a string
class User {
    constructor(name, 
    // private userId:string
    email) {
        this.name = name;
        this.email = email;
        //   private _courseCount = 1;
        this._courseCount = 1;
        this.city = "New York";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple-${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamilyMember = true;
    }
    changeCourseCount() {
        this._courseCount = 2; // Allowed
    }
}
const melina = new User("Melina", "melina@example.com");
// melina.deleteToken(); // Error: Token deletion is not allowed
