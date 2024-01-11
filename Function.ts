Understanding invocation, declaration, and return types is fundamental to working with functions in programming. Let's break down each concept:

### 1. Function Declaration:

A function declaration is a statement that defines a function with a specified name, parameters, and body. It introduces the function to the code, allowing it to be called later in the program.

**Syntax:**
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

In this example, `add` is a function declaration. It specifies that it takes two parameters (`a` and `b`), both of type `number`, and returns a value of type `number`.

### 2. Function Invocation:

Function invocation, also known as calling or executing a function, is the process of using a function after it has been declared. When a function is invoked, its code is executed, and it may produce a result (return value).

**Example:**
```typescript
let result = add(3, 5); // Invoking the 'add' function
console.log(result);    // Output: 8
```

Here, `add(3, 5)` is a function invocation. The function is called with arguments `3` and `5`, and the returned value (`8`) is assigned to the variable `result`.

### 3. Return Types:

Return types specify the type of value that a function is expected to return. In TypeScript, you can explicitly declare the return type using the `: returnType` syntax.

**Example:**
```typescript
function multiply(a: number, b: number): number {
    return a * b;
}
```

In this example, the `multiply` function is declared to take two parameters (`a` and `b`) of type `number` and return a value of type `number`.

**Void Return Type:**
If a function does not return any value, you can specify a `void` return type.

```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

Here, the `logMessage` function logs a message but does not return any value.

Understanding these concepts helps you define, call, and work with functions effectively in your code. Additionally, using proper types enhances type safety and helps catch errors during development.