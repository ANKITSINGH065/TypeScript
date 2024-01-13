In TypeScript, getters and setters are special methods that allow you to control access to the properties of a class. They enable you to encapsulate the internal representation of an object and provide a way to read and write its properties in a controlled manner.

### Getter:

A getter is a method that is used to get the value of a private property. It is defined using the `get` keyword.

```typescript
class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    // Getter for radius
    get radius(): number {
        return this._radius;
    }

    // Method to calculate area
    calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.radius);        // Using the getter to access the private property
console.log(myCircle.calculateArea()); // Outputs: 78.54
```

In this example, `get radius()` is a getter method for the private property `_radius`. It allows external code to access the value of `_radius` using the syntax `myCircle.radius`.

### Setter:

A setter is a method that is used to set the value of a private property. It is defined using the `set` keyword.

```typescript
class Square {
    private _sideLength: number;

    constructor(sideLength: number) {
        this._sideLength = sideLength;
    }

    // Setter for sideLength
    set sideLength(value: number) {
        if (value > 0) {
            this._sideLength = value;
        } else {
            console.log("Invalid side length");
        }
    }

    // Method to calculate area
    calculateArea(): number {
        return this._sideLength * this._sideLength;
    }
}

const mySquare = new Square(4);
mySquare.sideLength = 5;        // Using the setter to modify the private property
console.log(mySquare.calculateArea()); // Outputs: 25
```

In this example, `set sideLength(value: number)` is a setter method for the private property `_sideLength`. It allows external code to modify the value of `_sideLength` using the syntax `mySquare.sideLength = 5`. The setter includes a validation check to ensure that the new value is valid.

### Benefits of Getters and Setters:

1. **Encapsulation:** Getters and setters allow you to encapsulate the internal state of an object and control how its properties are accessed and modified.

2. **Validation:** You can include validation logic in setters to ensure that the assigned values meet certain criteria.

3. **Computed Properties:** Getters can be used to calculate and return a value based on the internal state of the object.

Using getters and setters promotes a clean and controlled interface for interacting with the properties of a class in TypeScript.