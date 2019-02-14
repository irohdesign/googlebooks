import React, { Component } from "react";
import Top from "../components/top.js";
import Form from "../components/form.js";

class Search extends Component {
    render() {
        return (
           <div>
               <Top />
               <Form />
           </div>
        )
    }
}

export default Search;