import React from "react";
// import "./style.css";

function Navbar() { //had to add return because it wasnt compiling -- Expected an assignment or function call and instead saw an expression no-unused-expressions
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand">stackBox</a>
    <span className="navbar-brand">Score:  ||  High Score: </span>
  </div>
</nav>

)}

export default Navbar

