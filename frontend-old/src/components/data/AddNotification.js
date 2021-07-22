import React, { Component } from 'react';
import axios from 'axios';

export default class NotificationComponent extends Component {

    constructor(props) {
        super(props);

        this.onChangeNotification_Severity = this.onChangeNotification_Severity.bind(this);
        this.onChangeNotification_Description = this.onChangeNotification_Description.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            notification_severity: '',
            notification_description: '',
            notifications: [],
            notification: ''
        }
    }

    onChangeNotification_Severity(e) { this.setState({ notification_severity: e.target.value })}
    onChangeNotification_Description(e) { this.setState({ notification_description: e.target.value })}

    onSubmit(e) {
        e.preventDefault();

        const notification = {
            severity: this.state.notification_severity,
            description: this.state.notification_description
        }

        console.log(notification);

        axios.post('http://localhost:5000/notifications/add', notification)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            notification_severity: '',
            notification_description: ''
        })

        window.location = '/exterior';
    }

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>Create Notification</h3>
                <form onSubmit={this.onSubmit}>
                    < div className="form-group">
                        <label> Severity: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.notification_severity}
                            onChange={this.onChangeNotification_Severity} />
                    </div>
                    < div className="form-group">
                        <label> Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.notification_description}
                            onChange={this.onChangeNotification_Description} />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                        value="Create Notification"
                        className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
