import express from "express";
import helmet from "helmet";
import {execute} from "./bdConnection.js";
import autosRoutes from "./src//routes/autosRoutes.js";


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