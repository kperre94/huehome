import React, { Component } from 'react';
import Nav from '../components/Nav';
import Sidemenu from '../components/Sidemenu';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

const user = {
    name: "Peyton",
    home: "Turkey Creek"
}


class Profile extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                edit: false
            }
        this.isEdit = this.isEdit.bind(this);
    }   

    isEdit() {
        let edit = this.state.edit;
    if (!edit) {
        this.setState({ edit: true });
    } else {
        this.setState({ edit: false });
    }
}

    render() {
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
                                        {this.state.edit ? <label className="pure-material-textfield-outlined">
                                                    <input placeholder=" " />
                                                    <span>{user.name}</span>
                                                </label>
                                            : <h3>{user.name}</h3>
                                        }
                                    </div>
                                    <div className="group">
                                        <label>Home</label>
                                        {this.state.edit ? <label className="pure-material-textfield-outlined">
                                                    <input placeholder=" " />
                                                    <span>{user.home}</span>
                                                </label>
                                            : <h3>{user.home}</h3>
                                        }
                                    </div>
                                </form>
                                <hr />
                                    <button style={{marginLeft: "550px"}} onClick={(e) => this.isEdit()}>Edit <i className="fas fa-pencil-alt"></i></button>
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
}


export default Profile;