const express = require('express');
const app = express();
const mongoose = require('mongoose');

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
    });
}

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useMongoClient: true
    }
);


const PORT = process.env.PORT || 3001;
app.listen(PORT);