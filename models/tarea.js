import {v4 as uuidv4} from "uuid";

class Tarea {
    id = "";
    desc = "";
    completadaEn = false;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadaEn = false;
    }
}

export {Tarea};
