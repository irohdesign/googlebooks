import React from "react";
import ResultRow from "./resultRow.js";

function resultContainer() {
    return(
        <div className="wrapper">
            <div>
                <h4>Results</h4>
            </div>

            <ResultRow />
        </div>
        )
}

export default resultContainer;