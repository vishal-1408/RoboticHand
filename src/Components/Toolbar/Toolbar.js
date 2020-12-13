import React from "react";
import classes from "./Toolbar.module.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

const toolbar = (props)=>{
    return(
        <header className={classes.Header}>
           <Link to="/">HOME</Link>
           <img />
           <Link to="/camera">Camera</Link>
        </header>
    )
}

export default toolbar;