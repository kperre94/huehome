import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';



class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          id: '',
          name: '',
          email: '',
          avatar: ''
        }
      }
  }

  
  render() { 
    return ( 
      <>
        <Home />
      </>
    )
  }
}
 
export default App;