const rank: Array<number> = [];
const whatever: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  color: string;
  size: string;
  price: number;
}

// identityFour<Bottle>({ color: "red", size: "large", price: 19.9 });

function getSearchProducts<T>(products: T[]): T {
  //   return 1;
  //after some complex calculations
  const myIndex = 1;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 1;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  passoword: string;
}

function anotherFunction<T, U extends Database>(val1: T, Val2: U): Object {
  return { val1, Val2 };
}

anotherFunction(true, {
  connection: "localhost",
  username: "admin",
  passoword: "secret",
});

interface Quiz {
  name: string;
  type: String;
}

interface Course {
  name: string;
  subject: string;
  author: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addItem(item: T) {
    this.cart.push(item);
  }
}
