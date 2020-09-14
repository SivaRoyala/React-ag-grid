import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./App.css";
import MyDocuments from "./MyDocuments";
import SubScriptionManagement from "./SubScriptionManagement";
import Admin from "./Admin";

// const routing = (
//   <Router>
//     <div>
//       <Route path="/" component={MyDocuments} />
//       <Route path="/users" component={SubScriptionManagement} />
//       <Route path="/contact" component={Admin} />
//     </div>
//   </Router>
// );

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">MY DOCUMENTS</Link>
          <br />
          <Link to="/subscription">SUBSCRIPTION MANAGEMENT</Link>
          <br />
          <Link to="/admin">ADMIN</Link>
          <Switch>
            <Route exact path="/" component={MyDocuments}></Route>
            <Route
              exact
              path="/subscription"
              component={SubScriptionManagement}
            ></Route>
            <Route exact path="/admin" component={Admin}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
