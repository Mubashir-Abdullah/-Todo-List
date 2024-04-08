#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let Conditions = true;
let main = async () => {
    while (Conditions) {
        let option = await inquirer.prompt([
            {
                name: "Choice",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Delet Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.Choice === "Add Task") {
            await addTask();
        }
        else if (option.Choice === "Delet Task") {
            await deletTask();
        }
        else if (option.Choice === "Update Task") {
            await updateTask();
        }
        else if (option.Choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.Choice === "Exit") {
            Conditions = false;
        }
    }
};
// Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added succesfully in Todo-List\n`);
};
// Function to view all todo-list  Task
let viewTask = () => {
    console.log("\n Your Todo-list:\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
    console.log("\n");
};
//Function  to  delet a task  from the list
let deletTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "Index",
            type: "number",
            message: "Enter the 'index no.' of the task you  want to delet :"
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This task has  been deleted successfully from your Todo-List\n`);
};
//function to update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number the task you want to update :"
        },
        {
            name: "new_Task",
            type: "input",
            message: "Now Enter  new Task name:",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_Task;
    console.log(`\n Task at index no .${update_task_index - 1}update  successdully [for updated list check "view Todo-List"]`);
};
main();
