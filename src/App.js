import React from "react";
import "./App.css"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'; 
import MandatoryFields from "./components/mandatory-fields/MandatoryFields";
import ClientNode from "./components/client-node/ClientNode";
import "bootstrap/dist/css/bootstrap.min.css";
import ModifyClient from "./components/client-node/modifyClient"
export default function App(props) {
  return (
    <Router>
        <div>
          <a href="/" >
          MandatoryFields
          </a><br />
          <a href="/client-node" >
          Client Node ID Group
          </a>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={MandatoryFields}></Route>
              <Route exact path="/client-node" component={ClientNode}></Route>
              <Route exact path="/modify-client/:id" component={ModifyClient}></Route>
            </Switch>

          </div>
          
       
      </Router>
  )
}