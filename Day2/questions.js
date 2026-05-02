// First question

let list = ["Akhilesh", "Sanskar", "Aditya", "Shyam"];

function formatguests(names){
    return names.slice(1).map(name => `Guest: ${name}`).join("\n");
}
console.log(formatguests(list));

// Second question

let arr = [10, "20", 45, 60, "hello", 5, 80];

let getHighNumbers = (num) => {
    const threshold = Math.floor(Math.random() * 50) + 1;
    
    return num.filter(x => typeof x === "number" && x > threshold); 
}
console.log("High numbers:", getHighNumbers(arr));

// Third question

const prices = ["10","20","50","5"];
const handlingFee = prices.splice(-1)[0];
const num = prices.map(x => Number(x));
const sum = num.reduce((total,num)=> total + num, 0);
console.log(`Total Price: ${sum}`);
