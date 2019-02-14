const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Hello World!");
});

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useMongoClient: true
    }
);


const PORT = process.env.PORT || 3001;
app.listen(PORT);