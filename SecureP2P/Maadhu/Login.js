import React, { Component } from 'react';
import Home from './Home';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            isLoggedIn: false
        };
    }

    // submit button action
    onSubmitAction = () => {
        if (this.state.userName === 'Nandhu' && this.state.passWord === '12345') {
            alert('Successfully Logged In');
            // set flag for showing components
            this.setState({
                isLoggedIn: true
            });
        } else {
            alert('Please provide valid credentias!');
            // set flag for showing components
            this.setState({
                isLoggedIn: false
            });
        }
    };

    render() {
        return (
            <div>
                {
                    (!this.state.isLoggedIn)
                        ?
                        <form>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={this.state.userName}
                                    onChange={evt => this.setState({ userName: evt.target.value })} />
                            </label>
                            <br />
                            <label>
                                Password:
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.passWord}
                                    onChange={evt => this.setState({ passWord: evt.target.value })} />
                            </label>
                            <br />
                            <input type="submit" value="Submit" onClick={this.onSubmitAction} />
                        </form>
                        :
                        <Home />
                }
            </div>
        );
    }
};

