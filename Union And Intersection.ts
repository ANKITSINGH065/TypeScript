In TypeScript, unions and intersections are powerful features that allow you to work with different types in flexible ways.

### Union Types (`|`):

A union type allows a variable to have multiple types. It is declared using the `|` (pipe) operator.

#### Example:

```typescript
// Union type
let age: number | string;

age = 25;       // Valid assignment
console.log(age);

age = "twenty"; // Valid assignment
console.log(age);
```

In this example, `age` can be either a `number` or a `string`.

### Intersection Types (`&`):

An intersection type combines multiple types into a single type. It is declared using the `&` (ampersand) operator.

#### Example:

```typescript
// Intersection type
interface Car {
    brand: string;
    model: string;
}

interface Electric {
    battery: string;
}

type ElectricCar = Car & Electric;

let tesla: ElectricCar = {
    brand: "Tesla",
    model: "Model S",
    battery: "Lithium-ion"
};
```

Here, `ElectricCar` is an intersection type combining properties from both `Car` and `Electric` interfaces.

### Using Unions and Intersections Together:

You can use unions and intersections together for more complex type scenarios.

#### Example:

```typescript
// Union and intersection together
type Result = { success: true } | { error: string } & { code: number };

let successResult: Result = { success: true };                // Valid
let errorResult: Result = { error: "Not found", code: 404 };  // Valid
let invalidResult: Result = { success: false, code: 200 };    // Error: Property 'error' is missing
```

Here, `Result` can be an object with a `success` property set to `true` or an object with both `error` and `code` properties.

Unions and intersections provide flexibility and expressiveness in defining complex types. They allow you to model scenarios where a variable can have multiple types (union) or when a type needs to combine properties from multiple types (intersection).