import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {

    render(){
        return(
            <div>
                <div className="panel-contact">
                    <h3>Contact</h3>
                </div>
                <span className="Next-contact" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
}

export default Contact