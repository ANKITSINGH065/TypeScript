In TypeScript, the `extends` and `super` keywords are used to implement inheritance between classes. Let's explore how these keywords work in the context of class inheritance:

### 1. `extends` Keyword:

The `extends` keyword is used to create a subclass (child class) that inherits properties and methods from a superclass (parent class).

```typescript
class Animal {
    // Properties
    name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Method
    makeSound(): void {
        console.log("Generic animal sound");
    }
}

// Subclass (inherits from Animal)
class Dog extends Animal {
    // Additional property
    breed: string;

    // Constructor
    constructor(name: string, breed: string) {
        // Calling the constructor of the base class (Animal)
        super(name);
        this.breed = breed;
    }

    // Overriding method
    makeSound(): void {
        console.log("Woof! Woof!");
    }

    // New method in Dog class
    bark(): void {
        console.log("Bark! Bark!");
    }
}

// Creating an object of the subclass
const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.name);    // Outputs: Buddy
console.log(myDog.breed);   // Outputs: Labrador
myDog.makeSound();          // Outputs: Woof! Woof!
myDog.bark();               // Outputs: Bark! Bark!
```

In this example, `Dog` is a subclass that extends the `Animal` superclass. The `extends` keyword establishes the inheritance relationship, and the `super` keyword is used to call the constructor of the base class (`Animal`) from within the constructor of the derived class (`Dog`).

### 2. `super` Keyword:

The `super` keyword is used to call methods or access properties of the superclass from within the subclass.

In the example above, `super(name)` is used in the `Dog` class constructor to call the constructor of the `Animal` class, initializing the `name` property.

```typescript
// Constructor in Animal class
constructor(name: string) {
    this.name = name;
}

// Constructor in Dog class
constructor(name: string, breed: string) {
    // Calling the constructor of the base class (Animal)
    super(name);
    this.breed = breed;
}
```

The `super.makeSound()` or `super.propertyName` syntax can also be used within a subclass method to call the corresponding method or access the property from the superclass.

```typescript
class Dog extends Animal {
    // ...

    // Overriding method
    makeSound(): void {
        // Calling the makeSound method of the base class (Animal)
        super.makeSound();

        // Adding additional behavior
        console.log("Woof! Woof!");
    }
}
```

Using `super` ensures that the overridden method in the subclass can still invoke the behavior of the superclass method.

In summary, `extends` establishes the inheritance relationship, and `super` is used to call methods or access properties of the superclass from within the subclass in TypeScript.