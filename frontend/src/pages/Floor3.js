import React from 'react';
import Floor3_plan from '../components/Floor3_plan';
import '../components/FloorSVG.css';
import SensorList, {SensorListShow} from '../components/data/SensorList'; 

const Floor3 = () => {
    return (
        <div style={{overflow: "hidden", width: '100%', height: '100%', textAlign:'center'}}>
         	
			<div className="info-panel">
				<span id="InfoTitle">Informatii</span>
                <ul>
                   <li>Name :  <text id="SensorName">Informatii</text></li>
                   <li>Type : <text id="SensorType">Informatii</text></li>
                   <li>Status :<text id="SensorStatus">Informatii</text> </li>
                  
                </ul>                                                            
			</div>
           {/* <FloorSVG senzor1id="senzor" senzor1="red" senzor2="green" camera1="green" camera2="green" />*/}
           <div style={{ marginTop: '5%'}}>
                <SensorList />
           </div>
           
			
        </div>
    )
}

export default Floor3
