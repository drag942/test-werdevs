import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import {Switch, Route, Redirect} from "react-router-dom";



function App() {
  return (
    <div className={'App'}>
        <Header/>
        <Switch>
            <Route component={Home} exact path={'/home'}/>
            <Route component={AboutUs} path={'/about'}/>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
