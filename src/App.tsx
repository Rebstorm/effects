import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./layout/home/home";
import { About } from "./layout/about/about";
import { Tech } from "./layout/tech/tech";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename={"/docs"}>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Home></Home>
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/tech`}>
          <Tech></Tech>
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/about`}>
          <About></About>
        </Route>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
