import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
    };


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
                            id={'email'}
                            name={'email'}
                            placeholder='example@example.com'
                            value={email}
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


                    <Button primary>Log in</Button>
                    <Button primary onClick={this.props.canceled}>Cancel</Button>

                </Form>

            </div>
        );
    }
}

export default Login;


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
