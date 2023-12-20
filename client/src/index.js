import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About"
import Connect from "./components/Connect"
import JSAlgo from "./components/JSAlgo"
import Projects from "./components/Projects"
import ReactAlgo from "./components/ReactAlgo"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} >
          
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/JSAlgo" element={<JSAlgo />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ReactAlgo" element={<ReactAlgo />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Testimonials" element={<Testimonials />} />

        </Route>

      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
