import classes from './SelfieCapture.module.css';
import { render } from '@testing-library/react';
import React, { useEffect ,createRef,useState, Component} from 'react';



class SelfieCapture extends Component{
   state ={
    capture:null
   }

   video=React.createRef();
   imgRef =React.createRef();

    shouldComponentUpdate(nextProps,nextState){
      return true
    }
    componentDidMount(){
      navigator.mediaDevices.getUserMedia({video: {zoom:true}})
        .then((mediaStream)=>{
        //    setSrc({src:mediaStream})
          this.video.current.srcObject=mediaStream;
          // this.setState({video:true});
            //outpoutting the stream to video tag which has autoplay attribute!
            const mediaStreamTrack = mediaStream.getVideoTracks()[0];
            let Capture = new ImageCapture(mediaStreamTrack);
            this.setState({capture:Capture});
            //Capture object used to do anything with poictures!!!even zooming in etc!!!
          })
        .catch(error => console.error('getUserMedia() error:', error));
    }

    saved=()=>{
        this.imgRef.current.parentNode.click();
     
    }
    // componentDidUpdate(oldProps,oldState){
    //     console.log("updated",oldProps,oldState)
    // }
     CapturePhoto=()=>{
        this.state.capture.takePhoto()
        .then(blob => {
          //obtaining the url
          this.imgRef.current.src=URL.createObjectURL(blob);
          this.imgRef.current.parentNode.href=URL.createObjectURL(blob);
        })
        .catch(error => console.error('takePhoto() error:', error));
      } 




   render(){
    //  this.j+=1;
    if(this.props.transcript!=null){
      if(this.props.transcript.indexOf("capture")!=-1 || this.props.transcript.indexOf("image")!=-1){
          this.CapturePhoto();
        }
        if(this.props.transcript.indexOf("save")!=-1){
          setTimeout(()=>{
            this.saved()
          },300)
        }
        if(this.props.transcript.indexOf("go back")!=-1 || this.props.transcript.indexOf("back")!=-1){
      
          this.props.history.push("/")
        }
  
  }
    return(
      <React.Fragment>
         {<video autoPlay ref={this.video} className={classes.Video}
                  ></video>}
          <div>
            Things you can say:
            <ul>
              <li>Capture: take a picture</li>
              <li>Save : save the pickture taken!</li>
              <li>Go Back: for going back</li>
            </ul>
          </div>
          <h3>Preview: </h3>
         {<a download ><img ref={this.imgRef} className={classes.Img}/></a>}
      </React.Fragment>
 )
   }
}

export default SelfieCapture;