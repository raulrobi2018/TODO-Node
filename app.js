const argv = require("./config/yargs").argv;
const toDo = require("./to-do/to-do");

const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case "create":
        let todo = toDo.create(argv.description);
        break;
    case "list":
        let list = toDo.getList();
        for (let todo of list) {
            console.log("==========TODO List===========".green);
            console.log(todo.description);
            console.log("Estado", todo.complete);
            console.log("==============================".green);
        }
        break;
    case "update":
        let updated = toDo.updateTodo(argv.description, argv.complete);
        break;
    case "delete":
        let deleted = toDo.deleteTodo(argv.description);
        break;
    default:
        console("The command is not valid");
        break;
}
