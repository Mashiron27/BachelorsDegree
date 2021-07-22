import React, { Component } from 'react';
import axios from 'axios';

const SensorTrace = props => (
    <tr>
        <td>{ props.sensorTrace.sensorId }</td>
        <td>{ props.sensorTrace.action }</td>
    </tr>
)

export default class SensorTraceList extends Component {

    constructor(props) {
        super(props);

        this.state = { sensorTraces: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sensorTraces/')
            .then(response => {
                this.setState({ sensorTraces: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    sensorTraceList() {
        return this.state.sensorTraces.map(currentsensorTrace => {
            return <SensorTrace sensorTrace={ currentsensorTrace } />
        })
    }

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>SensorTraces</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>SensorId</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.sensorTraceList() }
                    </tbody>
                </table>
            </div>
        )
    }
}