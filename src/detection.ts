function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val + 4;
}

function ProvideId(id: string | null) {
  if (!id) {
    console.log("No ID provided");
    return;
  }
  id = id.toString();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  role: string;
}

function isAdminAccount(user: User | Admin) {
  if ("role" in user) {
    return user.role;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
// type predicates
type fish = { swim: () => void };
type bird = { fly: () => void };

function isFish(pet: fish | bird): pet is fish {
  return (pet as fish).swim !== undefined;
}

function getFood(pet: fish | bird) {
  if (isFish(pet)) {
    pet;
    return "Fish";
  } else {
    pet;
    return "Bird";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.sideLength ** 2;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
