In TypeScript, an interface is a way to define a contract for the shape or structure of an object. It specifies a set of properties and their types that an object must have to be considered as conforming to that interface. Interfaces provide a mechanism for enforcing a certain structure in your code and help catch errors during development.

### Basic Interface:

```typescript
// Basic interface for a person
interface Person {
    name: string;
    age: number;
}

// Using the interface
let user: Person = {
    name: "Alice",
    age: 25
};
```

In this example, the `Person` interface defines a structure with a `name` property of type `string` and an `age` property of type `number`. The `user` object adheres to this interface.

### Optional Properties:

```typescript
// Interface with optional property
interface Car {
    brand: string;
    model: string;
    year?: number;  // Optional property
}

// Using the interface
let myCar: Car = {
    brand: "Toyota",
    model: "Camry"
};
```

Here, the `year` property in the `Car` interface is optional. Objects can conform to the interface even if the optional property is not present.

### Readonly Properties:

```typescript
// Interface with readonly property
interface Point {
    readonly x: number;
    readonly y: number;
}

// Using the interface
let point: Point = { x: 10, y: 20 };
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
```

The `readonly` modifier ensures that once a property is assigned a value, it cannot be modified.

### Function Types in Interfaces:

```typescript
// Interface with function type
interface GreetFunction {
    (name: string): string;
}

// Using the interface
let sayHello: GreetFunction = function(name) {
    return `Hello, ${name}!`;
};

console.log(sayHello("Bob"));  // Outputs: "Hello, Bob!"
```

Interfaces can define the structure of function types, specifying the parameter types and the return type.

### Extending Interfaces:

```typescript
// Base interface
interface Animal {
    name: string;
    makeSound(): void;
}

// Interface extending the base interface
interface Dog extends Animal {
    breed: string;
}

// Using the extended interface
let myDog: Dog = {
    name: "Buddy",
    makeSound() {
        console.log("Woof!");
    },
    breed: "Labrador"
};
```

In this example, the `Dog` interface extends the `Animal` interface, inheriting its properties and methods.

Interfaces in TypeScript provide a way to define reusable structures for objects, functions, and more. They play a crucial role in promoting code readability, maintainability, and catching errors at compile time.