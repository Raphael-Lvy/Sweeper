import React from 'react';
import './sweep.css';

export class Sweep extends React.Component {
    render() {
        return (<div className='sweep'>
            <p >{this.props.sweep}</p>
            <div className='user'>
                <p >{this.props.user}</p>
            </div>
        </div>
        );


    }
}

