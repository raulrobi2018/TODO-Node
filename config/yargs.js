const description = {
        demand: true,
        alias: "d",
        desc: "Description of the tasks TODO"
};

const complete = {
        alias: "c",
        default: true,
        desc: "Sets the task as complete"
};

const argv = require("yargs")
    .command("create", "Creates a new list of TODO's", {
        description
    })
    .command("list", "Lists all of the task to do")
    .command("update", "Update the list of TODO's", {
        description, complete
    })
    .command("delete", "Deletes a todo from the list", {
        description
    })
    .help().argv;

module.exports = {
    argv
};
