import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {auth, fireData} from "../../../firebase";


class Register extends React.Component {

    state = {
        email: '',
        name: '',
        surname: '',
        password: '',
        cpassword: '',
        errorMessage: '',
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

        // dataToSubmit.name.length >= 3 &&
        // dataToSubmit.surname.length >= 3 &&
        // dataToSubmit.email &&
        // dataToSubmit.password === dataToSubmit.cpassword ?

       
    //     .catch(err => {
    //         console.log(err);
    //         this.setState({
    //             errorMessage: err.message
    //         });
    //     }) :
    //     this.setState({
    //     errorMessage: "No enough information"
    // });
        const {  email, password } = this.state;
        
        
        fireData.ref('users').push(
            {
                ...dataToSubmit
            },
        )
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log(authUser);
            })
          
        this.props.clicked()    
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


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
                    {/* {
                        this.state.errorMessage &&
                        <h4 className="error-message">{this.state.errorMessage}</h4>
                    } */}
                    <Button primary>Register</Button>
                    <Button primary onClick={this.props.canceled}>Cancel</Button>

                </Form>

            </div>
        );
    }
}

export default Register;



