import inquirer from "inquirer";
import colors from "colors";

const questions = [
    {
        type: "list",
        name: "option",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: "1. Crear tarea"
            },
            {
                value: "2",
                name: "2. Listar tareas"
            },
            {
                value: "3",
                name: "3. Listar tareas completadas"
            },
            {
                value: "4",
                name: "4. Listar tareas pendientes"
            },
            {
                value: "5",
                name: "5. Completar tareas"
            },
            {
                value: "6",
                name: "6. Borrar tarea"
            },
            {
                value: "7",
                name: "7. Salir"
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("===============================".green);
    console.log("  Seleccione una opción   ".green);
    console.log("===============================\n".green);

    const {option} = await inquirer.prompt(questions);

    return option;
};

const pausa = async () => {
    console.log("\n");
    await inquirer.prompt({
        type: "input",
        name: "question",
        message: `\nPresione ${"ENTER".green} para continuar\n`
    });
};

export {inquirerMenu, pausa};
