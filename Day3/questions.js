// First question 
// Given an array const names = ['Alice', 'Bob', 'Charlie'];, use .forEach() to log each name to the console with the prefix "Hello, ".

const names = ['Alice', 'Bob', 'Charlie'];

const res = names.forEach(name => {
    console.log("Hello" ,name);
});


// Second question
//You have an array of temperatures in Celsius: [0, 10, 20, 30]. Use .map() to create a new array where each temperature is converted to Fahrenheit.

const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 1.8) + 32);
console.log("Fahrenheit temperatures:", fahrenheit);

// Third question
// Given an array of objects: const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }]; Use .filter() to create a new array containing only the users who are 18 or older.

const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
const adults = users.filter(user => user.age >= 18);
console.log("Adult users:", adults);

// Fourth question
// Write a function that takes an array of strings and uses .filter() to return only the strings that have more than 5 characters.

const namesssss = [Akhilesh, Aditya, Shyam, Sanskar];

function filterString(arr){
    return arr.filter(x => x.length > 5);
}
console.log(filterString(namesssss));



// Fifth question
// Given an array of prices [19.99, 5.50, 3.99, 25.00], use .reduce() to calculate the total sum of the items.

const prices = [19.99, 5.50, 3.99, 25.00];
const sum = prices.reduce((total, price)=> total + price, 0);
console.log("Total price:", sum);


// Sixth question
// Use .reduce() to count how many times the word "apple" appears in this array: ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'].

const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const Count = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log("Fruit counts:", Count);



// Seventh question
// Given an array of numbers [1, 2, 3, 4, 5, 6], use a combination of .filter() and .map() to:
// 1. Keep only the even numbers.
// 2. Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).

const num = [1, 2, 3, 4, 5, 6];
const result  = num.filter(x => x % 2 === 0).map(x => x * x);
console.log("Squared even numbers:", result);


//  Eighth question
// You have an array of "Product" objects: [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }] Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].

const Product = [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }];
const title =  Product.map(x => x.title);
console.log("Product titles:", title);


// Ninth question
// Write a short script using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].

const marks = [80, 90, 70, 100];
const average = marks.reduce((total, mark) => total + mark, 0) / marks.length;
console.log("Average mark:", average);


// Tenth question
// Without using the built-in .flat() method, use .reduce() to turn this nested array into a single flat array: [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flat array:", flat);