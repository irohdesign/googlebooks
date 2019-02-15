import React, { Component } from "react";
import Top from "../components/top.js";
import Form from "../components/form.js";
import ResultContainer from "../components/results/resultContainer";

class Search extends Component {
    render() {
        return (
           <div>
               <Top />
               <Form />

               <ResultContainer />
           </div>
        )
    }
}

export default Search;