import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        message: 'Hello World'
      }
  }

  
  render() { 
    return ( 
      <>
        <div>{this.state.message}</div>
      </>
    )
  }
}
 
export default App;