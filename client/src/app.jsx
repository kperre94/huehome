import React, { Component } from 'react';
import Home from './components/Home.jsx';



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