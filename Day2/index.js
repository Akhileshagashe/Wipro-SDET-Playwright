let a = "Akhilesh";
let b = "Sanskar";
let c = "Shyam";

let d = "Hello "+ a + ", "+ b +" and "+ c + "!"; // basic concatenation method
// console.log(d);

let e = `Hello ${a}, ${b} and ${c}!`; // using template literals

function table(num){
    let result = "";
    for(let i=1; i<=10; i++){
        result += `${num} x ${i} = ${num*i}\n`;
    }
    return result;
}


let sum = (x,y) => x+y; // using arrow function
console.log("Sum of 5 and 10:",sum(5,10));


let arr = [1,2,"Akhilesh",4,5];

arr.filter(x => typeof x === "number").map(x => x*5).forEach(x => console.log(x)); 