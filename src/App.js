import classes from "./App.module.css";
import React, { Component, useEffect, useState } from "react";
import SpeechRecognition from 'react-speech-recognition';
import Control from "./Components/Control/Control";
import Toolbar from "./Components/Toolbar/Toolbar"
import SelfieCapture from "./Components/SelfieCapture/SelfieCapture";
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends Component {
    state = {
        characteristic: null,
        transcript: null,
    };

    //connecting to the selected device!
    connect = (device) => {
        //connecting to the gatt server of the device that has been selected!
        device.gatt
            .connect()
            .then((gattServer) => {
                //fetching the service with 0xFFE0 id
                return gattServer.getPrimaryService(0xffe0);
            })
            .then((service) => {
				console.log(service)
                //fetching the characteristic 0xFFE1 of the service
                return service.getCharacteristic(0xffe1);
            })
            .then((characteristic) => {
				console.log(characteristic)
                this.setState({ characteristic });
                console.log("characteristic received!");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    componentDidMount = () => {
		console.log(window.navigator.platform,"window plattform")
        //opens up the dialog box for available devices
        if ("speechSynthesis" in window) {
			//this gives the recognition object!!!
            const recognition = SpeechRecognition.getRecognition({cancelBubble:true})
            recognition.continuous = true;

            //   recognition.continuous = false;
            recognition.start();
            console.log("STARTED");	
            recognition.onstart = () => {
                console.log("started the service");
			};

            recognition.lang = "en-IN";
            let i = 0;
            let transcript;
            recognition.onresult = (e) => {
				if(e.results[e.resultIndex].isFinal===true){
                transcript =e.results[e.resultIndex][0].transcript;
				console.log(transcript)
				this.setState({transcript})
			};
			
			//check for the 
			if(window.navigator.platform=='Android' || window.navigator.platform=='iPhone' || 
			window.navigator.platform=='iPod' ||window.navigator.platform=='iPad'){
				recognition.onend = function() {
			  setTimeout(()=>{
				console.info("voice recognition ended, restarting...");
				console.log(recognition.continuous)
				recognition.start();
			  },5000)
			}
			}

				}
        } else {
            console.log("not supported");
        }
    };

    //clicking handler!
    clicked = () => {
        navigator.geolocation.getCurrentPosition((p) => console.log(p));

        navigator.bluetooth
            .requestDevice({
                filters: [{ services: [0xffe0] }],
            })
            .then((device) => {
                device.addEventListener("gattserverdisconnected", (e) => {
                    console.log("disconeected!!");
                    this.connect(device);
                });
                this.connect(device);
            })
            .catch((e) => {
                //can add the exception component!!
                console.log("helllo")
                console.log(e);
            });
    };
    render() {
        return (
           <BrowserRouter basename="https://vishal-1408.github.io/RoboticHand-HackOff-v3.0-">
               <div className={classes.App}>
               <Toolbar></Toolbar>         
                <div className={classes.Content}>
                <button className={classes.Button} onClick={this.clicked}>
                    {this.state.characteristic ? "Disconnect" : "Connect"}
                </button>
				<Route path="/" exact render={(props)=><Control {...props} transcript={this.state.transcript} char={this.state.characteristic}/>}></Route>
                <Route path="/camera" render={(props)=><SelfieCapture {...props} transcript={this.state.transcript}/>}/>
                </div>
               </div>
           </BrowserRouter>
        );
    }
}

export default App;
