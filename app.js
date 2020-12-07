const argv = require("./config/yargs").argv;
const toDo = require("./to-do/to-do");

let comando = argv._[0];

switch (comando) {
    case "create":
        let todo = toDo.create(argv.description);
        console.log(todo);
        break;
    case "list":
        console.log("List all the TODO pending");
        break;
    case "update":
        console.log("Update all the TODO pending");
        break;
    default:
        console("The command is not valid");
        break;
}
