const mongoose = require("mongoose");
const db = require("./models/book.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSchema = [
    {
        title: "Til We Have Faces",
        authors: ["CS Lewis", "JK Rowling"],
        description: "Good book, favorite book.",
        image: "example url",
        link: "example link"
    },
    {
        title: "Harry Potter",
        authors: ["JK Rowling"],
        description: "Okay book, not favorite book.",
        image: "example url",
        link: "example link"
    },
    {
        title: "Third Book",
        authors: ["Jalia Evans", "Gwen O'Brien"],
        description: "Fake book",
        image: "example url",
        link: "example link"
    },
    {
        title: "Fourth Book",
        authors: ["Andrew Lipovsky", "Claire Wooster"],
        description: "Fake book 2",
        image: "example url",
        link: "example link"
    }
]

