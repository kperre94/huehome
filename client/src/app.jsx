import React, { Component } from 'react';


const initialState = {
  isLoggedIn: false,
  route: 'login',
  user: {},

}
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        message: 'Hello World',
        user: {
          name: 'Peyton',
          home: 'current home'
        }
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