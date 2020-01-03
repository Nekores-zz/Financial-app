import React, { Component } from 'react';
import "./Label.css"

class Label extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="_labelStyle" style={{backgroundColor: this.props.color}}>
                {this.props.labelText}
            </div>
        )
    }
}

export default Label
