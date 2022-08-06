import fs from "fs";

const archivo = "../db/data.json";

const guardarDB = (data) => {
    fs.writeFileSync(archivo, data);
};

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: "utf-8"});
    const data = JSON.parse(info);

    console.log(data);
};

export {guardarDB, leerDB};
