/**
 * Ejemplo:
 * _listado:
 * {'uuid-123712-132123-2: {id: 12, desc: asd, completadoEn: 921321}},
 * {'uuid-123712-132123-2: {id: 12, desc: asd, completadoEn: 921321}},
 * {'uuid-123712-132123-2: {id: 12, desc: asd, completadoEn: 921321}},
 */

import {Tarea} from "./tarea.js";
import colors from "colors";

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get list() {
        return Object.values(this._listado);
    }

    cargarTareasDesdeArray(tareas = []) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto() {
        this.list.forEach((tarea, index) => {
            const {desc, completadaEn} = tarea;
            console.log(
                `${index + 1}. `.green +
                    `${desc}`.white +
                    ` -> ${completadaEn ? "Completada".blue : "Pendiente".red}`
            );
        });
    }
}

export {Tareas};
