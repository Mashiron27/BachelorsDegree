import './CSS/CCTV.css'
import React from 'react';
import ObjectDetection from './Video/ObjectDetection/ObjectDetection';
import HandSigns from './Video/HandSigns/HandSigns';
import {IoMdSettings} from 'react-icons/io'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Webcam from 'react-webcam'
import LoadingScreen from '../images/loading.gif'


const CCTVs = () => {
	const [ showOption, setShowOption ] = useState(false);
	const [ basementOption, setBasementOption] = useState(true);
	const [ firstFlrOption, setFirstFlrOption] = useState(false);
	const [ secondFlrOption, setSecondFlrOption] = useState(false);
	const [ thirdFlrOption, setThirdFlrOption] = useState(false);
	const [ fourthFlrOption, setFourthFlrOption] = useState(false);
	const [ fifthFlrOption, setFifthFlrOption] = useState(false);
	const [ rooftopOption, setRooftopOption] = useState(false);
	
	const [ handSignsOption, setHandSignsOption ] = useState(true);
	const [ humanPositionOption, setHumanPoisitionOption ] = useState(true);
	const [ objectDetectionOption, setObjectDetectionOption ] = useState(true);
	const [ peopleCounterOption, setPeopleCounerOption ] = useState(true);
	const [ faceMaskOption, setFaceMaskOption ] = useState(true);
	
	const [ camera1Option, setCamera1Option ] = useState(true);
	const [ camera2Option, setCamera2Option ] = useState(false);
	const [ camera3Option, setCamera3Option ] = useState(false);
	const ActiveCamera = 'null';
	const cameraArray = ["camera1Option","camera2Option","camera3Option"]; 
	

	
	const setCamera = (ActiveCamera) => {
		setCameraDisable();
		if (ActiveCamera === "camera1Option") {
			setCamera1Option(true);
		}
		if (ActiveCamera === "camera2Option") {
			setCamera2Option(true);
		}
		if (ActiveCamera === "camera3Option"){
			setCamera3Option(true);
		}
	}

	const setCameraDisable = () => {
		setCamera1Option(false);
		setCamera2Option(false);
		setCamera3Option(false);
	}
	
	const setBasement = () => {
		setBasementOption(!basementOption);
		setFirstFlrOption(false);
		setSecondFlrOption(false);
		setThirdFlrOption(false);
		setFourthFlrOption(false);
		setFifthFlrOption(false);
		setRooftopOption(false);

		setCamera("camera1Option");
	}
	
	const setFirstFlr = () => {
		setBasementOption(false);
		setFirstFlrOption(!firstFlrOption);
		setSecondFlrOption(false);
		setThirdFlrOption(false);
		setFourthFlrOption(false);
		setFifthFlrOption(false);
		setRooftopOption(false);
		
		setCamera("camera1Option");
	}
	
	const setSecondFlr = () => {
		setBasementOption(false);
		setFirstFlrOption(false);
		setSecondFlrOption(!secondFlrOption);
		setThirdFlrOption(false);
		setFourthFlrOption(false);
		setFifthFlrOption(false);
		setRooftopOption(false);
		
		setCamera("camera1Option");
	}
	
	const setThirdFlr = () => {
		setBasementOption(false);
		setFirstFlrOption(false);
		setSecondFlrOption(false);
		setThirdFlrOption(!thirdFlrOption);
		setFourthFlrOption(false);
		setFifthFlrOption(false);
		setRooftopOption(false);
		
		setCamera("camera1Option");
	}
	
	const setFourtFlr = () => {
		setBasementOption(false);
		setFirstFlrOption(false);
		setSecondFlrOption(false);
		setThirdFlrOption(false);
		setFourthFlrOption(!fourthFlrOption);
		setFifthFlrOption(false);
		setRooftopOption(false);
		
		setCamera("camera1Option");
	}
	
	const setFifthFlr = () => {
		setBasementOption(false);
		setFirstFlrOption(false);
		setSecondFlrOption(false);
		setThirdFlrOption(false);
		setFourthFlrOption(false);
		setFifthFlrOption(!fifthFlrOption);
		setRooftopOption(false);
		
		setCamera("camera1Option");
	}
	
	const setRoof = () => {
		setBasementOption(false);
		setFirstFlrOption(false);
		setSecondFlrOption(false);
		setThirdFlrOption(false);
		setFourthFlrOption(false);
		setFifthFlrOption(false);
		setRooftopOption(!rooftopOption);
		
		setCamera("camera1Option");
	}
	
	const setHandSigns = () => {
		setHandSignsOption(true);
		setHumanPoisitionOption(false);
		setObjectDetectionOption(false);
		setPeopleCounerOption(false);		
		setFaceMaskOption(false);
	}
	
	const setHumanPosition = () => {
		setHandSignsOption(false);
		setHumanPoisitionOption(true);
		setObjectDetectionOption(false);
		setPeopleCounerOption(false);	
		setFaceMaskOption(false);		
	}
	
	const setObjectDetection = () => {
		setHandSignsOption(false);
		setHumanPoisitionOption(false);
		setObjectDetectionOption(true);
		setPeopleCounerOption(false);	
		setFaceMaskOption(false);		
	}
	
	const setPeopleCounter = () => {
		setHandSignsOption(false);
		setHumanPoisitionOption(false);
		setObjectDetectionOption(false);
		setPeopleCounerOption(true);
		setFaceMaskOption(false);
	}
	
	const setFaceMask = () => {
		setHandSignsOption(false);
		setHumanPoisitionOption(false);
		setObjectDetectionOption(false);
		setPeopleCounerOption(false);
		setFaceMaskOption(true);		
	}

	const [loading, setLoading] = useState(true)

	useEffect(() => {		
		setHandSigns();
		setTimeout(() => setLoading(false), 6000)
	}, [])


	
    return (
	<>
       <div className="cctv-main">
					
					<div style={{textAlign: 'center', position: 'relative'}}>
						
						<div className="cctv-settings-button">				    
							<IoMdSettings onClick = { () => setShowOption(!showOption)} style={{cursor: 'pointer'}}/>
						</div>
						<div className="cctv-camera-label-container">
							<span style={{float: 'left', marginLeft: '10%'}}>
							{basementOption?
								'Basement' 							  
							: null}	
							{firstFlrOption?
								'1st Floor'
								: null
							}	
							{secondFlrOption?
								'2nd Floor'
								: null
							}
							{thirdFlrOption?
								'3rd Floor'
								: null
							}
							{fourthFlrOption?
								'4th Floor'
								: null
							}
							{fifthFlrOption?
								'5th Floor'
								: null
							}
							{rooftopOption?
								'Rooftop'
								: null
							}
							</span>	
							<span style={{float: 'right', marginRight: '10%'}}>					
							{handSignsOption?
								'Hand Sign Detection'
								: null
							}							
							{objectDetectionOption?
								'Object Detection'
								: null
							}
							{peopleCounterOption?
								'People Counter'
								: null
							}
							{faceMaskOption?
								'Face Mask Detection'
								: null
							}
							</span>
							
						</div>
						
						{handSignsOption?
							<HandSigns/> : null					
						}						
						{objectDetectionOption?
							<ObjectDetection/> : null					
						}	
						{peopleCounterOption?
							<Webcam className="cctv-camera" /> : null
						}
						{faceMaskOption?
							<Webcam className="cctv-camera" /> : null
						}

						
						<div className="cctv-cameras-container">
							<span style={{float: 'left', marginLeft: '10%'}}
							onClick = { () => setCamera("camera1Option")} className={camera1Option? "active-span" :""}
							>Camera1</span>
							<span style={{float: 'left'}}
							onClick = { () => setCamera("camera2Option")} className={camera2Option? "active-span" :""}
							>Camera2</span>
							<span style={{float: 'left'}}
							onClick = { () => setCamera("camera3Option")} className={camera3Option? "active-span" :""}
							>Camera3</span>
						</div>
						
						{showOption?
					<div className="cctv-option-panel">
						<span>Algorithm Options</span>
						<ul>
							<li onClick = { () => setHandSigns()} className={handSignsOption? "active-li": ""}>
								Hand Sign Detection
								</li>							
							<li onClick = { () => setObjectDetection()} className={objectDetectionOption? "active-li": ""}>
							Object Detection
							</li>
							<li onClick = { () => setPeopleCounter()} className={peopleCounterOption? "active-li": ""}>
							People Counter
							</li>
							<li onClick = { () => setFaceMask()} className={faceMaskOption? "active-li": ""}>Face Mask Detection</li>
		
						</ul>
						
						<span>Floors</span>
						<ul >
							<li onClick = { () => setBasement()} className={basementOption? "active-li" : ""}>					
							Basement	  
							</li>
							<li onClick = { () => setFirstFlr()} className={firstFlrOption? "active-li" : ""}>
							1st Floor
							</li>
							<li onClick = { () => setSecondFlr()} className={secondFlrOption? "active-li" : ""}>
							2nd Floor
							</li>
							<li onClick = { () => setThirdFlr()} className={thirdFlrOption? "active-li" : ""}>
							3rd Floor
							</li>
							<li onClick = { () => setFourtFlr()} className={fourthFlrOption? "active-li" : ""}>
							4th Floor
							</li>
							<li onClick = { () => setFifthFlr()} className={fifthFlrOption? "active-li" : ""}>
							5th Floor
							</li>
							<li onClick = { () => setRoof()} className={rooftopOption? "active-li" : ""}>
							Rooftop
							</li>
						</ul>
					</div>
					: null}
						
					
					</div>
					</div>
	{loading === false ? (
		<></>
			
			) : (
				<div style={{textAlign: 'center',  backgroundColor: 'white', zIndex: '8', position: 'absolute', top: 0, left: 0, width: '100vw', height: '98vh'}}>
					<img style={{marginTop: '5%'}} src={LoadingScreen} alt=""/>
				</div>
				
			)

	}						        			      
    
	</>
	)
}
export default CCTVs
