import express from "express";
import helmet from "helmet";
import {execute} from "./bdConnection.js";
import autosRoutes from "./src/routes/autosRoutes.js";
import brandsRoutes from "./src/routes/brandsRoutes.js";

async function main(){
    try{
    
    }catch(e){
        console.error(e)
    }

    const app = express();
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.disable("x-powered-by");
    app.use(autosRoutes)
    app.use(brandsRoutes)
    app.set("view engine", "ejs");
    app.set("views", "./src/views"); // modificar la ruta de las vistas
    execute();

    app.listen(3000, () => {
        console.log(`
            Server running on port 3000
            
            http://localhost:3000/
            
            Press CTRL+C to stop server
            `);
    });
};

main();