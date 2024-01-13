In TypeScript, static properties and methods are associated with the class itself rather than with instances of the class. They are defined using the `static` keyword. Static members are accessible directly on the class, without the need to create an instance of the class.

### Static Properties:

Static properties are shared among all instances of a class. They are defined using the `static` keyword:

```typescript
class MathOperations {
    // Static property
    static PI: number = 3.14159;

    // Regular instance property
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Static method
    static calculateCircumference(radius: number): number {
        return 2 * MathOperations.PI * radius;
    }
}

// Accessing static property directly on the class
console.log(MathOperations.PI); // Outputs: 3.14159

const circle = new MathOperations(5);
console.log(circle.radius);      // Outputs: 5

// Accessing static method directly on the class
const circumference = MathOperations.calculateCircumference(5);
console.log(circumference);     // Outputs: 31.4159
```

In this example, `PI` is a static property that is shared among all instances of `MathOperations`. The static method `calculateCircumference` does not require an instance and can be called directly on the class.

### Static Methods:

Static methods are methods that are associated with the class itself, not with instances of the class. They are defined using the `static` keyword:

```typescript
class Logger {
    // Static method
    static logMessage(message: string): void {
        console.log(`[LOG] ${message}`);
    }

    // Regular instance method
    logError(error: string): void {
        console.error(`[ERROR] ${error}`);
    }
}

// Calling static method directly on the class
Logger.logMessage("Application started");

const loggerInstance = new Logger();
// Calling instance method on an instance of the class
loggerInstance.logError("Critical error occurred");
```

In this example, `logMessage` is a static method that can be called directly on the class. The instance method `logError` requires an instance of the class.

### Use Cases for Static Members:

1. **Constants:** Static properties can be used to define constants associated with a class.

2. **Utility Functions:** Static methods can be used to define utility functions that are related to the class but do not depend on specific instances.

3. **Factory Methods:** Static methods can be used as factory methods to create instances of a class.

4. **Singleton Pattern:** Static properties and methods can be used to implement the Singleton pattern.

```typescript
class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Outputs: true
```

In this example, `getInstance` is a static method that ensures only one instance of the `Singleton` class is created.

Static properties and methods in TypeScript provide a way to associate functionality with a class itself, rather than with instances of the class. They are useful in various scenarios, including constants, utility functions, and patterns like the Singleton pattern.