import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {}
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, field) {
    let user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
  }

  render() { 
    return (
      <>
        <div>
          <form>
            <label>Email</label>
            <input type="email" onChange={(e) => this.handleChange(e, 'email')}></input>
            <label>Password</label>
            <input type="password" onChange={(e) => this.handleChange(e, 'password')}></input>
          </form>
        </div>
      </>
    );
  }
}
 
export default Login;