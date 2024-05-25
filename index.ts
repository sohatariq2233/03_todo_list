import inquirer from "inquirer"

let todoList = []
let conditions = true
console.log("\n \t Welcome to Todo-List Application \n")

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task: "
        }
    ])
    todoList.push(addTask.task)
    console.log(`${addTask.task} Task added to Todo-List Successfully`)

    let addMore = await inquirer.prompt([
        {
            name: "add",
            type: "confirm",
            message: "Do you want to add more task ? ",
            default: "false"
        }
    ])
    conditions = addMore.add
}
console.log(`Your updated Todo-List:, todoList`)