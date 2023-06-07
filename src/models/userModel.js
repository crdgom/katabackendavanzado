import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userAlias: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    userLastName: {
        type: String,
        required: true,
        trim: true,
    },
    userAge:{
        type: Number,
        required: true,
        trim: true,
    },
    userMail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: function (value) {
            const mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return mailFormat.test(value);
        }
    },
    userPassword: {
        type: String,
        required: true,
        trim: true,
    },
    userPhone: {
        type: Number,
        required: true,
        trim: true,
    },
    userAddress: {
        type: String,
        required: true,
        trim: true,
    },
    userType: {
        type: String,
        enum: ['admin', 'user', 'guest'],
        default: 'guest',
        required: true,
        trim: true,
    },
    userStatus: {
        type: String,
        required: true,
        trim: true,
    },
    userImage: {
        type: String,
        required: true,
        trim: true,
    },
})

const userModel = mongoose.model('users', userSchema);

export default userModel;