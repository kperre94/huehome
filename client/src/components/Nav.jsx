import React, { Component } from 'react';
import 'regenerator-runtime';
import { Link } from 'react-router-dom';
import { get } from '../lib/api.js';
import Sidebar from './Sidebar';

class Nav extends Component {
  constructor(props) {
    super(props);
      this.state = {
        dropdown: false,
        nav: false,
        weather: {},
        date: ''
      }
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.toggleNav = this.toggleNav.bind(this);
      this.getWeather = this.getWeather.bind(this);
      this.getTime = this.getTime.bind(this);
  }

toggleDropdown() {
    let dropdown = this.state.dropdown;
    if (!dropdown) { this.setState({ dropdown: true })}
    else { this.setState({ dropdown: false });}
  };

  toggleNav() {
    let nav = this.state.nav;
    if (!nav) { this.setState({ nav: true })}
    else { this.setState({ nav: false });}
  };

  async getWeather() {
    try {
      let weather = await get('http://api.weatherstack.com/current', 
      { params: { 
        access_key: '992b72fce74d72ad683fffe306ab64d7',
        query: 'Austin Texas',
        units: 'f'
        }
      })
      let currentWeather = weather.data.current;
      this.setState({ weather: currentWeather });
    } catch (e) {console.log(e)};
  }

  getTime() {
    var time = new Date().toLocaleTimeString('en-US',{timeZone:'America/Chicago'});
    var newTime = time.slice(0, 4);
    this.setState({ date: newTime });
  }

  async componentDidMount() {
    try {
      // this.getWeather();
      this.getTime();
    } catch (e) {console.log(e)};
  }


  render() {
    return (
      <>
        <nav>
          <div className="logo">
            <button onClick={() => this.toggleNav()} className="" type="button" >
              <div className="fas fa-home"></div>
            </button>
          </div>
          <Sidebar isOpen={this.state.nav} toggleNav={this.toggleNav}/>
          <div className="profile">
            <div className="button">
            <i className="fas fa-sun"></i>
            <i> {this.state.weather.temperature}°</i>
            <i style={{fontSize: "25px", marginRight: "12px", marginLeft: "20px"}}>{this.state.date}</i>
            <i className="fa fas fa-thermometer-half"></i><i> 72°</i>
            {/* {this.state.weather.wind_speed > 5 ? <i className="fas fa-wind"><i> {this.state.weather.wind_speed} mph</i></i>  : "" } */}
          </div>
          </div>
          <div className="dropdown">
          <button onClick={() => this.toggleDropdown()} className="button fas fa-ellipsis-v">
          </button>
            <div id="myDropdown" className={this.state.dropdown ? "dropdown-content show" : "dropdown-content"}>
              <Link to="/profile">Account</Link>
              <Link to="/">Settings</Link>
              <Link to="/signin">Sign out</Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
};
 
export default Nav;