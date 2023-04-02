let input = prompt("What would you like to do ?");

let todo = [];

while (input !== "quit") {
    if (input === "new") {
        let newTodo = prompt("Enter a new todo");
        todo.push(newTodo);
    }

    else if (input === "list") {
        for (let index = 0; index < todo.length; index++) {
            console.log(`${index} : ${todo[index]}`);
        }
    }

    else if (input === "delete") {
        let delIndex = parseInt(prompt("Enter the index of todo to be deleted"));
        // while (delIndex < todo.length) {
        //     delIndex = prompt("Enter the index of todo to be deleted");
        // }

        todo = todo.splice(delIndex, 1);
    }

    input = prompt("What would you like to do ?");
}

console.log("EXITED SUCCESSFULLY");