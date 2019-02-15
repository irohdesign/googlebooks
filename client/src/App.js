import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";
import "./style.css";
import API from "./utils/API.js";

class App extends Component {
    state = {
        bookList: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
        .then(res => this.setState({bookList: res.data}))
        .catch(err => console.log(err));
    };
    
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route exact path="/books" component={Saved} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;