import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {fireData} from "../../../firebase";


class Register extends React.Component {

    state = {
        email: '',
        name: '',
        surname: '',
        password: '',
        cpassword: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        let stateClone = {...this.state};
        let dataToSubmit={};


        for(let key in stateClone){
            if (key!=='cpassword') {
                dataToSubmit[key] = stateClone[key]
            }
        }

        console.table([{
            email:dataToSubmit.email,
            name:dataToSubmit.name,
            surname:dataToSubmit.surname,
            password: dataToSubmit.password
        }]);


        fireData.ref('users').push(
            {
                ...dataToSubmit
            },
        );

        this.props.clicked();

    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // componentDidMount() {
    //     if (localStorage.getItem("user")) {
    //         this.setState({
    //             uid: localStorage.getItem("user")
    //         })
    //     } else if (sessionStorage.getItem("user")) {
    //         this.setState({
    //             uid: sessionStorage.getItem("user")
    //         })
    //     }
    //
    //     firebase.auth().onAuthStateChanged(() => {
    //         const user = firebase.auth().currentUser;
    //
    //         if (user) {
    //             firebase.database().ref('users/' + user.uid + "/userInfo").on("value", (snapshot) => {
    //             })
    //         }
    //     })
    // }
    //
    // createUser(datas) {
    //     return () => {
    //         const user = firebase.auth();
    //
    //         let userData = {
    //             name: datas.name,
    //             surname: datas.surname,
    //             date: datas.date,
    //         }
    //
    //         datas.name.length >= 3 &&
    //         datas.surname.length >= 3 &&
    //         datas.date &&
    //         datas.password === datas.confirmPassword ?
    //             user.createUserWithEmailAndPassword(datas.email, datas.password)
    //                 .then(res => {
    //                     firebase.database().ref(`users/${res.uid}`).set(userData);
    //                     this.signIn(datas)();
    //                     user.currentUser.sendEmailVerification();
    //                 })
    //                 .catch(err => {
    //                     this.setState({
    //                         errorMessage: err.message
    //                     });
    //                 }) :
    //             this.setState({
    //                 errorMessage: "No enough information"
    //             });
    //     }
    // }

    render() {

        const {email, name, surname, password, cpassword} = this.state;

        return (
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: "20px"
                }}>

                </div>

                <Form onSubmit={this.onSubmit}>

                    <Form.Field>
                        <label htmlFor={'email'}>Email</label>
                        <input
                            type="email"
                            id={'email'}
                            name={'email'}
                            placeholder='example@example.com'
                            value={email}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor={'name'}>Name</label>
                        <input
                            type="text"
                            id={'name'}
                            name={'name'}
                            placeholder='please enter your name'
                            value={name}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor={'surname'}>Surname</label>
                        <input
                            type="text"
                            id={'surname'}
                            name={'surname'}
                            placeholder='please enter your surname'
                            value={surname}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor={'password'}>Password</label>
                        <input
                            type="password"
                            id={'password'}
                            name={'password'}
                            placeholder='please enter your password'
                            value={password}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor={'cpassword'}>Confirm password</label>
                        <input
                            type="password"
                            id={'cpassword'}
                            name={'cpassword'}
                            placeholder='please confirm your password'
                            value={cpassword}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <Button primary>Log in</Button>
                    <Button primary onClick={this.props.canceled}>Cancel</Button>

                </Form>

            </div>
        );
    }
}

export default Register;



