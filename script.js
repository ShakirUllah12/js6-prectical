// Remove extra spaces from the string
const str1 = " Hello World ".trim();

// Get substring from index 5 to 10
const substr1 = "Hello World".substring(5, 10);

// Extract first 5 characters
const first5 = "Hello World".substring(0, 5);

// Split string "hello-world" into an array using hyphen as separator
const arr = "hello-world".split("-");

// Join array ["hello", "world"] into a string with space separator
const joinedStr = ["hello", "world"].join(" ");

// Find index of character "o" in "Hello World"
const index = "Hello World".indexOf("o");

console.log(str1);      // Output: "Hello World"
console.log(substr1);   // Output: " World"
console.log(first5);    // Output: "Hello"
console.log(arr);       // Output: ["hello", "world"]
console.log(joinedStr); // Output: "hello world"
console.log(index);     // Output: 4
