const mongoose = require('mongoose');
const db = require('../config/db');
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
    },
    email: {
        type: String,
        maxLength: 255,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        maxLength: 255,
        minLength: 6,
        required: true,
    },
    phone: {
        type: String,
        maxLength: 255,
    },
    gender: String,
    role: {
        type: String,
        default: 'user',
    },
    birthday: Date,
    createAt: {
        type: Date,
        default: Date.now,
    },
    accessHistory: {
        type: Array,
        default: [],
    },
});

async function connect() {
    const UserModel = db.model('User', user);
    const m = new UserModel();
    console.log("hehe");
    await m.save();
    console.log('User saved');
}
module.exports = { connect };