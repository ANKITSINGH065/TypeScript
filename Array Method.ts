Certainly! Let's explore some commonly used methods and iterations for arrays in TypeScript, along with practical examples.

### 1. **Array Methods:**

#### a. `push` and `pop`

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Add an element to the end
numbers.push(6);

// Remove the last element
const poppedElement = numbers.pop();

console.log(numbers);        // [1, 2, 3, 4, 5, 6]
console.log(poppedElement);   // 6
```

#### b. `shift` and `unshift`

```typescript
// Remove the first element
const shiftedElement = numbers.shift();

// Add an element to the beginning
numbers.unshift(0);

console.log(numbers);        // [0, 1, 2, 3, 4, 5]
console.log(shiftedElement);  // 1
```

#### c. `splice`

```typescript
// Remove elements starting from index 2, remove 2 elements, and add 7, 8
numbers.splice(2, 2, 7, 8);

console.log(numbers);  // [0, 1, 7, 8, 4, 5]
```

#### d. `concat`

```typescript
let moreNumbers: number[] = [9, 10];

// Concatenate arrays
const combinedNumbers = numbers.concat(moreNumbers);

console.log(combinedNumbers);  // [0, 1, 7, 8, 4, 5, 9, 10]
```

#### e. `slice`

```typescript
// Create a new array with elements from index 2 to 5 (exclusive)
const slicedNumbers = numbers.slice(2, 5);

console.log(slicedNumbers);  // [7, 8, 4]
```

### 2. **Array Iterations:**

#### a. `forEach`

```typescript
// Print each element
numbers.forEach((num) => {
    console.log(num);
});
```

#### b. `map`

```typescript
// Double each element
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);  // [0, 2, 14, 16, 8, 10]
```

#### c. `filter`

```typescript
// Filter even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);  // [0, 8, 4]
```

#### d. `reduce`

```typescript
// Calculate the sum of all elements
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);  // 24
```

#### e. `every` and `some`

```typescript
// Check if all elements are greater than 0
const allPositive = numbers.every((num) => num > 0);

// Check if any element is greater than 5
const anyGreaterThanFive = numbers.some((num) => num > 5);

console.log(allPositive);         // false
console.log(anyGreaterThanFive);  // true
```

These are just a few examples of the many methods and iterations available for arrays in TypeScript. They provide powerful ways to manipulate and iterate through array elements, making your code concise and expressive.