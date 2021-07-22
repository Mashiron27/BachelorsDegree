import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FloorSVG from '../FloorSVG';


var smallSlice = 0;
var bigSlice = 1;

const Sensor = props => (
    <tr>
        <td id='name'>{ props.sensor.name }</td>
        <td id='type'>{ props.sensor.type }</td>
        <td id='status'>{ props.sensor.status }</td>     
        <td>
            <Link to={"/edit/" + props.sensor._id}>edit</Link> |
            <a href="#" onClick={() => { props.deleteSensor(props.sensor._id)}}>delete</a>
        </td>  
    </tr>
);


const Sensor2 = props => (
    <ul>
        <li>Name : { props.sensor.name }</li>
        <li>Type : { props.sensor.type }</li>
        <li>Status : { props.sensor.status }</li>
        <li>
            <Link to={"/edit/" + props.sensor._id}>edit</Link> |
            <a href="#" onClick={() => { props.deleteSensor(props.sensor._id)}}>delete</a>
        </li>
    </ul>
);


export class SensorListShow extends Component{
    constructor(props) {
        super(props);       
        this.deleteSensor = this.deleteSensor.bind(this);

        this.state = { sensors: [] }
    }

    static n = 1;
    static getN() {
        return this.n;
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sensors/')
            .then(response => {
                this.setState({ sensors: response.data })                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteSensor(id) {
        axios.delete('http://localhost:5000/sensors/' + id)
            .then(res => console.log(res.data));
        this.setState({
            sensors: this.state.sensors.filter(el => el._id !== id)
        })
    }

    sensorList(n) {
        return this.state.sensors.slice(n - 1, n).map(currentsensor => {
            return <Sensor2 sensor={ currentsensor } deleteSensor={ this.deleteSensor } key={ currentsensor._id } />
        })
    }
   
   render() {
     return this.sensorList();
   }
 }

 


 
export class SensorListSimple extends Component{
    constructor(props) {
        super(props);       
        this.deleteSensor = this.deleteSensor.bind(this);

        this.state = { sensors: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sensors/')
            .then(response => {
                this.setState({ sensors: response.data })                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteSensor(id) {
        axios.delete('http://localhost:5000/sensors/' + id)
            .then(res => console.log(res.data));
        this.setState({
            sensors: this.state.sensors.filter(el => el._id !== id)
        })
    }

    sensorList() {
        return this.state.sensors.map(currentsensor => {
            return <Sensor sensor={ currentsensor } deleteSensor={ this.deleteSensor } key={ currentsensor._id } />
        })
    }
   
   render() {
     return this.sensorList()
   }
 }

export default class SensorList extends Component {

    constructor(props) {
        super(props);       
        this.deleteSensor = this.deleteSensor.bind(this);

        this.state = { sensors: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sensors/')
            .then(response => {
                this.setState({ sensors: response.data })                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteSensor(id) {
        axios.delete('http://localhost:5000/sensors/' + id)
            .then(res => console.log(res.data));
        this.setState({
            sensors: this.state.sensors.filter(el => el._id !== id)
        })
    }

    sensorList() {
        return this.state.sensors.map(currentsensor => {
            return <Sensor sensor={ currentsensor } deleteSensor={ this.deleteSensor } key={ currentsensor._id } />
        })
    }

    checkStatus = (props) => {
        if (props === 'active')
            return 'green';
        else if (props === 'error')
             return 'red';
        else return 'grey'
    }

    checkType = (props) => {
        if (props === 'senzor')
        {
             
            return "senzor";
        }
        
        else if (props === 'camera')
            return 'camera'; 
        else return "senzor";
            
    }

    senzor1Name(){
             return this.state.sensors.slice(0, 1).map(currentsensor => currentsensor.name)
    }

    senzor1Type(){
        return this.state.sensors.slice(0, 1).map(currentsensor => 
            currentsensor.type
        )
    }
 
    senzor1Status(){
        return this.state.sensors.slice(0, 1).map(currentsensor =>
            this.checkStatus(currentsensor.status)              
        )
    }

    senzor2Name(){
        bigSlice = 2;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(1, 2).map(currentsensor => currentsensor.name)
    }

    senzor2Type(){
        bigSlice = 2;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(1, 2).map(currentsensor => currentsensor.type)
    }
 
    senzor2Status(){
        bigSlice = 2;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(1, 2).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor3Name(){
        bigSlice = 3;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(2, 3).map(currentsensor => currentsensor.name)
    }

    senzor3Type(){
        bigSlice = 3;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(2, 3).map(currentsensor => currentsensor.type)
    }
 
    senzor3Status(){
        bigSlice = 3;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(2, 3).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor4Name(){
        bigSlice = 4;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(3, 4).map(currentsensor => currentsensor.name)
    }

    senzor4Type(){
        return this.state.sensors.slice(3, 4).map(currentsensor => currentsensor.type)
    }
 
    senzor4Status(){
        return this.state.sensors.slice(3, 4).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor5Name(){
        bigSlice = 5;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(4, 5).map(currentsensor => currentsensor.name)
    }

    senzor5Type(){
        return this.state.sensors.slice(4, 5).map(currentsensor => currentsensor.type)
    }
 
    senzor5Status(){
        return this.state.sensors.slice(4, 5).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }


    senzor6Name(){
        bigSlice = 6;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(5, 6).map(currentsensor => currentsensor.name)
    }

    senzor6Type(){
        return this.state.sensors.slice(5, 6).map(currentsensor => currentsensor.type)
    }
 
    senzor6Status(){
        return this.state.sensors.slice(5, 6).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor7Name(){
        bigSlice = 7;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(6, 7).map(currentsensor => currentsensor.name)
    }

    senzor7Type(){
        return this.state.sensors.slice(6, 7).map(currentsensor => currentsensor.type)
    }
 
    senzor7Status(){
        return this.state.sensors.slice(6, 7).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor8Name(){
        bigSlice = 8;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(7, 8).map(currentsensor => currentsensor.name)
    }

    senzor8Type(){
        return this.state.sensors.slice(7, 8).map(currentsensor => currentsensor.type)
    }
 
    senzor8Status(){
        return this.state.sensors.slice(7, 8).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor9Name(){
        bigSlice = 9;
        smallSlice = bigSlice - 1;
        return this.state.sensors.slice(8, 9).map(currentsensor => currentsensor.name)
    }

    senzor9Type(){
        return this.state.sensors.slice(8, 9).map(currentsensor => currentsensor.type)
    }
 
    senzor9Status(){
        return this.state.sensors.slice(8, 9).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor10Name(){
        return this.state.sensors.slice(9, 10).map(currentsensor => currentsensor.name)
    }

    senzor10Type(){
        return this.state.sensors.slice(9, 10).map(currentsensor => currentsensor.type)
    }
 
    senzor10Status(){
        return this.state.sensors.slice(9, 10).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor11Name(){
        return this.state.sensors.slice(10, 11).map(currentsensor => currentsensor.name)
    }

    senzor11Type(){
        return this.state.sensors.slice(10, 11).map(currentsensor => currentsensor.type)
    }
 
    senzor11Status(){
        return this.state.sensors.slice(10, 11).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }
    
    senzor12Name(){
          return this.state.sensors.slice(11, 12).map(currentsensor => currentsensor.name)
    }

    senzor12Type(){
        return this.state.sensors.slice(11, 12).map(currentsensor => currentsensor.type)
    }
 
    senzor12Status(){
        return this.state.sensors.slice(11, 12).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor13Name(){

        return this.state.sensors.slice(12, 13).map(currentsensor => currentsensor.name)
    }

    senzor13Type(){
        return this.state.sensors.slice(12, 13).map(currentsensor => currentsensor.type)
    }
 
    senzor13Status(){
        return this.state.sensors.slice(12, 13).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor14Name(){

        return this.state.sensors.slice(13, 14).map(currentsensor => currentsensor.name)
    }

    senzor14Type(){
        return this.state.sensors.slice(13, 14).map(currentsensor => currentsensor.type)
    }
 
    senzor14Status(){
        return this.state.sensors.slice(13, 14).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    senzor15Name(){
        return this.state.sensors.slice(14, 15).map(currentsensor => currentsensor.name)
    }

    senzor15Type(){
        return this.state.sensors.slice(14, 15).map(currentsensor => currentsensor.type)
    }
 
    senzor15Status(){
        return this.state.sensors.slice(14, 15).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    camera1Name(){
        return this.state.sensors.slice(15, 16).map(currentsensor => currentsensor.name)
    }

    camera1Type(){
        return this.state.sensors.slice(15, 16).map(currentsensor => currentsensor.type)
    }

    camera1Status(){
        return this.state.sensors.slice(15, 16).map(currentsensor =>
             this.checkStatus(currentsensor.status)            
        )
    }

    camera2Name(){
        return this.state.sensors.slice(16, 17).map(currentsensor => currentsensor.name)
    }

    camera2Type(){
        return this.state.sensors.slice(16, 17).map(currentsensor => currentsensor.type)
    }

    camera2Status(){
        return this.state.sensors.slice(16, 17).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera3Name(){
        return this.state.sensors.slice(17, 18).map(currentsensor => currentsensor.name)
    }

    camera3Type(){
        return this.state.sensors.slice(17, 18).map(currentsensor => currentsensor.type)
    }

    camera3Status(){
        return this.state.sensors.slice(17, 18).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera4Name(){
        return this.state.sensors.slice(18, 19).map(currentsensor => currentsensor.name)
    }

    camera4Type(){
        return this.state.sensors.slice(18, 19).map(currentsensor => currentsensor.type)
    }

    camera4Status(){
        return this.state.sensors.slice(18, 19).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera5Name(){
        return this.state.sensors.slice(19, 20).map(currentsensor => currentsensor.name)
    }

    camera5Type(){
        return this.state.sensors.slice(19, 20).map(currentsensor => currentsensor.type)
    }

    camera5Status(){
        return this.state.sensors.slice(19, 20).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera6Name(){
        return this.state.sensors.slice(20, 21).map(currentsensor => currentsensor.name)
    }

    camera6Type(){
        return this.state.sensors.slice(20, 21).map(currentsensor => currentsensor.type)
    }

    camera6Status(){
        return this.state.sensors.slice(20, 21).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera7Name(){
        return this.state.sensors.slice(21, 22).map(currentsensor => currentsensor.name)
    }

    camera7Type(){
        return this.state.sensors.slice(21, 22).map(currentsensor => currentsensor.type)
    }

    camera7Status(){
        return this.state.sensors.slice(21, 22).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera8Name(){
        return this.state.sensors.slice(22, 23).map(currentsensor => currentsensor.name)
    }

    camera8Type(){
        return this.state.sensors.slice(22, 23).map(currentsensor => currentsensor.type)
    }

    camera8Status(){
        return this.state.sensors.slice(22, 23).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera9Name(){
        return this.state.sensors.slice(23, 24).map(currentsensor => currentsensor.name)
    }

    camera9Type(){
        return this.state.sensors.slice(23, 24).map(currentsensor => currentsensor.type)
    }

    camera9Status(){
        return this.state.sensors.slice(23, 24).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera10Name(){
        return this.state.sensors.slice(24, 25).map(currentsensor => currentsensor.name)
    }

    camera10Type(){
        return this.state.sensors.slice(24, 25).map(currentsensor => currentsensor.type)
    }

    camera10Status(){
        return this.state.sensors.slice(24, 25).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera11Name(){
        return this.state.sensors.slice(25, 26).map(currentsensor => currentsensor.name)
    }

    camera11Type(){
        return this.state.sensors.slice(25, 26).map(currentsensor => currentsensor.type)
    }

    camera11Status(){
        return this.state.sensors.slice(25, 26).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera12Name(){
        return this.state.sensors.slice(26, 27).map(currentsensor => currentsensor.name)
    }

    camera12Type(){
        return this.state.sensors.slice(26, 27).map(currentsensor => currentsensor.type)
    }

    camera12Status(){
        return this.state.sensors.slice(26, 27).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera13Name(){
        return this.state.sensors.slice(27, 28).map(currentsensor => currentsensor.name)
    }

    camera13Type(){
        return this.state.sensors.slice(27, 28).map(currentsensor => currentsensor.type)
    }

    camera13Status(){
        return this.state.sensors.slice(27, 28).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera14Name(){
        return this.state.sensors.slice(28, 29).map(currentsensor => currentsensor.name)
    }

    camera14Type(){
        return this.state.sensors.slice(28, 29).map(currentsensor => currentsensor.type)
    }

    camera14Status(){
        return this.state.sensors.slice(28, 29).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    camera15Name(){
        return this.state.sensors.slice(29, 30).map(currentsensor => currentsensor.name)
    }

    camera15Type(){
        return this.state.sensors.slice(29, 30).map(currentsensor => currentsensor.type)
    }

    camera15Status(){
        return this.state.sensors.slice(29, 30).map(currentsensor =>
            this.checkStatus(currentsensor.status)
        )
    }

    render() {       
        return (             
            <div>
                <FloorSVG senzor1Name={ this.senzor1Name()} senzor1Type={this.senzor1Type()} senzor1Status={ this.senzor1Status()}  
                senzor2Name={ this.senzor2Name()} senzor2Type={this.senzor2Type()} senzor2Status={ this.senzor2Status()}
                senzor3Name={ this.senzor3Name()} senzor3Type={this.senzor3Type()} senzor3Status={ this.senzor3Status()}
                senzor4Name={ this.senzor4Name()} senzor4Type={this.senzor4Type()} senzor4Status={ this.senzor4Status()}
                senzor5Name={ this.senzor5Name()} senzor5Type={this.senzor5Type()} senzor5Status={ this.senzor5Status()}
                senzor6Name={ this.senzor6Name()} senzor6Type={this.senzor6Type()} senzor6Status={ this.senzor6Status()}
                senzor7Name={ this.senzor7Name()} senzor7Type={this.senzor7Type()} senzor7Status={ this.senzor7Status()}
                senzor8Name={ this.senzor8Name()} senzor8Type={this.senzor8Type()} senzor8Status={ this.senzor8Status()}
                senzor9Name={ this.senzor9Name()} senzor9Type={this.senzor9Type()} senzor9Status={ this.senzor9Status()}
                senzor10Name={ this.senzor10Name()} senzor10Type={this.senzor10Type()} senzor10Status={ this.senzor10Status()}
                senzor11Name={ this.senzor11Name()} senzor11Type={this.senzor11Type()} senzor11Status={ this.senzor11Status()}
                senzor12Name={ this.senzor12Name()} senzor12Type={this.senzor12Type()} senzor12Status={ this.senzor12Status()}
                senzor13Name={ this.senzor13Name()} senzor13Type={this.senzor13Type()} senzor13Status={ this.senzor13Status()}
                senzor14Name={ this.senzor14Name()} senzor14Type={this.senzor14Type()} senzor14Status={ this.senzor14Status()}
                senzor15Name={ this.senzor15Name()} senzor15Type={this.senzor15Type()} senzor15Status={ this.senzor15Status()}

                camera1Name={ this.camera1Name()} camera1Type={this.camera1Type()} camera1Status={ this.camera1Status()}
                camera2Name={ this.camera2Name()} camera2Type={this.camera2Type()} camera2Status={ this.camera2Status()}
                camera3Name={ this.camera3Name()} camera3Type={this.camera3Type()} camera3Status={ this.camera3Status()}
                camera4Name={ this.camera4Name()} camera4Type={this.camera4Type()} camera4Status={ this.camera4Status()}
                camera5Name={ this.camera5Name()} camera5Type={this.camera5Type()} camera5Status={ this.camera5Status()}
                camera6Name={ this.camera6Name()} camera6Type={this.camera6Type()} camera6Status={ this.camera6Status()}
                camera7Name={ this.camera7Name()} camera7Type={this.camera7Type()} camera7Status={ this.camera7Status()}
                camera8Name={ this.camera8Name()} camera8Type={this.camera8Type()} camera8Status={ this.camera8Status()}
                camera9Name={ this.camera9Name()} camera9Type={this.camera9Type()} camera9Status={ this.camera9Status()}
                camera10Name={ this.camera10Name()} camera10Type={this.camera10Type()} camera10Status={ this.camera10Status()}
                camera11Name={ this.camera11Name()} camera11Type={this.camera11Type()} camera11Status={ this.camera11Status()}
                camera12Name={ this.camera12Name()} camera12Type={this.camera12Type()} camera12Status={ this.camera12Status()}
                camera13Name={ this.camera13Name()} camera13Type={this.camera13Type()} camera13Status={ this.camera13Status()}
                camera14Name={ this.camera14Name()} camera14Type={this.camera14Type()} camera14Status={ this.camera14Status()}
                camera15Name={ this.camera15Name()} camera15Type={this.camera15Type()} camera15Status={ this.camera15Status()}
                
                />                                 
            </div>           
            
        )
    }
   
}