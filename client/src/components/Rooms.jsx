import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Rooms extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rooms: [
          {id: 1, name: 'Porch', devices: []},
          {id: 2, name: 'Main entrance', devices: []},
          {id: 3, name: 'Dining room', devices: []},
          {id: 4, name: 'Kitchen', devices: []},
          {id: 5, name: 'Living room', devices: []},
          {id: 6, name: 'Master bedroom', devices: []},
          {id: 7, name: 'Guest room', devices: []},
          {id: 8, name: 'Gym', devices: []},
          {id: 9, name: 'Theatre', devices: []}
        ],
        // floors: ['FLOOR 2', 'FLOOR 3'],
        // bigImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnimages.familyhomeplans.com%2Fplans%2F75913%2F75913-1l.gif&imgrefurl=https%3A%2F%2Fwww.familyhomeplans.com%2Fhouse-plan-75913&tbnid=JU3X-BURpP1CWM&vet=10CBAQxiAoAWoXChMI2L3UgYOH6wIVAAAAAB0AAAAAEAc..i&docid=9ovpi_-DrCVNpM&w=653&h=1244&itg=1&q=house%20blueprint%20with%20pool&ved=0CBAQxiAoAWoXChMI2L3UgYOH6wIVAAAAAB0AAAAAEAc',
        bigImage: 'https://www.google.com/search?q=house+blueprint+with+pool&tbm=isch&ved=2ahUKEwjJ18q5xYXrAhUMgK0KHbn8DM0Q2-cCegQIABAA&oq=house+blueprint+with+pool&gs_lcp=CgNpbWcQAzoCCAA6BAgAEEM6BggAEAgQHlD2-QFYoIkCYKaLAmgAcAB4AIABV4gB3gWSAQIxMJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bWwrX4ntAYyAtgW5-bPoDA&bih=919&biw=1039&rlz=1C5CHFA_enUS903US904#imgrc=Zk5toU-h5bmg9M',
        images: ['https://www.google.com/search?q=house+blueprint+with+pool&tbm=isch&ved=2ahUKEwjJ18q5xYXrAhUMgK0KHbn8DM0Q2-cCegQIABAA&oq=house+blueprint+with+pool&gs_lcp=CgNpbWcQAzoCCAA6BAgAEEM6BggAEAgQHlD2-QFYoIkCYKaLAmgAcAB4AIABV4gB3gWSAQIxMJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bWwrX4ntAYyAtgW5-bPoDA&bih=919&biw=1039&rlz=1C5CHFA_enUS903US904#imgrc=Zk5toU-h5bmg9M', 'www.google.com/search?q=house+blueprint+with+pool&tbm=isch&ved=2ahUKEwjJ18q5xYXrAhUMgK0KHbn8DM0Q2-cCegQIABAA&oq=house+blueprint+with+pool&gs_lcp=CgNpbWcQAzoCCAA6BAgAEEM6BggAEAgQHlD2-QFYoIkCYKaLAmgAcAB4AIABV4gB3gWSAQIxMJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bWwrX4ntAYyAtgW5-bPoDA&bih=919&biw=1039&rlz=1C5CHFA_enUS903US904#imgrc=Zk5toU-h5bmg9M']
      }
      this.changeBigImage = this.changeBigImage.bind(this);
  }

  changeBigImage(i) {
        this.setState({
            bigImage: this.state.images[i]
        })
    }

  render() { 
    return (
      <>
        <div className="profile-background">
        {/* <div className="opacity"> */}
        <Nav />
          <div style={{padding: "20px"}} className="grid three">
            <div>
              <div style={{marginTop: "200px"}}>
                {this.state.rooms.map((r, i) => { return ( <Link to='/rooms/${r.id}'><button key={i} id={r.id} room={r}>{r.name}</button></Link>)})}
              </div>
              <div className="icon" style={{textAlign: "right"}}>
                <button>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            {/* <div>
              <h3 style={{textAlign: "center"}}>CURRENT FLOOR(1)</h3>
              <div style={{height: "600px"}} className="floorplan"></div>
            </div> */}
            {/* <div>
                <div style={{marginTop: "140px"}}>
              {this.state.floors.map((f, i) => {
                return (
                  <div style={{textAlign: "center", padding: "20px"}}
                    key={i}
                    id={f.id}
                    floor={f}>
                    <h3>{f}</h3>
                    <div style={{height: "200px", width: "200px"}} className="floorplan"></div>
                    </div>
                )
              })}
                  </div>
            </div>
          </div> */}
        </div>
        </div>
      </>
    );
  }
}
 
export default Rooms;