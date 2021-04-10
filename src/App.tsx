import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./layout/home/home";
import { About } from "./layout/about/about";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
