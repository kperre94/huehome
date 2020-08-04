import React, { Component } from 'react';
import runtime from 'regenerator-runtime';
import axios from 'axios';
import Thumbnail from './Thumbnail';


class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: {
          name: '',
          avatar: ''
        },
        userLights: [],
      }
      this.getLight = this.getLight.bind(this);
      this.updateLight = this.updateLight.bind(this);
      this.alert = this.alert.bind(this);
  }

  async getLight(e, i, index) {
    try {
      let state = !this.state.userLights[i][1].state.on;
      let light = await axios.get(`/lights/${index}`, { on: state})
      this.setState({ light });

    } catch (e) { console.log(e)};
  }

  async updateLight(i, index) {
    try {
      let userLights = this.state.userLights;
      let state = !this.state.userLights[i][1].state.on;
      let response = await axios.put(`/lights/${index}`, { on: state });
      let hue = response.data[0].success[`/lights/${index}/state/on`]
      let currentLight = userLights[i][1];
      currentLight.state.on = hue;
      this.setState({ userLights });

    } catch (e) { console.log(e)};
  }

  async alert() {
    try {
      this.updateLight(7, 41)
    } catch (e) { console.log(e)};
  }

  async componentDidMount() {
    try {
      let lights = await axios.get('/lights')
        let userLights = []
        let obj = lights['data'];
          for (let key in obj) {
            userLights.push([key, obj[key]]);
          }
          this.setState({ userLights });
    } catch (e) { console.log(e)};
  }

  render() { 
    return (
      <>
          <div className="grid tall image home">
            <div className="grid middle five large">
              {this.state.userLights.map((l, i) => { 
                return ( 
                  <Thumbnail key={i}
                            light={l}
                            index={i}
                            getLight={this.getLight}
                            updateLight={this.updateLight}
                            onClick={() => onRouteChange('light')} />
                )
              })}
            </div>
          </div>
      </>
    );
  }
}
 
export default Home;