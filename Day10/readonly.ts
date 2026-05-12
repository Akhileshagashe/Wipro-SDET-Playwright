// const user = {
//     id: 21,
//     name: "Akhilesh",
//     age: 24
// } as const;

// // user.name = "Sanskar";
// console.log(user);


interface Task {
    readonly title: string;
    completed: boolean;
}

const myTask: Readonly<Task> = {
    title: "Do Homework",
    completed: true
}

const myTask1: Task = {
    title: "Do Homework",
    completed: true
}

// myTask.completed = false;

console.log(myTask);
console.log(myTask1);

const scores: ReadonlyArray<number> = [10, 20, 30];
console.log(scores[0]);