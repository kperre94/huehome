import React from 'react';
import Nav from '../components/Nav';
import Sidemenu from '../components/Sidemenu';
import { Link } from 'react-router-dom';

const Profile = (props) => {
        return (
        <>
            <div className="profile-background">
                <div className="opacity">
                    <Nav />
                    <div className="grid medium">
                        <div className="grid sidemenu-left">
                            <Sidemenu />

                            <div className="content">
                                <h2>My account</h2>
                                <form>
                                    <div className="group">
                                        <label>Name</label>
                                    </div>
                                    <div className="group">
                                        <label>Home</label>
                                    </div>
                                </form>
                                <hr />
                                    <button style={{marginLeft: "550px"}}>Edit <i className="fas fa-pencil-alt"></i></button>
                                    
                                <Link to='/login' >
                                    <button className="secondary">Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
        )
}


export default Profile;