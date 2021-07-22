import React, { Component } from 'react';
import axios from 'axios';

export default class AddUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUser_Firstname = this.onChangeUser_Firstname.bind(this);
        this.onChangeUser_Surname = this.onChangeUser_Surname.bind(this);
        this.onChangeUser_Email = this.onChangeUser_Email.bind(this);
        this.onChangeUser_Username = this.onChangeUser_Username.bind(this);
        this.onChangeUser_Password = this.onChangeUser_Password.bind(this);
        this.onChangeUser_Rights = this.onChangeUser_Rights.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_firstname: '',
            user_surname: '',
            user_email: '',
            user_username: '',
            user_password: '',
            user_rights: 0
        }
    }

    onChangeUser_Firstname(e) { this.setState({ user_firstname: e.target.value })}
    onChangeUser_Surname(e) { this.setState({ user_surname: e.target.value })}
    onChangeUser_Email(e) { this.setState({ user_email: e.target.value })}
    onChangeUser_Username(e) { this.setState({ user_username: e.target.value })}
    onChangeUser_Password(e) { this.setState({ user_password: e.target.value })}
    onChangeUser_Rights(e) { this.setState({ user_rights: e.target.value })}

    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstname: this.state.user_firstname,
            surname: this.state.user_surname,
            email: this.state.user_email,
            username: this.state.user_username,
            password: this.state.user_password,
            rights: this.state.user_rights
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        window.location = '/UserManagement/';
    }

    render() {
        return (
            <div style={{width: 50, fontSize: 15}}>
                <h3>Create User</h3>
                <form onSubmit={ this.onSubmit }>
                    < div className="form-group">
                        <label> Firstname: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user_firstname}
                            onChange={this.onChangeUser_Firstname} />
                    </div>
                    < div className="form-group">
                        <label> Surname: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user_surname}
                            onChange={this.onChangeUser_Surname} />
                    </div>
                    < div className="form-group">
                        <label> Email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user_email}
                            onChange={this.onChangeUser_Email} />
                    </div>
                    < div className="form-group">
                        <label> Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user_username}
                            onChange={this.onChangeUser_Username} />
                    </div>
                    < div className="form-group">
                        <label> Password: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user_password}
                            onChange={this.onChangeUser_Password} />
                    </div>
                    < div className="form-group">
                        <label> Rights: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.user_rights}
                            onChange={this.onChangeUser_Rights} />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                        value="Create User"
                        className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}