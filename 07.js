// Strings are not immutable in all programming languages, but they are immutable in many popular ones. Here are some examples:
// Languages with Immutable Strings:>>>>>>>
// Java: Strings are immutable. Once a String object is created, it cannot be changed.
// Python: Strings are immutable. Any operation that modifies a string will create a new string.
// C#: Strings are immutable.Similar to Java, any modification creates a new string.
// JavaScript: Strings are immutable.Methods that manipulate strings return new strings.

// Languages with Mutable Strings->>>>>>>>>>
// C: Uses character arrays (char[]) which are mutable.
// C++: The std::string class is mutable. You can change individual characters or use methods that modify the string in place.
// Ruby: Strings are mutable by default, but immutable strings can be created using frozen string literals.
// Perl: Strings are mutable.You can modify strings directly using various functions.
    
// Conclusion:>>>>>>>>>>
//     Whether strings are immutable or mutable depends on the design decisions of the language creators.Immutable strings can offer benefits in terms of simplicity, security, and performance optimizations(such as string interning and sharing), while mutable strings can be more flexible and efficient for certain types of operations.

// method of js -------------->
// 1. String Length javascript
// let str = "java, Script!!";
// console.log(str.length); // Outputs: 13

// 2. Accessing Characters
// javascript
// let str = "New, World!";
// console.log(str.charAt(0)); // Outputs: N
// console.log(str[0]);        // Outputs: N (alternative method)

// 3. Changing Case
// let str = "Hello, World!";
// console.log(str.toUpperCase()); // Outputs: HELLO, WORLD!
// console.log(str.toLowerCase()); // Outputs: hello, world!

// 4. Finding Substrings
// let str = "Hello, World!";
// console.log(str.indexOf("World")); // Outputs: 7
// console.log(str.lastIndexOf("o")); // Outputs: 8
// console.log(str.includes("Hello")); // Outputs: true

// 5. Extracting Substrings
// let str = "Hello, World!";
// console.log(str.slice(0, 5));    // Outputs: Hello
// console.log(str.substring(0, 5)); // Outputs: Hello
// console.log(str.substr(0, 5));   // Outputs: Hello (deprecated)

// 6. Replacing Substrings
// let str = "Hello, World!";
// console.log(str.replace("World", "JavaScript")); // Outputs: Hello, JavaScript!

// 7. Splitting Strings

// let str = "Hello, World!";
// let arr = str.split(", ");
// console.log(arr); // Outputs: ["Hello", "World!"]

// 8. Trimming Strings
// let str = "   Hello, World!   ";
// console.log(str.trim()); // Outputs: Hello, World!

// 9. Concatenating Strings
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(", ", str2)); // Outputs: Hello, World

// 10. Repeat Strings
// let str = "Hello";
// console.log(str.repeat(3)); // Outputs: HelloHelloHello

// 11. Template Literals
// Template literals provide an easy way to create multi-line strings and concatenate variables.
// let name = "World";
// let greeting = `Hello, ${name}!`;
// console.log(greeting); // Outputs: Hello, World!
// These methods can help you manipulate and work with strings effectively in JavaScript.

// method to work with the string
// trim()
// toUpperCase()
// toLowerCase()
// slice
let firstName = "Abhishek";
console.log(firstName.length); output: 15 //(includes space as 1 charcater )
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length)
console.log(firstName.toUpperCase()); // for upper case 
console.log(firstName.toLowerCase()); // for lower case
console.log(firstName.slice(0,4));
