In TypeScript, type aliases provide a way to give a name to a type, allowing you to refer to that type by a more descriptive or concise name. This can be especially useful when dealing with complex or nested types. Here's an overview of TypeScript type aliases:

### 1. Basic Type Alias:

You can create a basic type alias to simplify the usage of a type:

```typescript
type Age = number;

let userAge: Age = 25;
```

In this example, `Age` is now an alias for the `number` type.

### 2. Union Types:

Type aliases are particularly helpful when dealing with union types:

```typescript
type Result = "success" | "error";

let operationResult: Result = "success";
```

Here, `Result` is a union type representing either "success" or "error."

### 3. Object Type Alias:

You can use type aliases for object types:

```typescript
type Person = {
    name: string;
    age: number;
};

let user: Person = {
    name: "Alice",
    age: 30
};
```

### 4. Function Type Alias:

You can create type aliases for function types:

```typescript
type GreetFunction = (name: string) => void;

let greet: GreetFunction = (name) => {
    console.log(`Hello, ${name}!`);
};

greet("Bob");  // Outputs: Hello, Bob!
```

### 5. Generics with Type Aliases:

Type aliases can be used with generics for reusable and flexible definitions:

```typescript
type Pair<T, U> = {
    first: T;
    second: U;
};

let numberAndString: Pair<number, string> = { first: 42, second: "hello" };
```

### 6. Mapped Types:

Mapped types allow you to create new types based on existing ones:

```typescript
type Optional<T> = {
    [K in keyof T]?: T[K];
};

type PersonWithOptional = Optional<Person>;

let optionalUser: PersonWithOptional = { name: "Eve" };
```

In this example, `Optional` is a mapped type making all properties of `Person` optional.

### 7. Intersection Types:

You can create intersection types with type aliases:

```typescript
type Employee = {
    employeeId: number;
    role: string;
};

type FullTimeEmployee = Person & Employee;

let fullTimeWorker: FullTimeEmployee = {
    name: "Charlie",
    age: 35,
    employeeId: 123,
    role: "Developer"
};
```

Here, `FullTimeEmployee` is an intersection type combining properties from both `Person` and `Employee`.

Type aliases enhance code readability and maintainability, especially in scenarios involving complex types or repeated use of certain patterns. They provide a way to create more expressive and reusable type definitions.