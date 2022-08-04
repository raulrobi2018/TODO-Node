import inquirer from "inquirer";
import colors from "colors";

const questions = [
    {
        type: "list",
        name: "option",
        message: "¿Qué desea hacer?",
        choices: ["opt1", "opt2", "opt3"]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("===============================".green);
    console.log("  Seleccione una opción   ".green);
    console.log("===============================\n".green);

    const opt = await inquirer.prompt(questions);

    return opt;
};

export {inquirerMenu};
