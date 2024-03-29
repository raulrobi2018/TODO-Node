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

    listadoCompleto(completada) {
        if (this.list.length === 0) {
            console.log("No hay tareas cargadas".white);
        } else {
            if (
                completada &&
                this.list.filter((t) => t.completadaEn).length === 0
            ) {
                console.log("No hay tareas completadas".white);
            } else if (
                !completada &&
                this.list.filter((t) => !t.completadaEn).length === 0
            ) {
                console.log("No hay tareas pendientes".white);
            } else {
                let index = 1;
                if (completada === null) {
                    this.list.forEach((t, index) => {
                        console.log(
                            `${index + 1}. `.green +
                                `${t.desc}`.white +
                                ` -> ${
                                    t.completadaEn
                                        ? "Completada".blue
                                        : "Pendiente".red
                                }`
                        );
                    });
                } else if (!completada) {
                    this.list.forEach((t) => {
                        if (!t.completadaEn) {
                            console.log(`${index}. `.red + `${t.desc}`.white);
                            index++;
                        }
                    });
                } else if (completada) {
                    this.list.forEach((t) => {
                        if (t.completadaEn) {
                            console.log(`${index}. `.green + `${t.desc}`.white);
                            index++;
                        }
                    });
                }
            }
        }
    }

    borrarTarea(id = "") {
        if (this._listado[id]) {
            delete this._listado[id];
            console.log("Tarea borrada correctamente");
        }
    }

    toggleCompletadas(ids = []) {
        ids.forEach((id) => {
            const tarea = this._listado[id];
            if (!tarea.completadaEn) {
                tarea.completadaEn = new Date().toISOString();
            }
        });

        this.list.forEach((t) => {
            if (!ids.includes(t.id)) {
                this._listado[t.id].completadaEn = null;
            }
        });
    }
}

export {Tareas};
