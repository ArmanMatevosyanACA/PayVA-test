import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';


class Register extends React.Component {
        constructor(){
            super();
        this.state = {
        email: '',
        password: '',
        errorMessage: "",
        uid: "",
    };
    this.createUser = this.createUser.bind(this);
    this.getDatas = this.getDatas.bind(this);       
}
        getDatas(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    // onChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    componentDidMount() {
        if (localStorage.getItem("user")) {
            this.setState({
                uid: localStorage.getItem("user")
            })
        } else if (sessionStorage.getItem("user")) {
            this.setState({
                uid: sessionStorage.getItem("user")
            })
        }

        firebase.auth().onAuthStateChanged(() => {
            const user = firebase.auth().currentUser;

            if (user) {
                firebase.database().ref('users/' + user.uid + "/userInfo").on("value", (snapshot) => {
                    })
                }
            })
        }

    createUser(datas) {
        return () => {
            const user = firebase.auth();

            let userData = {
                name: datas.name,
                surname: datas.surname,
                date: datas.date,
            }

            datas.name.length >= 3 &&
                datas.surname.length >= 3 &&
                datas.date &&
                datas.password === datas.confirmPassword ?
                user.createUserWithEmailAndPassword(datas.email, datas.password)
                    .then(res => {
                        firebase.database().ref('users/' + res.user.uid + "/userInfo").set(userData);
                        this.signIn(datas)();
                        user.currentUser.sendEmailVerification();
                    })
                    .catch(err => {
                        this.setState({
                            errorMessage: err.message
                        });
                    }) :
                this.setState({
                    errorMessage: "No enough information"
                });
        }
    }

    render() {

        const {email,name,surname, password,cpassword} = this.state;

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
                            onChange={this.getDatas}
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
                            onChange={this.getDatas}
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
                            onChange={this.getDatas}
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
                            onChange={this.getDatas}
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
                            onChange={this.getDatas}
                        />
                    </Form.Field>

                    <Button primary onClick={this.createUser(this.getDatas)}>Log in</Button>
                    <Button primary onClick={this.props.canceled}>Cancel</Button>

                </Form>

            </div>
        );
    }
}

export default Register;


//     onSubmit = () => {
//         const errors = this.validate(this.state.data);
//         this.setState({errors});
//         if (Object.keys(errors).length === 0) {
//             this.props.submit(this.state.data);
//         }
//     };
//
//         return (
//             <Form onSubmit={this.onSubmit}>
//
