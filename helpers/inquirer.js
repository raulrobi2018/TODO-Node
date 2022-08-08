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
                name: `${"1.".green} Crear tarea`
            },
            {
                value: "2",
                name: `${"2.".green} Listar tareas`
            },
            {
                value: "3",
                name: `${"3.".green} Listar tareas completadas`
            },
            {
                value: "4",
                name: `${"4.".green} Listar tareas pendientes`
            },
            {
                value: "5",
                name: `${"5.".green} Completar tareas`
            },
            {
                value: "6",
                name: `${"6.".green} Borrar tarea`
            },
            {
                value: "7",
                name: `${"7.".green} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("===============================".green);
    console.log("  Seleccione una opción   ".white);
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

const leerInput = async (message) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Ingrese un valor";
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((t, index) => {
        return {value: t.id, name: `${index + 1} `.green + t.desc};
    });

    const preguntas = [{type: "list", name: "id", message: "Borrar", choices}];

    const {id} = await inquirer.prompt(preguntas);
    return id;
};

export {inquirerMenu, pausa, leerInput, listadoTareasBorrar};
