import React from 'react';
import './Itempage.css';
import img from  '../../../images/logo.png';

class ItemPage extends React.Component {


    render() {
        return (
            <div>
                <div className='img'><img src={img}/></div>
                <div className="container">
                    <div className='product-name'><p>Product Name</p></div>
                    <div className='product-author'><p>Product Author</p></div>
                    <div className='product-description'><p>Product description</p></div>
                </div>
            </div>
        )
    }
}

export default ItemPage