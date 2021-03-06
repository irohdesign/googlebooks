import React from "react";

function Form (props) {
    return(
        <div id="searchContainer">
            <h5>Book Search</h5>
            <form>
                <label>Book</label>
                <input type="text" placeholder="Harry Potter"></input>
                <button id="searchButton" className="float-right" {...props}>Search</button>
            </form>
        </div>
    )
}

export default Form;