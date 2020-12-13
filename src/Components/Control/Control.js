import classes from "./Control.module.css";
import React from "react";
import { Redirect } from "react-router-dom";
import mic from "../../assets/mic.png";

const check = (transcript,char) => {
    if (transcript.indexOf("rock") != -1) {
        writeCharacter("z",char);
        console.log("rock");
    }
    else if (transcript.indexOf("camera") != -1 || transcript.indexOf("open camera") != -1) {
          return true
    }
    else if (transcript.indexOf("cool") != -1) {
        writeCharacter("y",char);
        console.log("cool");
    }
    else if (transcript.indexOf("cuss") != -1) {
        writeCharacter("x",char);
        console.log("cuss");
    }
    else if (transcript.indexOf("wave") != -1) {
        console.log("w");
        writeCharacter("w",char);
    } else if (
        transcript.indexOf("hold") != -1 ||
        transcript.indexOf("old") != -1 ||
        transcript.indexOf("cold") != -1
    ) {
        console.log("h");
        writeCharacter("h",char);
    } else if (transcript.indexOf("release") != -1) {
        console.log("r");
        writeCharacter("r",char);
    } else if (
        transcript.indexOf("1") != -1 ||
        transcript.indexOf("one") != -1
    ) {
        writeCharacter("1",char);
        console.log("1");
    } else if (
        transcript.indexOf("2") != -1 ||
        transcript.indexOf("Tu") != -1 ||
        transcript.indexOf("Tu") != -1
    ) {
        writeCharacter("2",char);
        console.log("2");
    } else if (
        transcript.indexOf("three") != -1 ||
        transcript.indexOf("3") != -1
    ) {
        writeCharacter("3",char);
        console.log("3");
    } else if (
        transcript.indexOf("four") != -1 ||
        transcript.indexOf("4") != -1
    ) {
        writeCharacter("4",char);
        console.log("4");
    } else if (
        transcript.indexOf("five") != -1 ||
        transcript.indexOf("5") != -1
    ) {
        writeCharacter("5",char);
        console.log("5");
    }
};

function writeCharacter(string, Char) {
    // if(string=="connected!")
    try {
        Char.writeValue(new TextEncoder().encode(string));
    } catch (e) {
        setTimeout(() => {
            Char.writeValue(new TextEncoder().encode(string));
        }, 1000);
    }
}

const control = (props) => {
    let  a;
    let b=null;
    if(props.transcript) a=check(props.transcript, props.char);
    if(a==true) b=<Redirect to="/camera"/>
    return (
        <div className={classes.Container}>
            <img src={mic} className={classes.Image} />
            <input className={classes.input} readOnly value= {props.transcript?props.transcript:null} />
            {/* {b} */}
            </div>

    );
};

export default control;
