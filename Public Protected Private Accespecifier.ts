In TypeScript, access modifiers (`public`, `protected`, and `private`) are used to control the visibility of class members (properties and methods). These modifiers help in enforcing encapsulation and defining the level of access that other classes have to certain members. Here's how they work:

### 1. `public`:

The `public` modifier is the default and is accessible from anywhere, both within the class and from outside the class.

```typescript
class Animal {
    // Public property
    public name: string;

    // Public method
    public makeSound(): void {
        console.log("Generic animal sound");
    }
}

const myAnimal = new Animal();
myAnimal.name = "Leo";       // Accessing public property
myAnimal.makeSound();        // Calling public method
```

### 2. `protected`:

The `protected` modifier allows access within the class and its subclasses. It restricts access from outside the class.

```typescript
class Animal {
    // Protected property
    protected name: string;

    // Protected method
    protected makeSound(): void {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    // Accessing protected property from the subclass
    bark(): void {
        console.log(`${this.name} says Woof! Woof!`);
    }

    // Overriding protected method from the superclass
    makeSound(): void {
        super.makeSound();
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog();
myDog.name = "Buddy";        // Cannot access protected property directly
myDog.makeSound();           // Calling protected method through subclass
myDog.bark();                // Accessing protected property and method from the subclass
```

### 3. `private`:

The `private` modifier restricts access to the class that defines the member. It is not accessible from outside the class or its subclasses.

```typescript
class BankAccount {
    // Private property
    private balance: number;

    // Private method
    private deductFee(): void {
        this.balance -= 5;
    }

    // Public method
    public withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.deductFee();   // Accessing private method from within the class
        } else {
            console.log("Insufficient funds");
        }
    }
}

const myAccount = new BankAccount();
myAccount.balance = 100;      // Cannot access private property directly
myAccount.withdraw(20);       // Accessing public method, which calls private method
```

Using these access modifiers helps in designing classes with clear boundaries and reduces the chances of unintended access or modification of class members. It promotes encapsulation and helps create more maintainable and secure code.