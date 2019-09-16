import React from "react";
import Jumbotron from "./components/Jumbotron/index";
import MainGameContainer from "./components/MainGameContainer/index";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer /> 
  </div>
);

export default App;