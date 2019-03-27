import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {auth, fireData} from '../../../../firebase';
import FileUploader from "react-firebase-file-uploader";
// import * as firebase from 'firebase/app';



class CreateProject extends React.Component {

    state = {
            image: '',
            name: '',
            description: '',
    }
    handleUploadSuccess(filename) {
        let uid = auth.currentUser.uid;
        fireData
        .ref('users/' + uid + "/projects" + 'images')
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState((prevState) => {
            return {
                ...prevState,
                item: {
                    ...prevState.item,
                    image: url
                }
            }
        }));
}

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state)
    };

    addItems = (e) => {
 
        let projectData = {
            image: this.state.image,
            projectName: this.state.name,
            projectDescription: this.state.description,
        }
        
        console.log(projectData);

        let uid = auth.currentUser.uid;
        console.log(uid);
        fireData.ref('users/' + uid + "/projects").push(projectData)
        .then( this.props.canceled);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.addItems}>
                <Form.Field>
                <FileUploader
                     className="add-item-input"
                     accept="image/*"
                     name="avatar"
                     randomizeFilename
                     storageRef={fireData.ref("images")}
                     onUploadSuccess={this.handleUploadSuccess}
                     key={this.state.uploaderClearing || ""}
                />
                        <label htmlFor={'name'}>Project Name</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                           
                            placeholder='Enter The Project Name'
                            onChange={this.onChange}
                            className='input-of-form'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor={'description'}>Description</label>
                        <textarea
                            type="textarea"
                            id='description'
                            name='description'
                           
                            placeholder='Description to your project'
                            onChange={this.onChange}
                            className='input-of-form'
                        />
                    </Form.Field>
                    <Button primary>Create</Button>
                    <Button primary onClick={this.props.canceled}>Cancel</Button>

                </Form>
            </div>
        )
    }
}

export default CreateProject;