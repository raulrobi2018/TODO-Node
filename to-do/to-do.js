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

const loadDB = () => {
    try {
        //The require commando automatically converts the JSON data to a javascript object
        toDoList = require("../db/data.json");
    } catch (error) {
        toDoList = [];
    }
};

const create = (description) => {
    let toDo = {
        description,
        complete: false
    };

    loadDB();

    toDoList.push(toDo);
    saveDB();

    return toDo;
};

const getList = () => {
    loadDB();
    return toDoList;
};

const updateTodo = (description, completeState) => {
    loadDB();
    let index = toDoList.findIndex((todo) => todo.description === description);

    if (index >= 0) {
        toDoList[index].complete = completeState;
        saveDB();
        return true;
    } else {
        return false;
    }
};

const deleteTodo = (description) => {
    loadDB();
    let index = toDoList.findIndex((todo) => todo.description === description);

    if (index >= 0) {
        toDoList.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    create,
    getList,
    updateTodo,
    deleteTodo
};
