const app = require('./app');
const morgan = require('morgan');

const mongoose = require('mongoose');
const db = require('./model/user.model');
db.connect;



app.use(morgan('dev'));

const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

