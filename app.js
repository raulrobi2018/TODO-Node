const argv = require("./config/yargs").argv;
const toDo = require("./to-do/to-do");

const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case "create":
        let todo = toDo.create(argv.description);
        break;
    case "list":
        let list = toDo.getListado();
        console.log(list);
        for (let todo of list) {
            console.log('==========TODO List==========='.green);
            console.log(todo.description);
            console.log('Estado', todo.complete);
            console.log('=============================='.green);
        }
        break;
    case "update":
        console.log("Update all the TODO pending");
        break;
    default:
        console("The command is not valid");
        break;
}
