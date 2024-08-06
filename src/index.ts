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
  //   private _courseCount = 1;
  protected _courseCount = 1;

  private readonly city: string = "New York";
  constructor(
    public name: string,
    // private userId:string
    public email: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple-${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count must be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

class subUser extends User {
  isFamilyMember: boolean = true;
  changeCourseCount() {
    this._courseCount = 2; // Allowed
  }
}

const melina = new User("Melina", "melina@example.com");
// melina.deleteToken(); // Error: Token deletion is not allowed
