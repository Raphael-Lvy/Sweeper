import logo from './logo.svg';
import './App.css';
import React from "react";
import { User } from '../User/User';
import { Wall } from "../Wall/Wall";
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebaseConfig';
import { firebaseApp } from "../../firebaseConfig";
import { background } from "../../Assets/background.jpg";



const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sweeps: [] };
    this.addASweep = this.addASweep.bind(this);
    this.DeleteSweep = this.DeleteSweep.bind(this);
  }

  addASweep(sweep) {
    this.setState(state => {
      const sweeps = state.sweeps.concat(sweep);
      return { sweeps };
    })
  }

  DeleteSweep() {
    let sweeps = [...this.state.sweeps];
    const index = sweeps.length - 1;
    sweeps.splice(index, 1);
    this.setState({ sweeps: sweeps });
  }



  render() {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;


   

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> {!user ? <p></p> : <div className='flex'><h4>Welcome <span className="yellow">{user.displayName}</span></h4><button className="signUpButton" onClick={signOut}>Sign out</button></div>}
        </header>
        
        { user ? <div className='container'>
          <Wall sweeps={this.state.sweeps} DeleteSweep={this.DeleteSweep} user={user.displayName} />
          <User addASweep={this.addASweep} user={user.displayName} />
        </div> : <div className='flex'><button className="signUpButton" onClick={signInWithGoogle}>Please Sign in</button> </div>}
        
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
