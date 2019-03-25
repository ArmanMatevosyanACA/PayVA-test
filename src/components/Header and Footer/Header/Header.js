import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Modal from "../../Modal/Modal";
import Login from '../../Login and Register/Login/Login';
import Register from "../../Login and Register/Register/Register";
import './Header.css';
import logo from '../../../images/logo.png';

import {auth} from '../../../firebase';

class Header extends Component {

    state = {
        showModal: false,
        modalContent: null,
        currentUser: null,
    };


    openModal = () => {
        this.setState({
            showModal: true,
        })
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) {
                this.closeModal()
            }
        });


        setTimeout(() => {
            this.setState({
                currentUser: auth.currentUser
            })
        }, 1000)

    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.closeModal)
    }

    login = () => {
        this.openModal();
        this.setState({
            modalContent: <Login canceled={this.closeModal} clicked={this.closeModal}/>
        })
    };

    registeration = () => {
        this.openModal();
        this.setState({
            modalContent: <Register canceled={this.closeModal} clicked={this.closeModal}/>
        })
    };

    render() {
        return (
            <>
                {this.state.showModal ?
                    <Modal clicked={this.closeModal}>
                        {this.state.modalContent}
                    </Modal> : null}

                <AppBar style={{
                    position: 'inherit',
                    backgroundColor: '#123456'
                }}>
                    <div className={'wrapper'}>

                        <Toolbar className={'toolbar'}>
                            <Link style={{flexGrow: '1'}} to={'/'}>
                                <img className={'logo'} src={logo} alt=""/>
                            </Link>

                            {this.state.currentUser ?
                                <div>
                                    {this.state.currentUser.email}
                                    <Button variant="contained" color="primary" onClick={() => {
                                        auth.signOut();
                                    }
                                    }>Log out</Button>
                                </div>

                                :
                                <div>

                                    <Button variant="contained" color="primary" onClick={this.login}>Sign In</Button>
                                    <Button variant="contained" color="primary" onClick={this.registeration}>Sign
                                        Up</Button>
                                </div>
                            }

                        </Toolbar>
                    </div>

                </AppBar>

            </>
        );
    }
}

export default Header;