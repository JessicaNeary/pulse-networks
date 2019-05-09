import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import Projects from "./components/Projects";
import Fibre from "./components/Projects/content/1-Fibre";
import Telephony from "./components/Projects/content/2-Telephony";
import CATV from "./components/Projects/content/3-CATV";
import Radio from "./components/Projects/content/4-Radio";
import Other from "./components/Projects/content/5-Other";
import Contact from "./components/Contact";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
});

// <Route path='1' component={Fibre} />
// <Route path='2' component={Telephony} />
// <Route path='3' component={CATV} />
// <Route path='4' component={Radio} />
// <Route path='5' component={Other} />
