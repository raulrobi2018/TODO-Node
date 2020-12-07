const optDesc = {
    description: {
        demand: true,
        alias: "d",
        desc: "Description of the tasks TODO"
    }
};

const optComplete = {
    complete: {
        alias: "c",
        default: true,
        desc: "Sets the task as complete"
    }
};

const argv = require("yargs")
    .command("create", "Creates a new list of TODO's", {
        description: {
            demand: true,
            alias: "d",
            desc: "Description of the tasks TODO"
        }
    })
    .command("list", "Lists all of the task to do", {
        description: {
            demand: true,
            alias: "d",
            desc: "Description of the tasks TODO"
        },
        complete: {
            alias: "c",
            default: true,
            desc: "Sets the task as complete"
        }
    })
    // .command("update", "Update the list of TODO's", opts)
    .help().argv;

module.exports = {
    argv
};
