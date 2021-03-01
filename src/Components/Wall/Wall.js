import React, { useState, useEffect } from 'react';
import './Wall.css';
import { Sweep } from "../sweep/sweep";
import firestore from "../../firebaseConfig";
import firebase from "firebase/app";
import { ReadSweep } from "../ReadSweep/ReadSweep";
import {  db} from "../../firebaseConfig";
export class Wall extends React.Component {

    constructor(props) {
        super(props);
        this.deleteSweep = this.deleteSweep.bind(this);
        this.state = {sweeps:[]}
    }

    deleteSweep() {
        this.props.DeleteSweep();
    }

    componentDidMount() {
        db.collection("sweeps")
        .orderBy("timestamp", "desc")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ sweeps: data });
          });
      }


    render() {


        return (
            <div className="wall">
                  <h2><span className='yellow'>Sweep</span>.io!</h2>
                <h4>See the latest <span className='yellow'>Sweeps</span> </h4>
                <div className='sweepsWall'>
                    
                    {this.props.sweeps.map(sweep => {
                        return <Sweep sweep={sweep} user={this.props.user} />
                    })}
                    {this.state.sweeps.map(sweep => {
                        return <Sweep sweep={sweep.sweep} user={sweep.user} />
                    })}
                    { this.props.sweeps.length > 0 && <button class='submitButton' type='submit' onClick={this.deleteSweep} >Delete!</button>}
                </div>
                
            </div>
        )
    }
}





