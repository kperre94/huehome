import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidemenu extends Component {
  constructor(props) {
    super(props);
      this.state = {
        pressedButton: this.props.page
      }
  }

  render() {
    return (
    <>
      <div className="sidemenu">
      <h4 style={{margin: "10px 0px", color: "black"}}>Your home</h4>
        <ul>
          <li className="active">
              <a to="/profile">Profile</a>
          </li>
          <li className="">
              <Link to="/rooms">Rooms & zones</Link><i style={{textAlign: "right"}} className="fas fa-angle-right"></i>
          </li>
          <li className={this.state.pressedButton === 'favorites' ? 'active' : ''}>
              <a to="/favorites">Light setup</a>
          </li>
          <li className={this.state.pressedButton === 'host' ? 'active' : ''}>
              <a to="/host">Accessory setup</a>
          </li>
        </ul>
        <h4 style={{margin: "10px 0px", color: "black"}}>Automation</h4>
        <ul>
          <li className="">
              <a to="/profile">Homekit & siri</a>
          </li>
          <li className="">
              <a to="/profile">Away mode</a>
          </li>
        </ul>
        <h4 style={{margin: "7px 0px", color: "black"}}>Out of home control</h4>
        <ul>
          <li className="">
              <a style={{textAlign: "right"}} to="/profile"><i onClick="" className="fas fa-toggle-on"></i></a>
          </li>
        </ul>
        <h4 style={{margin: "10px 0px", color: "black"}}>Energy</h4>
        <ul>
          <li className="">
              <a to="/profile">Usage</a>
          </li>
          <li className="">
              <a to="/profile">Preferences</a>
          </li>
        </ul>
      </div>
      </>
    )
  }
}

export default Sidemenu;