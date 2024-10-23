const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require('./config/db')


//rest object
const app = express();

//dotenv
dotenv.config();

//mongodb connection
connectDb();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'))


const PORT = process.env.PORT || 8080;

//Routes
app.use('/admin/auth', require('./routes/routes'));

//Listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white)
})