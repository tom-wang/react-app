import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            j: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.j++;
        this.setState(this.state);
    }

    render() {
        return (
                <div>
                    <button onClick={this.handleClick}>Click {this.state.j}!</button>
                </div>
               );
    }
}
export default App;
