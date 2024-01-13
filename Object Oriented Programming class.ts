TypeScript is a superset of JavaScript that adds static typing and other features to the language. Object-oriented programming (OOP) principles are fully supported in TypeScript. Let's explore the key concepts of OOP in TypeScript:

### 1. **Classes and Objects:**
   - TypeScript allows you to define classes using the `class` keyword. Classes can have properties and methods.
  
   ```typescript
   class Person {
       // Properties
       firstName: string;
       lastName: string;

       // Constructor
       constructor(firstName: string, lastName: string) {
           this.firstName = firstName;
           this.lastName = lastName;
       }

       // Method
       getFullName(): string {
           return `${this.firstName} ${this.lastName}`;
       }
   }

   // Creating an object
   const person = new Person("John", "Doe");
   console.log(person.getFullName()); // Outputs: John Doe
   ```

### 2. **Inheritance:**
   - TypeScript supports class inheritance, allowing a class to inherit properties and methods from another class.

   ```typescript
   class Student extends Person {
       // Additional property
       studentId: number;

       // Constructor
       constructor(firstName: string, lastName: string, studentId: number) {
           super(firstName, lastName); // Calling the constructor of the base class
           this.studentId = studentId;
       }
   }

   // Creating a derived object
   const student = new Student("Alice", "Smith", 123);
   console.log(student.getFullName()); // Outputs: Alice Smith
   ```

### 3. **Encapsulation:**
   - TypeScript supports encapsulation by using access modifiers (`public`, `private`, and `protected`). This controls the visibility of properties and methods.

   ```typescript
   class BankAccount {
       private balance: number;

       constructor(initialBalance: number) {
           this.balance = initialBalance;
       }

       // Public method to get the balance
       getBalance(): number {
           return this.balance;
       }

       // Public method to deposit money
       deposit(amount: number): void {
           this.balance += amount;
       }

       // Public method to withdraw money
       withdraw(amount: number): void {
           if (amount <= this.balance) {
               this.balance -= amount;
           } else {
               console.log("Insufficient funds");
           }
       }
   }

   // Creating an object
   const account = new BankAccount(1000);
   account.deposit(500);
   account.withdraw(200);
   console.log(account.getBalance()); // Outputs: 1300
   ```

### 4. **Polymorphism:**
   - TypeScript supports polymorphism, where a class can have multiple methods with the same name but different parameter types or numbers.

   ```typescript
   class Calculator {
       add(x: number, y: number): number {
           return x + y;
       }

       add(x: string, y: string): string {
           return x + y;
       }
   }

   // Creating an object
   const calculator = new Calculator();
   console.log(calculator.add(2, 3));       // Outputs: 5
   console.log(calculator.add("2", "3"));   // Outputs: "23"
   ```

### 5. **Interfaces:**
   - TypeScript interfaces define the structure that classes must adhere to. They are used to define contracts for class implementations.

   ```typescript
   interface Shape {
       area(): number;
   }

   class Circle implements Shape {
       radius: number;

       constructor(radius: number) {
           this.radius = radius;
       }

       area(): number {
           return Math.PI * this.radius * this.radius;
       }
   }

   // Creating an object
   const circle = new Circle(5);
   console.log(circle.area()); // Outputs: 78.54
   ```

These are the fundamental concepts of Object-Oriented Programming in TypeScript. Leveraging these features allows developers to write modular, reusable, and maintainable code.