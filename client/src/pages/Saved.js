import React, { Component } from "react";
import Top from "../components/top.js";
import Form from "../components/form.js";
import ResultContainer from "../components/results/resultContainer";

class Saved extends Component {
    render() {
        return (
           <div>
               <Top />

               <ResultContainer />
           </div>
        )
    }
}

export default Saved;