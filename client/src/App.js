import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search.js";
import Saved from "./pages/Saved.js";

function App() {
    return(
        <Router>
            <div>
                {/* <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/books" component={Saved} />
                </Switch> */}
                <Search />
            </div>
        </Router>
    )
}

export default App;