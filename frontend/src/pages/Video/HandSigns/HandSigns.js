import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import { okSign } from './okSign';
import axios from 'axios';

var timeToWait = 0;

const HandSigns = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
  
    const [okSignDetected, setOkSignDetected] = useState(false);

    const runHandpose = async () => {
      const net = await handpose.load();
      console.log("Handpose model loaded.");
      //  Loop and detect hands
      setInterval(() => {
        detect(net);
      }, 100);
    };
  
    const detect = async (net) => {
      // Check data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
  
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
  
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
  
        // Make Detections
        const hand = await net.estimateHands(video);

        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            okSign,
          ]);
          const gesture = await GE.estimate(hand[0].landmarks, 4);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
  
            const confidence = gesture.gestures.map(
              (prediction) => prediction.confidence
            );
            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            setOkSignDetected(true);                         
          }
		  else {
			  setOkSignDetected(false);
			}
    }
		else {
			setOkSignDetected(false);
		}
    // Draw mesh
    const ctx = canvasRef.current.getContext("2d");
    drawHand(hand, ctx);
  }
};
    useEffect(()=>{runHandpose()},[]);

    function onSubmit(e) {
      const notification = {
          severity: 'High',
          description: 'Sign has been Detected'
      }     

      axios.post('http://localhost:5000/notifications/add', notification)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
  }
 
  const [loading, setLoading] = useState(false)
	useEffect(() => {		
		setTimeout(() => setLoading(true), 6000)
	}, [])

  
    return (
      <div>
          <Webcam className="cctv-camera"
            ref={webcamRef}
    
          />
  
          <canvas className="cctv-camera-canvas"
            ref={canvasRef}
          
          />
          {okSignDetected  ? (                                     
            <div className="cctv-oksign">
               SIGN FOUND       
               {timeToWait < 1 && loading? 
                  ( onSubmit(),
                    timeToWait = 1
                  ) : null
               }             
             
            </div>
          ) : (
           null
          )}
      </div>
    );
  }
  
export default HandSigns
