// Import dependencies
import React, { useRef, useEffect } from "react";
import * as cocossd from '@tensorflow-models/coco-ssd';
import Webcam from "react-webcam";
import { drawRect } from './utilities';
import * as tf from '@tensorflow/tfjs';
import '../../CSS/CCTV.css';
import axios from 'axios';

const ObjectDetection = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
  
    // Main function
    const runCoco = async () => {
        const net = await cocossd.load();
      //  Loop and detect hands
      setInterval(() => {
        detect(net);
      }, 10);
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

        const obj = await net.detect(video);
        //console.log(obj);

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawRect(obj, ctx);

        //Check if knife
        obj.forEach(element => {
          if (element['class'] === 'knife' || element['class'] === 'gun')
        {
            console.log(element['class']);
            onSubmit();
        }
        });
        
      }
    };

    function onSubmit(e) {
      const notification = {
          severity: 'High',
          description: 'Weapon has been detected'
      }     

      axios.post('http://localhost:5000/notifications/add', notification)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
  }
  
    useEffect(()=>{runCoco()},[]);
  
    return (
      <div >
          <Webcam className="cctv-camera"
            ref={webcamRef}
            muted={true} 

          />
  
          <canvas className="cctv-camera-canvas"
            ref={canvasRef}
             
          />
      </div>
    );
  }

export default ObjectDetection
