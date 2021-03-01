import React from 'react';
import './User.css';
import firestore from "../../firebaseConfig";
import firebase from "firebase/app";
import { db } from '../../firebaseConfig';
export class User extends React.Component {



    constructor(props) {
        super(props);
        this.state = { newSweep: '', on :false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSweep = this.handleSweep.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleChange(e) {
        this.setState({ newSweep: e.target.value })
    }

    handleSweep(e) {
        e.preventDefault();
        if (!this.state.newSweep) {
            return;
        }
        this.props.addASweep(this.state.newSweep);



        const sweep = db.collection('sweeps').add({
            sweep: this.state.newSweep,
            user: this.props.user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        this.setState({ newSweep: '', user: '' });
        document.querySelector('#enter').value = '';
        const submitButton = document.querySelector(".UserSubmitButton");
        submitButton.style.boxShadow = '0px 2px 0px #84261a';
        submitButton.style.top = '7px';

        setTimeout(() => {
            submitButton.style.boxShadow = '0px 9px 0px #84261a';
            submitButton.style.top = '0px';
        }, 150);
    }

    toggle () {
        if(this.state.on === false) {
        this.setState({on: true})
    } else {
        this.setState({on: false});
    }

    }


    render() {
        const active = this.state.on;
        return (
            <div className="userBoard">
                <div className='button'>
                <h4>Make a <span className='red'>Sweep</span> {this.props.user}</h4>
                <button className='toggle' onClick={this.toggle}>{active? 'Close':  'Open'}</button></div>
                 {active? <> 
                <input className='textEntry' placeholder="Type your Sweep here..." id='enter' onChange={this.handleChange}></input>
                <br></br>
                <br></br>
                <button class='UserSubmitButton' type='submit' onClick={this.handleSweep} >Sweep!</button></> : <> </>}


            </div>
        )
    }
}