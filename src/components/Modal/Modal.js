import React from 'react';
import './Modal.css';
import {BackDrop} from "./Backdrop";

const Modal = (props) => {
    return (
        <div>
            <BackDrop clicked={props.clicked}/>
            <div className={'Modal'}>
                {props.children}
            </div>
        </div>

    );
};

export default Modal;