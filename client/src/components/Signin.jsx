import React, { Component } from 'react';
import 'regenerator-runtime';
import { Link } from 'react-router-dom'
import { post } from '../lib/api.js';


class Signin extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
            email: '',
            password: ''
        },
        errorMsg:'',
        emailError: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.signin = this.signin.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async signin(e) {
    try {
      e.preventDefault();
      // if (!this.state.user.email || !this.state.user.password) {
      //       this.setState({ errorMsg: 'missing fields' })
      // } else {
        // post('signin', this.state.user)
        // this.props.history.push({
        //   pathname: `/`
        // })
      // }
      post ('signin', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      let token = res.data.token
      localStorage.setItem('token', token)
    }).catch(err => {
      console.log(err)
      alert("Error logging in! Please check your information carefully!")
    })
    } catch (e) { console.log(e)};
  }

  render() { 
    return (
      <>
        <div className="login">
      <div className="grid center middle tall">
          <div className="card small">
            <div className="content">
              <form onSubmit={this.signin}>
                {/* <div className="group">
                  <label>Email</label>
                  <input type="email" onChange={(e) => this.handleInputChange(e, 'email')}></input>
                </div> */}
                {/* <div className="group">
                  <label>Role</label>
                  <select>
                    <option>select one</option>
                    <option>admin</option>
                    <option>user</option>
                  </select>
                </div> */}
                <div className="group">
                  <label>Email</label>
                  <input type="email" name="email" onChange={this.handleInputChange}></input>
                </div>
                <div className="group">
                  <label>Password</label>
                  <input type="password" name="password" onChange={this.handleInputChange}></input>
                <span style={{color:"red"}}>{this.state.errorMsg}</span>
                </div>
                <button type="submit" className="primary">Login</button>
              </form>
              <p className="footer">
                  If you haven't been assigned access, please visit our Butler <Link to='/signup'><a>here</a></Link> for assistance. 
              </p>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
 
export default Signin;