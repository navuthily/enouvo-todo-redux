  
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ModalCreate from '../components/ModalCreate';
import EmployeeDetail from '../components/EmployeeDetail';
export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={ModalCreate}>
            <h1>List employee</h1>
            <ModalCreate/>
          </Route>
          <Route path='/employ' exact component={EmployeeDetail}/>
        </Switch>
      </div>
    </Router>
  );
}