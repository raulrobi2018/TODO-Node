const fs = require("fs");

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error("Unable to save the todo");
        }
    });
};

const create = (description) => {
    let toDo = {
        description,
        complete: false
    };

    toDoList.push(toDo);
    saveDB();

    return toDo;
};

module.exports = {
    create
};
