import React from 'react';
import './MainPage.css'
import {auth, fireData} from '../../firebase';
import img from '../../images/logo.png';


class MainPage extends React.Component {
    state = {
        items: null,
    }
    
    // componentDidMount() {
    //     const items = {}; 
    //     let uid = auth.currentUser.uid;
    //     const ref = fireData.ref('users/' + uid + "/items");
    //     ref.limitToFirst(10).once('value').then(snapshot => {
    //         const users = snapshot.val();

    //         for (let key in users) {
    //             for (const itemKey in users[key].items) {
    //                 items[itemKey] = users[key].items[itemKey];
    //             }
    //         }
    //         this.setState({
    //             items
    //         })
    //     })
    // }
    
    render() {
        return (
            <div className={'wrapper'}>
            <div style={{minHeight: '350px', marginTop: '95px'}} className={'wrapper'}>

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
        
    }
}

export default MainPage;



{/* <div className={'wrapper'}>
<div style={{minHeight: '350px', marginTop: '95px'}} className={'wrapper'}></div>
        {
                Object.keys(this.state.items).map((key, index) => {
                    return (
                        <div key={index} className={'main_container'}>
                                     <img src={this.state.items[key].image} alt="Loading..." />  */}




                                     
        //                             <img src={img} alt="img"/>
        //                         <div div className={'product_info'}>
                                    
        //                                 <div >{this.state.items[key].name}</div>
        //                                 <div >{this.state.items[key].name}</div>
        //                                 <div >{this.state.items[key].description}</div>
        //                         </div>
        //                         <button onClick={this.addToCart(this.state.items[key])} className='buy-now-btn'>Buy Now</button>
                            
        //                 </div>
        //             )
        //         }) 
        // }
// </div> 