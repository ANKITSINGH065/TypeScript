/*
TypeScript (TS) is a superset of JavaScript that adds static typing to the language. Type annotations in TypeScript are a way to explicitly specify the types of variables, function parameters, return types, and other entities in your code. These annotations help catch type-related errors early in the development process and improve code readability.

*/
Here are some common use cases for type annotations in TypeScript:

1. **Variable Declarations:**
   ```typescript
   let age: number = 25;
   let name: string = "John";
   let isStudent: boolean = true;
   ```

2. **Function Parameters and Return Types:**
   ```typescript
   function add(x: number, y: number): number {
       return x + y;
   }

   function greet(name: string): string {
       return "Hello, " + name;
   }
   ```

3. **Object Type Annotations:**
   ```typescript
   let person: { name: string; age: number } = {
       name: "Alice",
       age: 30,
   };
   ```

4. **Array Type Annotations:**
   ```typescript
   let numbers: number[] = [1, 2, 3, 4];
   let names: string[] = ["John", "Alice", "Bob"];
   ```

5. **Union Types:**
   ```typescript
   let result: number | string;
   result = 42;
   result = "Error";
   ```

6. **Type Aliases:**
   ```typescript
   type Point = {
       x: number;
       y: number;
   };

   let p: Point = { x: 10, y: 20 };
   ```

7. **Function Types:**
   ```typescript
   type MathOperation = (x: number, y: number) => number;

   let add: MathOperation = (x, y) => x + y;
   let subtract: MathOperation = (x, y) => x - y;
   ```

8. **Generics:**
   ```typescript
   function identity<T>(arg: T): T {
       return arg;
   }

   let result: number = identity<number>(42);
   let value: string = identity<string>("Hello");
   ```

Remember that TypeScript also supports type inference, allowing the compiler to automatically deduce types in many cases. Annotations can be especially useful when you want to provide explicit information or when the type inference might not be sufficient.