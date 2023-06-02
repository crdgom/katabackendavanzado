import mongoose from "mongoose";

const autoSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: Number,
        required: true,
        trim: true,
    },
    version:{
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    }

});

const autoModel = mongoose.model('autos', autoSchema);

export default autoModel;
