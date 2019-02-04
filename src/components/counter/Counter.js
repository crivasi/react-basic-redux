import React, { Component } from "react";

import { connect } from 'react-redux'; //se necesita para conectar los componentes con redux por medio de mapStateProps

import "./Counter.css";

import { Button } from "./../button/Button";

class Counter extends Component {
    increment  = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement  = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div className="counter-component">
                <h2 className="title-component">
                    Counter Component
                </h2>
                <div>
                    <Button 
                        title="-" 
                        click={this.decrement}
                    />
                    <span className="number-count">
                        { this.props.counter.counter }
                    </span>
                    <Button 
                        title="+" 
                        click={this.increment}
                    />
                </div>
            </div>
        )
    }
}

const mapStateProps = state => ({ 
    counter: state.counterReducer
});

export default connect(mapStateProps)(Counter);