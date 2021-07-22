import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sensor = props => (
    <tr>
        <td>{ props.sensor.name }</td>
        <td>{ props.sensor.type }</td>
        <td>{ props.sensor.status }</td>
        <td>
            <Link to={"/edit/" + props.sensor._id}>edit</Link> |
            <a href="#" onClick={() => { props.deleteSensor(props.sensor._id)}}>delete</a>
        </td>
    </tr>
)

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

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>Sensors</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.sensorList() }
                    </tbody>
                </table>
            </div>
        )
    }
}