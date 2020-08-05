import React, { Component } from 'react';
import 'regenerator-runtime';

const Nav = (props) => {
      return (
        <>
          <nav>
            <div className="logo">
                <button className="" type="button" >
                  <i className="fas fa-home"></i>
                </button>
            </div>
            <div className="profile">
                <div className="button">
                    <div className="avatar" style={{backgroundImage: `url(${props.user.avatar})` }}></div>
                    <span>{props.user.name}</span>
                </div>
            </div>
            <div className="dropdown">
            <button onClick={() => props.dropdown()} className="button fas fa-ellipsis-v" type="button" >
            </button>
              <div id="myDropdown" className={props.isShown ? "dropdown-content show" : "dropdown-content"}>
                <a to="/">Settings</a>
                <a to="/">Profile</a>
                <a to="/">Sign out</a>
              </div>
            </div>
          </nav>
        </>
      )
};
 
export default Nav;