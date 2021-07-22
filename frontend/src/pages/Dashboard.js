import React from 'react'
import SensorTraceList, {SensorTraceListChart} from '../components/data/SensorTraceList'

import '../App.css'


const Dashboard = () => {
    return (   
   
            <tr>
                <td style={{width: '50vw'}}> <SensorTraceList />  </td>
             { /*  <td style={{width: '50vw'}}>  <SensorTraceListChart />  </td> */ }
            </tr>
      
         
       
    )
}

export default Dashboard
