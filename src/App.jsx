import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./HomePage/HomePage.jsx";

function App() {

  return (
    <div>
    <HomePage/>
    {/* <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
    </Router> */}
    </div>
  )
}

export default App
