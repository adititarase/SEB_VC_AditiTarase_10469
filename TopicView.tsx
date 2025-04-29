import React from 'react';
import styled from 'styled-components';

const TopicContainer = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

const TopicHeader = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
`;

const TopicContent = styled.div`
  color: ${props => props.theme.text};
  line-height: 1.6;
  font-size: 1.1rem;

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  code {
    background-color: ${props => props.theme.buttonBg};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Consolas', monospace;
  }

  pre {
    background-color: ${props => props.theme.buttonBg};
    padding: 1rem;
    border-radius: 6px;
    margin: 1rem 0;
    overflow-x: auto;

    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;

interface TopicViewProps {
  topic?: string;
}

const topics: Record<string, { title: string; content: React.ReactNode }> = {
  'getting-started': {
    title: 'Getting Started with Java',
    content: (
      <>
        <h2>Introduction</h2>
        <p>Java is a popular, versatile programming language used for developing a wide range of applications.</p>
        <h2>Your First Java Program</h2>
        <pre><code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</code></pre>
      </>
    )
  },
  'syntax': {
    title: 'Java Syntax',
    content: (
      <>
        <h2>Basic Syntax Rules</h2>
        <p>Java syntax includes class definitions, statements, and expressions. Every Java program must have at least one class and a main method.</p>
        <h2>Key Points</h2>
        <ul>
          <li>Class names start with uppercase letter</li>
          <li>Method names start with lowercase letter</li>
          <li>File name must match class name</li>
          <li>Each statement ends with a semicolon</li>
        </ul>
        <h2>Example</h2>
        <pre><code>{`public class MyProgram {
    public static void main(String[] args) {
        // This is a statement
        int x = 10;
        System.out.println(x);
    }
}`}</code></pre>
      </>
    )
  },
  'output': {
    title: 'Output and Printing in Java',
    content: (
      <>
        <h2>Print Methods</h2>
        <p>Java provides several ways to output text to the console:</p>
        <h2>Examples</h2>
        <pre><code>{`// Print with newline
System.out.println("Hello World!");

// Print without newline
System.out.print("Hello ");
System.out.print("World!");

// Formatted output
System.out.printf("Number: %d, Text: %s", 42, "Java");`}</code></pre>
        <h2>Format Specifiers</h2>
        <p>Common format specifiers:</p>
        <ul>
          <li>%d - integers</li>
          <li>%f - floating-point numbers</li>
          <li>%s - strings</li>
          <li>%b - booleans</li>
        </ul>
      </>
    )
  },
  'comments': {
    title: 'Comments in Java',
    content: (
      <>
        <h2>Types of Comments</h2>
        <p>Comments are used to explain code and make it more readable. Java supports three types of comments:</p>
        <pre><code>{`// Single-line comment

/* Multi-line comment
   Can span multiple lines */

/** Documentation comment
 * Used for generating documentation
 * @param args command line arguments
 */`}</code></pre>
        <h2>Best Practices</h2>
        <ul>
          <li>Use comments to explain complex logic</li>
          <li>Write clear and concise comments</li>
          <li>Update comments when code changes</li>
          <li>Use documentation comments for public methods</li>
        </ul>
      </>
    )
  },
  'variables': {
    title: 'Variables in Java',
    content: (
      <>
        <h2>What are Variables?</h2>
        <p>Variables are containers for storing data values. Java is a statically typed language, which means you must declare the type of variable.</p>
        <h2>Variable Declaration</h2>
        <pre><code>{`// Variable declaration
type variableName = value;

// Examples
int number = 5;
String text = "Hello";
double price = 19.99;
boolean isValid = true;`}</code></pre>
        <h2>Variable Naming Rules</h2>
        <ul>
          <li>Must start with letter, $ or _</li>
          <li>Can contain numbers</li>
          <li>Case-sensitive</li>
          <li>Cannot use reserved keywords</li>
        </ul>
      </>
    )
  },
  'datatypes': {
    title: 'Data Types in Java',
    content: (
      <>
        <h2>Primitive Data Types</h2>
        <p>Java has eight primitive data types:</p>
        <ul>
          <li>byte: 8-bit integer</li>
          <li>short: 16-bit integer</li>
          <li>int: 32-bit integer</li>
          <li>long: 64-bit integer</li>
          <li>float: 32-bit floating-point</li>
          <li>double: 64-bit floating-point</li>
          <li>boolean: true/false</li>
          <li>char: 16-bit Unicode character</li>
        </ul>
        <h2>Examples</h2>
        <pre><code>{`byte smallNumber = 127;
int number = 1000000;
double decimal = 19.99;
char letter = 'A';
boolean isTrue = true;`}</code></pre>
      </>
    )
  },
  'typecasting': {
    title: 'Type Casting in Java',
    content: (
      <>
        <h2>What is Type Casting?</h2>
        <p>Type casting is converting a value from one data type to another. There are two types of casting:</p>
        <h2>Widening Casting (Automatic)</h2>
        <pre><code>{`byte -> short -> int -> long -> float -> double

// Example
int myInt = 9;
double myDouble = myInt;  // Automatic casting`}</code></pre>
        <h2>Narrowing Casting (Manual)</h2>
        <pre><code>{`double -> float -> long -> int -> short -> byte

// Example
double myDouble = 9.78;
int myInt = (int) myDouble;  // Manual casting`}</code></pre>
      </>
    )
  },
  'operators': {
    title: 'Operators in Java',
    content: (
      <>
        <h2>Types of Operators</h2>
        <h3>Arithmetic Operators</h3>
        <pre><code>{`int a = 10, b = 5;
int sum = a + b;      // Addition
int diff = a - b;     // Subtraction
int product = a * b;  // Multiplication
int quotient = a / b; // Division
int remainder = a % b; // Modulus`}</code></pre>
        <h3>Comparison Operators</h3>
        <pre><code>{`boolean isEqual = a == b;    // Equal to
boolean notEqual = a != b;   // Not equal to
boolean greater = a > b;     // Greater than
boolean less = a < b;        // Less than
boolean greaterEqual = a >= b; // Greater than or equal
boolean lessEqual = a <= b;    // Less than or equal`}</code></pre>
        <h3>Logical Operators</h3>
        <pre><code>{`boolean and = (a > 0) && (b > 0);  // Logical AND
boolean or = (a > 0) || (b > 0);   // Logical OR
boolean not = !(a > 0);            // Logical NOT`}</code></pre>
      </>
    )
  },
  'if-else': {
    title: 'If...Else Statements in Java',
    content: (
      <>
        <h2>Conditional Statements</h2>
        <p>If...else statements are used to perform different actions based on different conditions.</p>
        <h2>Examples</h2>
        <pre><code>{`// Simple if statement
if (condition) {
    // code block
}

// If-else statement
if (condition) {
    // code if true
} else {
    // code if false
}

// If-else-if statement
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if all conditions are false
}`}</code></pre>
        <h2>Example with Real Code</h2>
        <pre><code>{`int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}`}</code></pre>
      </>
    )
  },
  'switch': {
    title: 'Switch Statements in Java',
    content: (
      <>
        <h2>Switch Statement</h2>
        <p>Switch statements are used to select one of many code blocks to be executed.</p>
        <h2>Basic Syntax</h2>
        <pre><code>{`switch(expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}`}</code></pre>
        <h2>Example</h2>
        <pre><code>{`int day = 4;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    default:
        System.out.println("Weekend");
}`}</code></pre>
      </>
    )
  },
  'loops': {
    title: 'Loops in Java',
    content: (
      <>
        <h2>Types of Loops</h2>
        <h3>For Loop</h3>
        <pre><code>{`// Basic for loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}`}</code></pre>
        <h3>While Loop</h3>
        <pre><code>{`int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}`}</code></pre>
        <h3>Do-While Loop</h3>
        <pre><code>{`int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);`}</code></pre>
      </>
    )
  },
  'break-continue': {
    title: 'Break and Continue Statements',
    content: (
      <>
        <h2>Break Statement</h2>
        <p>The break statement terminates the loop or switch statement.</p>
        <pre><code>{`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // Exit loop when i equals 5
    }
    System.out.println(i);
}`}</code></pre>
        <h2>Continue Statement</h2>
        <p>The continue statement skips the rest of the current iteration.</p>
        <pre><code>{`for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    System.out.println(i);
}`}</code></pre>
      </>
    )
  },
  'classes-objects': {
    title: 'Classes and Objects in Java',
    content: (
      <>
        <h2>Classes</h2>
        <p>A class is a blueprint for creating objects. It defines attributes and behaviors.</p>
        <pre><code>{`public class Car {
    // Attributes (fields)
    String brand;
    String model;
    int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method
    public void start() {
        System.out.println("The car is starting!");
    }
}`}</code></pre>
        <h2>Objects</h2>
        <pre><code>{`// Creating objects
Car myCar = new Car("Toyota", "Camry", 2022);

// Using object methods
myCar.start();`}</code></pre>
      </>
    )
  },
  'methods': {
    title: 'Methods in Java',
    content: (
      <>
        <h2>Method Declaration</h2>
        <p>Methods are blocks of code that perform specific tasks.</p>
        <pre><code>{`public returnType methodName(parameterType parameterName) {
    // method body
    return value;  // if return type is not void
}`}</code></pre>
        <h2>Examples</h2>
        <pre><code>{`// Method with return value
public int add(int a, int b) {
    return a + b;
}

// Void method (no return value)
public void printMessage(String message) {
    System.out.println(message);
}

// Static method
public static double calculateArea(double radius) {
    return Math.PI * radius * radius;
}`}</code></pre>
      </>
    )
  },
  'inheritance': {
    title: 'Inheritance in Java',
    content: (
      <>
        <h2>What is Inheritance?</h2>
        <p>Inheritance is a mechanism that allows a class to inherit attributes and methods from another class.</p>
        <h2>Example</h2>
        <pre><code>{`// Parent class
public class Animal {
    String name;
    
    public void eat() {
        System.out.println("I can eat.");
    }
}

// Child class
public class Dog extends Animal {
    public void bark() {
        System.out.println("I can bark!");
    }
}

// Using inheritance
Dog myDog = new Dog();
myDog.name = "Rover";  // Inherited field
myDog.eat();          // Inherited method
myDog.bark();         // Dog's own method`}</code></pre>
      </>
    )
  },
  'polymorphism': {
    title: 'Polymorphism in Java',
    content: (
      <>
        <h2>What is Polymorphism?</h2>
        <p>Polymorphism means "many forms" and occurs when we have many classes that are related to each other by inheritance.</p>
        <h2>Example</h2>
        <pre><code>{`// Parent class
class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
}

// Child classes
class Dog extends Animal {
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// Using polymorphism
Animal myDog = new Dog();
Animal myCat = new Cat();

myDog.makeSound();  // Outputs: Woof!
myCat.makeSound();  // Outputs: Meow!`}</code></pre>
      </>
    )
  }
};

const TopicView: React.FC<TopicViewProps> = ({ topic }) => {
  if (!topic || !topics[topic]) {
    return (
      <TopicContainer>
        <TopicHeader>Topic Not Found</TopicHeader>
        <TopicContent>
          <p>The requested topic could not be found.</p>
        </TopicContent>
      </TopicContainer>
    );
  }

  const { title, content } = topics[topic];

  return (
    <TopicContainer>
      <TopicHeader>{title}</TopicHeader>
      <TopicContent>{content}</TopicContent>
    </TopicContainer>
  );
};

export default TopicView; 