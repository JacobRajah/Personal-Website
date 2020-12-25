import React, { Component } from 'react';
import './software-exp.css';

function DropDown(props) {
    const [drop, setDrop] = React.useState(0);
    return (
        <span className="drop-down"
                onClick={() => {setDrop(1);}}
                onAnimationEnd={() => {setDrop(0)}}
                drop={drop}>
            <p className="d1"></p><p className="d2"></p>
        </span>
    )
}

class Software extends Component{
    
    render() {
        return (
            <div>
                <div className="panel-software">
                    <h2 className="sw-heading">Software Experience</h2>
                    <DropDown></DropDown>
                </div>
                <span className="Next" onClick={() => this.props.backOptions()}>
                    <p className="a1"></p><p className="a2"></p>
                </span>
            </div>
        )
    }
    
}

export default Software;