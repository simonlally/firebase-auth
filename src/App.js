import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import fire from './config/fire.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    // return the home component if there is a user
    return (
      <div className='App'>
        { this.state.user ? (<Home/>) : (<Login/>) }
      </div>
      
      
    );
  }
}

export default App;
