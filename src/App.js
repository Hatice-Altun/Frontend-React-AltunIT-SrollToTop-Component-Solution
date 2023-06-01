import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import SrollToTop from "./components/ScrollToTop";
import "./App.css";


// How to easily solve a scroll to top problem that occurs when you have a long content page with
// React Router! Scroll Restoration: Add the SrollToTop component


function App() {
  return (
    <Router>
      <SrollToTop/>
    </Router>
  );
}

export default App;
