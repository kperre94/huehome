import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <>
      <div id="mySidebar" className={props.isOpen ? "sidebar" : "hidden"}>
        <a href="javascript:void(0)" className="closebtn" onClick={props.toggleNav}>&times;</a>
        <div>
        <h4>SEARCH</h4>
          <Link to="/rooms">Rooms</Link>
          <a to="/scenes">Scenes</a>
          <a to="/routines">Routines</a>
        </div>
        <h4>TYPE</h4>
        <div>
          <Link to="/profile">Media</Link>
          <Link to="/profile">Lights</Link>
          <Link to="/profile">Outlets</Link>
          <Link to="/profile">Cameras</Link>
          <Link to="/profile">Thermostat</Link>
        </div>
        <h4>ACCOUNT</h4>
        <div>
          <Link to="/profile">Settings</Link>
          <Link to="/signin">Log out</Link>
        </div>
      </div>
    </>
  )
};
 
export default Sidebar;