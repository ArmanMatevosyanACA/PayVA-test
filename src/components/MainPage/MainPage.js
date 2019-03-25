import React from 'react';
import './MainPage.css'

import img from '../../images/logo.png';

const MainPage = () => {
    return (
        <div className={'wrapper'}>
            <div style={{minHeight: '350px'}} className={'wrapper'}>

                <div className={'main_container'}>
                    <img src={img} alt="img"/>
                    <div className={'product_info'}>
                        <div>name</div>
                        <div>author</div>
                        <div>description</div>
                    </div>
                </div>
                <div className={'main_container'}>
                    <img src={img} alt="img"/>
                    <div className={'product_info'}>
                        <div>name</div>
                        <div>author</div>
                        <div>description</div>
                    </div>
                </div>
                <div className={'main_container'}>
                    <img src={img} alt="img"/>
                    <div className={'product_info'}>
                        <div>name</div>
                        <div>author</div>
                        <div>description</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;