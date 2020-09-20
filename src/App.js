import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./App.css";
import MyDocuments from "./MyDocuments";
import SubScriptionManagement from "./SubScriptionManagement";
import Admin from "./Admin";
import { Nav } from "react-bootstrap";

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
          <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/">MY DOCUMENTS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/subscription" eventKey="link-1">
                SUBSCRIPTION MANAGEMENT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/admin">ADMIN</Nav.Link>
            </Nav.Item>
          </Nav>
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
