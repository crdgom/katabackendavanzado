// mongodb+srv://crdgom:lalfxWb3GBND0RMU@devf.rgq2nel.mongodb.net/?retryWrites=true&w=majority
import mongoose from 'mongoose';


const dbConnection = 'mongodb+srv://crdgom:lalfxWb3GBND0RMU@devf.rgq2nel.mongodb.net/autosdb';

const options = {
    autoIndex: true,
}

const execute = () => {
    mongoose.connect(dbConnection, options)
    .then(() => {
        console.log('Conectado a la base de datos');
    })
    .catch((err) => {
        console.error(err);
    });
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conectado a la base de datos');
});

export  {execute};


// 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