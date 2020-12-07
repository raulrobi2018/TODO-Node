const argv = require("./config/yargs");

let comando = argv._[0];

switch (comando) {
    case "create":
        console.log("Create TODO");
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
