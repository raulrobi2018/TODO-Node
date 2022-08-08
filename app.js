// const argv = require("./config/yargs").argv;
// const toDo = require("./to-do/to-do");
import colors from "colors";
import {guardarDB, leerDB} from "./helpers/guardarArchivo.js";
import {inquirerMenu, leerInput, pausa} from "./helpers/inquirer.js";
import {mostrarMenu} from "./mensajes.js";
import {Tareas} from "./models/tareas.js";

console.clear();

const main = async () => {
    let opt = "";
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasDesdeArray(tareasDB);
    }

    do {
        //Esperamos a que tengamos resuelto el menú para imprimir en pantalla
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const desc = await leerInput("Descripción: ");
                tareas.crearTarea(desc);
                guardarDB(JSON.stringify(tareas.list));
                break;
            case "2":
                tareas.listadoCompleto(null);
                break;
            case "3":
                tareas.listadoCompleto(true);
                break;
            case "4":
                tareas.listadoCompleto(false);
                break;

            default:
                break;
        }

        if (opt !== "7") {
            await pausa();
        }
    } while (opt !== "7");
};

main();
