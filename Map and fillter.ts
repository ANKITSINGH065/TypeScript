Certainly! Let's dive into TypeScript array `map` and `filter` methods with examples:

### 1. **`map` Method:**

The `map` method is used to transform each element of an array by applying a provided function to it.

#### Example:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Double each element using map
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);  // [2, 4, 6, 8, 10]
```

In this example, the `map` method doubles each element in the `numbers` array.

### 2. **`filter` Method:**

The `filter` method is used to create a new array containing only the elements that satisfy a given condition.

#### Example:

```typescript
// Filter even numbers using filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);  // [2, 4]
```

In this example, the `filter` method creates a new array containing only the even numbers from the `numbers` array.

### 3. **Combining `map` and `filter`:**

You can also combine `map` and `filter` to perform more complex transformations on arrays.

#### Example:

```typescript
let words: string[] = ["apple", "banana", "cherry"];

// Filter words with more than 5 characters and transform to uppercase using map
const longAndUppercaseWords = words
  .filter((word) => word.length > 5)
  .map((word) => word.toUpperCase());

console.log(longAndUppercaseWords);  // ["BANANA", "CHERRY"]
```

Here, we filter words with more than 5 characters and then transform them to uppercase using `map`.

### Summary:

- **`map`:** Transforms each element of an array based on a provided function.
- **`filter`:** Creates a new array containing only the elements that satisfy a given condition.

These methods are powerful tools for working with arrays in a functional and declarative style, making your code more readable and expressive.