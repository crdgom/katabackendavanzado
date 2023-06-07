import mongoose from "mongoose";

const brandsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    branch: {
        type: String,
        required: true,
        trim: true,
    },
    country:{
        type: String,
        required: true,
        trim: true,
    },
    contact: {
        phone: {
            type: Number,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate: function (value) {
                const mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                return mailFormat.test(value);
            }
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
    },

});

const brandsModel = mongoose.model('brands', brandsSchema);

export default brandsModel;