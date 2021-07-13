// Environment options
const PORT = process.env.PORT || 3000;

// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Get configurations
const { DATABASE_CONNECTION } = require('./config/keys');
const { apiBankController } = require('./controllers');

// Start processes
const app = express();
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static('public'));

// Set up routes
app.use('/api', apiBankController);

const init = async () => {
    try {
        await mongoose.connect(DATABASE_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        app.listen(PORT, err => {
            if (err) console.log(err);
            console.log(`Server up and mongo database runnning on port: ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

// Start server
init();