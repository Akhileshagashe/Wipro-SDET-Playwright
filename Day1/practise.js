// First Question

let a = 10;
let b = 2;

let temp = a;
a = b;
b = temp;
console.log("Value of a after swapping: ", a);
console.log("Value of b after swapping: ", b);


// Second Question

function typecheck(input){
    if (input === null){
        log("This is null");
    }
    else if (Array.isArray(input)){
        console.log("This is an array");
    }
    else{
        console.log(`This is a ${typeof input}`);
    }
}
typecheck([1, 2, 3]);


// Third Question

let fullName  = "John Doe";






// Fourth Question

let messy = " JavaScript is Fun ";
let cleaned = messy.trim();
cleaned = cleaned.toLowerCase();
console.log(cleaned);


// Fifth Question

let cart = ["water","bread", "fruits"];
cart.unshift("eggs");
cart.push("milk");
cart.pop();
console.log(cart);


// Sixth Question

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == 30){
        console.log(true);
    }
    else{
        console.log(false);    
    }
}
console.log(numbers.indexOf(50));
