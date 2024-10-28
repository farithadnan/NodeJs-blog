// Enable the usage of .env file
require('dotenv').config();

// Set express app
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db')

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect to DB
connectDB(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure express to use static files from the public directory
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
