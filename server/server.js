const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const People = require('./db.model');
const {job} = require('./function')
const {fs} = require('./function');
const {business} = require('./function');


const app = express();
app.use(cors());




dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect( MONGO_URI , { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('MongoDB Connected...')
});



app.get('/api/jobpeople', job);
app.get('/api/fspeople', fs);
app.get('/api/businesspeople', business);

app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT ${PORT}`);
})

