Generics in TypeScript provide a way to write functions and classes that can work with any data type while maintaining type safety. They allow you to create reusable and flexible code that can work with a variety of data types without sacrificing type information.

### Generic Functions:

```typescript
// Generic function to echo any input
function echo<T>(input: T): T {
    return input;
}

let result = echo("Hello, TypeScript!");  // result is of type string
console.log(result);

let numResult = echo(42);  // numResult is of type number
console.log(numResult);
```

In this example, `echo` is a generic function that works with any data type. The `<T>` syntax indicates that `T` is a generic type, and it is inferred from the type of the argument provided during the function call.

### Generic Classes:

```typescript
// Generic class to store and retrieve a value
class Box<T> {
    private value: T;

    setValue(newValue: T): void {
        this.value = newValue;
    }

    getValue(): T {
        return this.value;
    }
}

let stringBox = new Box<string>();
stringBox.setValue("TypeScript");
console.log(stringBox.getValue());  // Outputs: "TypeScript"

let numberBox = new Box<number>();
numberBox.setValue(42);
console.log(numberBox.getValue());  // Outputs: 42
```

Here, `Box` is a generic class that can store and retrieve values of any type.

### Generic Interfaces:

```typescript
// Generic interface for a pair of values
interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = { first: "One", second: 1 };
console.log(stringNumberPair.first);  // Outputs: "One"
console.log(stringNumberPair.second);  // Outputs: 1
```

The `Pair` interface is generic, allowing you to define a pair of values with any two types.

### Constraints on Generics:

```typescript
// Generic function with constraint
function lengthOfArray<T>(arr: T[]): number {
    return arr.length;
}

let arrLength = lengthOfArray([1, 2, 3]);  // arrLength is of type number
console.log(arrLength);
```

In this example, the `lengthOfArray` function works with arrays of any type `T`, but it has a constraint (`arr: T[]`) to ensure that the input is an array.

Generics provide a way to write functions and classes that are more flexible and reusable while preserving type safety. They allow you to create code that adapts to various data types without sacrificing the benefits of static typing.