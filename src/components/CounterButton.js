import React, { Component } from 'react';

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProp, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <button
                id='counter'
                onClick={()=> this.setState({count: this.state.count + 1})}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;