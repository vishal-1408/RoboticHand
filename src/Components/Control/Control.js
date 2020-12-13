import classes from "./Control.module.css";
import React from "react";
import { Redirect } from "react-router-dom";
import mic from "../../assets/mic.png";

const check = (transcript,char,props) => {
    // console.log(transcript,char,props)
    if (transcript.indexOf("rock") != -1) {
        writeCharacter("z",char);
        console.log("rock");
    }
    else if (transcript.indexOf("camera") != -1 || transcript.indexOf("open camera") != -1) {
         props.history.push("/camera");
    }
     if (transcript.indexOf("cool") != -1 || (transcript.indexOf("school")!=-1)) {
        writeCharacter("y",char);
        console.log("cool");
    }
     if (transcript.indexOf("ok") != -1) {
        writeCharacter("o",char);
        console.log("ok");
    }

    if (transcript.indexOf("middle") != -1) {
        writeCharacter("x",char);
        console.log("middle");
    }
    if (transcript.indexOf("super") != -1) {
        writeCharacter("s",char);
        console.log("super");
    }
    if (transcript.indexOf("wave") != -1) {
        console.log("w");
        writeCharacter("w",char);
    }
    if (
        transcript.indexOf("hold") != -1 ||
        transcript.indexOf("old") != -1 ||
        transcript.indexOf("cold") != -1
    ) {
        console.log("h");
        writeCharacter("h",char);
    } 
   if (transcript.indexOf("release") != -1) {
        console.log("r");
        writeCharacter("r",char);
    }
    if (
        transcript.indexOf("1") != -1 ||
        transcript.indexOf("one") != -1
    ) {
        writeCharacter("1",char);
        console.log("1");
    }
    if (
        transcript.indexOf("2") != -1 ||
        transcript.indexOf("Tu") != -1 ||
        transcript.indexOf("Tu") != -1
    ) {
        writeCharacter("2",char);
        console.log("2");
    }
    if (
        transcript.indexOf("three") != -1 ||
        transcript.indexOf("3") != -1
    ) {
        writeCharacter("3",char);
        console.log("3");
    }
    if (
        transcript.indexOf("four") != -1 ||
        transcript.indexOf("4") != -1
    ) {
        writeCharacter("4",char);
        console.log("4");
    }
    if (
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
        if(Char!=null) Char.writeValue(new TextEncoder().encode(string));
        else console.log("no device connected yet!!!")

    } catch (e) {
        console.log(e,"daskjdklsjdlkasjkdj");
        setTimeout(() => {
            Char.writeValue(new TextEncoder().encode(string));
        }, 1000);
    }
}

const control = (props) => {
    // let  a;
    // let b=null;
    if(props.transcript) check(props.transcript, props.char,props);
    // console.log(props.char)    // if(a==true) b=<Redirect to="/camera"/>
    return (
        <div className={classes.Container}>
            <img src={mic} className={classes.Image} />
            <input className={classes.input} readOnly value= {props.transcript?props.transcript:null} />
            {/* {b} */}
            </div>

    );
};

export default control;
