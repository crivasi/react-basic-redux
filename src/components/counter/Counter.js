import React, { Component } from "react";
import "./Counter.css";

import { Button } from "./../button/Button";

export class Counter extends Component {
    constructor() {
        super();
        this.state = {counter: 0};
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
                        actionButton={() => 
                            this.setState(
                                prevState => 
                                    ({ counter: prevState.counter - 1 })
                        )}
                    />
                    <span className="number-count">
                        {this.state.counter}
                    </span>
                    <Button 
                        title="+" 
                        actionButton={() => 
                            this.setState(
                                prevState => 
                                    ({ counter: prevState.counter + 1 })
                        )}
                    />
                </div>
            </div>
        )
    }
}