import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {auth} from '../../../firebase';


class Login extends React.Component {

    state = {
        email: '',
        password: '',
        errorMessage: '',
    };

    onSubmit = (e) => {
        e.preventDefault();

        let {email, password} = this.state;


        auth.signInWithEmailAndPassword(
            email,
            password
        ).then((a) => {
            console.log('uraaa');
        }).catch(err => {
            this.setState({
                errorMessage: err.message
            });
        }) 
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };

    render() {
        const {email, password} = this.state;

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
                            id='email'
                            name='email'
                            placeholder='example@example.com'
                            value={email}
                            onChange={this.onChange}
                            className='input-of-form'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor={'password'}>Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            placeholder='please enter your password'
                            value={password}
                            onChange={this.onChange}
                            className='input-of-form'
                        />
                    </Form.Field>

                     {
                        this.state.errorMessage &&
                        <h4 className="error-message" style={{
                            fontSize: '14px',
                            color: 'red',
                            textAlign: 'center',
                          }}>{this.state.errorMessage}</h4>
                    }
                    <Button primary>Log in</Button>
                    <Button primary onClick={this.props.canceled}>Cancel</Button>

                </Form>

            </div>
        );
    }
}

export default Login;



