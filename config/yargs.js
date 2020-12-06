const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
};

const argv = require("yargs")
    .command("create", "Creates a new list of TODO's", opts)
    .command("list", "Lists all of the task to do", opts)
    .command("update", "Update the list of TODO's", opts)
    .help().argv;

module.exports = {
    argv
};
