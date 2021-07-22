import React, { Component } from 'react';
import axios from 'axios';

export default class AddSensor extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeSensor_Name = this.onChangeSensor_Name.bind(this);
        this.onChangeSensor_Type = this.onChangeSensor_Type.bind(this);
        this.onChangeSensor_Status = this.onChangeSensor_Status.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sensor_name: '',
            sensor_type: '',
            sensor_status: ''
        }
    }

    onChangeSensor_Name(e) { this.setState({ sensor_name: e.target.value })}
    onChangeSensor_Type(e) { this.setState({ sensor_type: e.target.value })}
    onChangeSensor_Status(e) { this.setState({ sensor_status: e.target.value })}

    onSubmit(e) {
        e.preventDefault();

        const sensor = {
            name: this.state.sensor_name,
            type: this.state.sensor_type,
            status: this.state.sensor_status
        };

        console.log(sensor);

        axios.post('http://localhost:5000/sensors/add', sensor)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = '/sensor';
    }

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>Create Sensor</h3>
                <form onSubmit={this.onSubmit}>
                    < div className="form-group">
                        <label> Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.sensor_name}
                            onChange={this.onChangeSensor_Name} />
                    </div>
                    < div className="form-group">
                        <label> Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.sensor_type}
                            onChange={this.onChangeSensor_Type} />
                    </div>
                    < div className="form-group">
                        <label> Status: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.sensor_status}
                            onChange={this.onChangeSensor_Status} />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                        value="Create Sensor"
                        className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}