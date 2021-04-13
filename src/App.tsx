import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./layout/home/home";
import { About } from "./layout/about/about";
import { Tech } from "./layout/tech/tech";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/tech">
          <Tech></Tech>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
