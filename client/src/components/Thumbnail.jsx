import React from 'react';

const Thumbnail = (props) => {
    return (
      <>
        <div className="card link">
          <div className="image">
            <button className="icon powerbutton" type="button" onClick={() => props.updateLight(props.index, props.light[0])}>
              <i className={props.light[1].state.on ? "fas fa-lightbulb" : "far fa-lightbulb"}></i>
            </button>
          </div>
          <div className="content">
            <small className="meta">light • {props.light[1].state.on ? "ON" : "off"}</small>
            <h2>{props.light[1].name}</h2>
          </div>
        </div>
      </>
    );
}
 
export default Thumbnail;