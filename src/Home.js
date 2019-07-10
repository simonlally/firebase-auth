import React from 'react';
import fire from './config/fire';

class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>   
                <h1>Login Successful.</h1>
                <button onClick={this.logout}>Log Out</button>
            </div>
        )
    }
}

export default Home;