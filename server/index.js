import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express(); //app is a copy of express
app.use(express.json()) // The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 

//const cors = require('cors') 
const corsOptions = { 
  // origin:'https://localhost:3000',
  AccessControlAllowOrigin: '*',  
  origin: '*',  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' 
}
app.use(cors(corsOptions));

// starts at students - all routes
app.use('/students', studentRoutes);

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));


// string connection from mongodb
const CONNECTION_URL = `mongodb+srv://${process.env.PROJECT}:${process.env.SECRET}@cluster0.qrgkxuq.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5500;


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


//mongoose.set('useFindAndModify', false);