import React, { Component } from 'react';
// import Nav from '../components/Nav';
import Sidemenu from '../components/Sidemenu';
import { Link } from 'react-router-dom';


// class Profile extends Component {
//   constructor(props) {
//     super(props);
//         this.state = {
//           user: {
//             name: 'Peyton Perret',
//             avatar: 'https://seakoala.io/docs/images/universeLy.png',
//             email: 'kpeyton95@gmail.com', 
//             location: 'Austin, Tx'
//         }
//     }
//   }

// document.title = 'Profile';

const Profile = (props) => {
    // render() {
        return (
        <>
            <div className="profile-background">
                <div className="opacity">
                    {/* <Nav user={props.user}/> */}
                    <div className="grid medium">
                        <div className="grid sidemenu-left">
                            <Sidemenu />

                            <div className="content">
                                <h2>My account</h2>
                                <form>
                                    <div className="group">
                                        <label>Name</label>
                                        {/* <h4 type="text" >{props.user.name}</h4> */}
                                    </div>
                                    {/* <div className="group">
                                        <label>Email</label>
                                        <h4 type="email" defaultValue={props.user.email}>{props.user.email}</h4>
                                    </div> */}
                                    <div className="group">
                                        <label>Home</label>
                                        {/* <h4>{props.user.location}</h4> */}
                                    </div>
                                    {/* <div className="group">
                                        <label>Profile Picture</label>
                                        <div className="user">
                                            <div className="avatar" style={{ backgroundImage: `url(${props.user.avatar})` }}></div>
                                            <div className="name">
                                                <input type="file" />
                                            </div>
                                        </div>
                                    </div> */}
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
    // }
}


export default Profile;