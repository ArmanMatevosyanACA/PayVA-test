import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Modal from "../../Modal/Modal";
import Login from '../../Login and Register/Login/Login';
import Register from "../../Login and Register/Register/Register";

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
            modalContent: <Login canceled={this.closeModal}/>
        })
    };

    registeration = () => {
        this.openModal();
        this.setState({
            modalContent: <Register canceled={this.closeModal}/>
        })
    };

    render() {
        return (
            <>
                {this.state.showModal ?
                    <Modal clicked={this.closeModal}>
                        {this.state.modalContent}
                    </Modal> : null}
                <AppBar
                    position='fixed'
                    style={{
                        backgroundColor: '#999999',
                        padding: '20px 50px',
                        borderBottom: '2px solid black'
                    }}
                >
                    <Toolbar style={{display: 'flex'}}>
                        <Link style={{flexGrow: '1'}} to={'#'}>Logo</Link>
                        <div>
                            <Button variant="contained" color="primary" onClick={this.login}>Sign In</Button>
                            <Button variant="contained" color="primary" onClick={this.registeration}>Sign Up</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

export default Header;