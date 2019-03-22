import './Layout.css';

import React from 'react';
import Header from "../../components/Header and Footer/Header/Header";
import Footer from "../../components/Header and Footer/Footer/Footer";

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;