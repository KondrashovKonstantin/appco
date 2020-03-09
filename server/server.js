const express = require('express');
const config = require('config');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json({ extended: true }))
app.use('/api/user', require('./routes/users-routes'));




const PORT = config.get('port')||8000;

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false} );
        app.listen(PORT, ()=>console.log(`App has been started on port  ${PORT}...`));
    }
    catch(e){
        console.log('SERVER ERROR:  ' + e.message);
        process.exit(1);
    }
}
start();