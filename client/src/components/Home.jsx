import React, { Component } from 'react';
import 'regenerator-runtime';
import axios from 'axios';
import Nav from './Nav';
import Thumbnail from './Thumbnail';
import { get } from '../lib/api.js';

class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          name: '',
          avatar: ''
        },
        userLights: [],
        locations: [],
        weather: {},
        colorpicker: false
      }
      this.getLight = this.getLight.bind(this);
      this.updateLight = this.updateLight.bind(this);
      this.toggleColorpicker = this.toggleColorpicker.bind(this);
      this.getLocations = this.getLocations.bind(this);
  }

  async getLight(e, i, index) {
    try {
      let state = !this.state.userLights[i][1].state.on;
      let light = await get (`/lights/${index}`, { on: state})
      console.log(light)
      this.setState({ light });
    } catch (e) { console.log(e)};
  }

  async updateLight(i, index) {
    try {
      let userLights = this.state.userLights;
      let state = !this.state.userLights[i][1].state.on;
      let response = await post (`/lights/${index}`, { on: state });
      let hue = response.data[0].success[`/lights/${index}/state/on`]
      let currentLight = userLights[i][1];
      currentLight.state.on = hue;
      this.setState({ userLights });

    } catch (e) { console.log(e)};
  }

  toggleColorpicker(i, index) {
    let userLights = this.state.userLights;
    let colorpicker = !this.state.userLights[i][1].colorpicker;
    let currentLight = userLights[i][1];
    currentLight['colorpicker'] = colorpicker;
    this.setState({ userLights });
    console.log(this.state.userLights[i][1]['colorpicker'])
  }

  async componentDidMount() {
    try {
      let lights = await axios.get('/lights')
        let userLights = []
        let obj = lights['data'];
          for (let key in obj) {
            userLights.push([key, obj[key], obj[key].colorpicker = false]);
          }
          this.setState({ userLights });
          console.log(this.state.userLights)
    } catch (e) { console.log(e)};
  }

    async getLocations() {
    try {
      let data = await axios.get('/locations')
      let locations = data.json();
      this.setState({ locations });
    } catch (e) { console.log(e)}
  }

  render() { 
    return (
      <>
          <div className="grid tall image home">
            <Nav />
            <div className="grid middle five large">
              {this.state.userLights.map((l, i) => { 
                return ( 
                  <Thumbnail 
                    key={i}
                    light={l}
                    index={i}
                    i={i}
                    getLight={this.getLight}
                    updateLight={this.updateLight}
                    toggleColorpicker={this.toggleColorpicker}
                  />
                )
              })}
            </div>
          </div>
      </>
    )
  }
};
 
export default Home;