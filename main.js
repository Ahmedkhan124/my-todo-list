#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log('welcome to my todo list');
while (condition === true) {
    let option = await inquirer.prompt([
        {
            name: "userOption",
            type: "list",
            message: "select an option",
            choices: ["Add", "remove"]
        }
    ]);
    // if user select add option:
    if (option.userOption === "Add") {
        let ans = await inquirer.prompt([
            {
                name: "userAns",
                type: "input",
                message: "\nwrite something to add in the list.\n"
            }
        ]);
        if (ans.userAns !== '') {
            todos.push(ans.userAns);
            console.log(todos);
        }
        else {
            console.log("\nPlease write something to add in the todo list\n");
        }
    }
    // if user select remove option:
    else if (option.userOption === "remove") {
        let removechoice = await inquirer.prompt([
            {
                name: "removeItem",
                type: "list",
                message: "\nselect item to remove\n",
                choices: todos
            }
        ]);
        let indexRemove = todos.indexOf(removechoice.removeItem);
        if (indexRemove >= 0) {
            todos.splice(indexRemove, 1);
            console.log('\nyou remove: \n', removechoice.removeItem);
            console.log(todos);
        }
    }
    // if user want to continue or not?
    let userAns = await inquirer.prompt([
        {
            name: "selection",
            type: "confirm",
            message: "\nDo you want to continue?\n",
            default: true,
        }
    ]);
    if (userAns.selection === false) {
        condition = false;
    }
}
// 
console.log("\nThankyou so much for using my todo list");
