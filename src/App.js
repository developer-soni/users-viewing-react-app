import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/pages/User";
import Posts from "./components/pages/Posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
          <Route exact path="/users/:id" element={<User/>}/>
          {/* <Route exact path="/users/:id/posts" element={<Posts/>}/> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
