import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {execute} from "./bdConnection.js";
import autosRoutes from "./src/routes/autosRoutes.js";
/* import brandsRoutes from "./src/routes/brandsRoutes.js"; */
import userRoutes from "./src/routes/userRoutes.js";


async function main(){

    const app = express();
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    /* app.use(cors(corsOptions)) */
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.disable("x-powered-by");
   /*  app.use(autosRoutes)
    /* app.use(brandsRoutes)*/
    app.use(userRoutes)
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
}

main();