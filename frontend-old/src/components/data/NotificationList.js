import React, { Component } from 'react';
import axios from 'axios';

const Notification = props => (
    <tr>
        <td>{ props.notification.severity }</td>
        <td>{ props.notification.description }</td>
    </tr>
)

export default class NotificationList extends Component {

    constructor(props) {
        super(props);

        this.state = { notifications: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/notifications/')
            .then(response => {
                this.setState({ notifications: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    notificationList() {
        return this.state.notifications.map(currentnotification => {
            return <Notification notification={ currentnotification } />
        })
    }

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>Notifications</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Severity</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.notificationList() }
                    </tbody>
                </table>
            </div>
        )
    }
}