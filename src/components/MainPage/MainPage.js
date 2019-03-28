import React from 'react';
import './MainPage.css'
import { auth, fireData } from '../../firebase';
import img from '../../images/logo.png';
import { connect } from 'react-redux';
import { userLoggedIn } from '../../actionsCreators/userAction';

class MainPage extends React.Component {
    state = {
        projects: null,
    }
    
    componentDidMount() {
        if (localStorage.getItem('userloggedin')) {
            this.props.userLoggedIn(true);
        } else {
            this.props.userLoggedIn(false);
        }
    }

    componentDidUpdate() {

        // FAKE SERVER REQUEST RESPONSE IMMITATION

            const items = {};

            const ref = fireData.ref('/users/');
            ref.limitToFirst(10).once('value').then(snapshot => {
                const users = snapshot.val();
                console.log(users)
    
                // for (let key in users) {
                //     for (const itemKey in users[key].items) {
                //         items[itemKey] = users[key].items[itemKey];
                //     }
                // }
                // this.setState({
                //     items
                // })
                console.log(items);
            })
    }

    // const projects = {};
                
                // if (auth.currentUser) {
                    // let uid = auth.currentUser.uid;
        
                //     fireData.ref(`users/${uid}/projects`).on('value', (snapshot) => {
                //         const projects = [];
                //         snapshot.forEach((child) => {
                //             projects.push(child.val());
                //         });
                        
                //         if (!this.state.projects) {
                //             this.setState({ projects }, () => {
                //                 console.log(this.state);
                //             });
                //         }
                //     });
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

export default connect(store => ({
    loggedIn: store.userReducer.loggedIn
}), { userLoggedIn })(MainPage);



{/* <div className={'wrapper'}>
<div style={{minHeight: '350px', marginTop: '95px'}} className={'wrapper'}></div>
        {
                Object.keys(this.state.projects).map((key, index) => {
                    return (
                        <div key={index} className={'main_container'}>
                                     <img src={this.state.projects[key].image} alt="Loading..." />  */}




                                     
        //                             <img src={img} alt="img"/>
        //                         <div div className={'product_info'}>
                                    
        //                                 <div >{this.state.projects[key].name}</div>
        //                                 <div >{this.state.projects[key].name}</div>
        //                                 <div >{this.state.projects[key].description}</div>
        //                         </div>
        //                         <button onClick={this.addToCart(this.state.projects[key])} className='buy-now-btn'>Buy Now</button>
                            
        //                 </div>
        //             )
        //         }) 
        // }
// </div> 