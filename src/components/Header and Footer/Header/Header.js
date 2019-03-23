import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Modal from "../../Modal/Modal";
import Login from '../../Login and Register/Login/Login';
import Register from "../../Login and Register/Register/Register";
import './Header.css';
import logo from '../../../images/logo.jpg';

class Header extends Component {

    state = {
        showModal: false,
        modalContent: null,
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
        })
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
                            <div>
                                <Button variant="contained" color="primary" onClick={this.login}>Sign In</Button>
                                <Button variant="contained" color="primary" onClick={this.registeration}>Sign
                                    Up</Button>
                            </div>
                        </Toolbar>
                    </div>

                </AppBar>

            </>
        );
    }
}

export default Header;