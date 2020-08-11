import React, { Component } from 'react';
import Shiva from './Shiva';
import Nandhu from './Nandhu';
import Kavya from './Kavya';

class Home extends Component {
    state = {
        selectedName: '',
        screenName: ''
    };

    handleChange = e => {
        const { value } = e.target;

        this.setState({
            selectedName: value
        });
    };

    handleChange = (e) => {
        if (e.target.value === 'Shiva') {
            this.setState({
                screenName: 'Shiva'
            });
        } else if (e.target.value === 'Nandhu') {
            this.setState({
                screenName: 'Nandhu'
            });
        } else if (e.target.value === 'Kavya') {
            this.setState({
                screenName: 'Kavya'
            });
        } else {
            alert('wrong');
        }
    };

    render() {
        return (
            <div>
                <label>
                    Welcome Nandhu !!!
                </label>
                <br />
                <div>
                    <label>
                        <input type="radio" value="Shiva" checked={false} name="shiva" onChange={this.handleChange} />Shiva
                    </label>
                    <label>
                        <input type="radio" value="Nandhu" checked={false} name="nandhu" onChange={this.handleChange} />Nandhu
                    </label>
                    <label>
                        <input type="radio" value="Kavya" checked={false} name="kavya" onChange={this.handleChange} />Kavya
                    </label>
                </div>
                <label>
                    {(() => {
                        switch (this.state.screenName) {
                            case "Shiva": return <Shiva />;
                            case "Nandhu": return <Nandhu />;
                            case "Kavya": return <Kavya />;
                            default: return console.log('different screen');
                        }
                    })()}
                </label>
            </div>
        );
    }
};

export default Home;