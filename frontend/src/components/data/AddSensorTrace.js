import React, { Component } from 'react';
import axios from 'axios';

export default class SensorTraceComponent extends Component {
 
    constructor(props) {
        super(props);

        this.onChangeSensorTrace_SensorId = this.onChangeSensorTrace_SensorId.bind(this);
        this.onChangeSensorTrace_Action = this.onChangeSensorTrace_Action.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sensorTrace_sensorId: '',
            sensorTrace_action: ''
        }
    }

    onChangeSensorTrace_SensorId(e) { this.setState({ sensorTrace_sensorId: e.target.value })}
    onChangeSensorTrace_Action(e) { this.setState({ sensorTrace_action: e.target.value })}

    onSubmit(e) {
        e.preventDefault();

        const sensorTrace = {
            sensorId: this.state.sensorTrace_sensorId,
            action: this.state.sensorTrace_action
        };

        console.log(sensorTrace);

        axios.post('http://localhost:5000/sensorTraces/add', sensorTrace)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = '/exterior';
    }

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>Create Sensor Trace</h3>
                <form onSubmit={this.onSubmit}>
                    < div className="form-group">
                        <label> Sensor Id: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.sensorTrace_sensorId}
                            onChange={this.onChangeSensorTrace_SensorId} />
                    </div>
                    < div className="form-group">
                        <label> Action: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.sensorTrace_action}
                            onChange={this.onChangeSensorTrace_Action} />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                        value="Create Trace"
                        className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}