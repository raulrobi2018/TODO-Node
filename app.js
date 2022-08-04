// const argv = require("./config/yargs").argv;
// const toDo = require("./to-do/to-do");
import colors from "colors";
import {inquirerMenu, pausa} from "./helpers/inquirer.js";
import {mostrarMenu} from "./mensajes.js";

// let comando = argv._[0];

// switch (comando) {
//     case "create":
//         let todo = toDo.create(argv.description);
//         break;
//     case "list":
//         let list = toDo.getList();
//         for (let todo of list) {
//             console.log("==========TODO List===========".green);
//             console.log(todo.description);
//             console.log("Estado", todo.complete);
//             console.log("==============================".green);
//         }
//         break;
//     case "update":
//         let updated = toDo.updateTodo(argv.description, argv.complete);
//         break;
//     case "delete":
//         let deleted = toDo.deleteTodo(argv.description);
//         break;
//     default:
//         console.log("The command is not valid");
//         break;
// }

console.clear();

const main = async () => {
    let opt = "";
    do {
        //Esperamos a que tengamos resuelto el menú
        opt = await inquirerMenu();
        console.log({opt});
        await pausa();
    } while (opt !== "7");
};

main();
