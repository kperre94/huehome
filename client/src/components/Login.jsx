import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
            name: '',
            email: '',
            password: '',
            location: '',
        },
        errorMsg:'',
        emailError: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, field) {
    let user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
    console.log(this.state.user)
  }

  render() { 
    return (
      <>
        <div className="login">
      <div className="grid center middle tall">
          <div className="card small">
            <div className="content">
              <form>
                {/* <div className="group">
                  <label>Email</label>
                  <input type="email" onChange={(e) => this.handleChange(e, 'email')}></input>
                </div> */}
                <div className="group">
                  <label>Role</label>
                  <select>
                    <option>select one</option>
                    <option>admin</option>
                    <option>user</option>
                  </select>
                  <label>Name</label>
                  <input type="password" onChange={(e) => this.handleChange(e, 'password')}></input>
                </div>
                <div className="group">
                  <label>Password</label>
                  <input type="password" onChange={(e) => this.handleChange(e, 'password')}></input>
                </div>
                <button className="button" onClick={() => onRouteChange('home')}>Login</button>
              </form>
              <span style={{color:"red"}}>{this.state.errorMsg}</span>
              <p className="footer">
                  If you haven't been assigned access, please see our Butler in the main entrance. 
                  
              </p>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
 
export default Login;