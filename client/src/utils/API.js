import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books", {params: {q: query}});
    }
    // saveBooks: function() {
    //     return axios.post("/api/books/", bookData);
    // }
};

// API Key
// AIzaSyBG_sGuNRGKTP8NY6oCkXRohp7EyyCjXBo