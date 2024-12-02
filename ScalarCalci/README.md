
# calarcalci

A simple and efficient calculator module to perform basic arithmetic operations in JavaScript.

## Installation

You can install `calarcalci` via npm:

```bash
npm install calarcalci
```

## Usage

After installation, import and use `calarcalci` in your project:

```javascript
const calarcalci = require('calarcalci');

// Basic arithmetic operations
const addition = calarcalci.add(5, 10);
console.log(`Addition: ${addition}`); // Output: 15

const subtraction = calarcalci.subtract(15, 5);
console.log(`Subtraction: ${subtraction}`); // Output: 10

const multiplication = calarcalci.multiply(3, 5);
console.log(`Multiplication: ${multiplication}`); // Output: 15

const division = calarcalci.divide(15, 3);
console.log(`Division: ${division}`); // Output: 5
```

## Functions

- **add(num1, num2)**: Returns the sum of two numbers.
- **subtract(num1, num2)**: Returns the difference between two numbers.
- **multiply(num1, num2)**: Returns the product of two numbers.
- **divide(num1, num2)**: Returns the quotient of two numbers. If `num2` is 0, it will throw an error to avoid division by zero.

## Examples

### Addition
```javascript
const sum = calarcalci.add(4, 7); // Output: 11
```

### Subtraction
```javascript
const difference = calarcalci.subtract(10, 3); // Output: 7
```

### Multiplication
```javascript
const product = calarcalci.multiply(6, 8); // Output: 48
```

### Division
```javascript
const quotient = calarcalci.divide(20, 4); // Output: 5
```

## Error Handling

The `divide` function will throw an error if the divisor is zero:

```javascript
try {
    const result = calarcalci.divide(10, 0);
} catch (error) {
    console.error("Cannot divide by zero!");
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
