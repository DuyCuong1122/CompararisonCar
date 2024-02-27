const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/do_an_tot_nghiep').on('open', ()=> {
    console.log('Connected to database');
}).on('error', (error) => {
    console.log('Error connecting to database', error);
});

module.exports = connection;
