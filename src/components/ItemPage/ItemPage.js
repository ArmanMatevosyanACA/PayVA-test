import React, { Fragment } from 'react';
import './Itempage.css';
import * as firebase from 'firebase/app';

class ItemPage extends React.Component {
    state = {
        project: null
    }
    componentDidMount() {
        const { match } = this.props;
        firebase.database().ref(`/users/${match.params.userId}`).once('value').then(snapshot => {
            const user = snapshot.val();
            const project = {
                name: user.userInfo.name,
                surname: user.userInfo.surname,
                projectName: user.projects[match.params.projectId].projectName,
                projectDescription: user.projects[match.params.projectId].projectDescription,
                image: user.projects[match.params.projectId].image,
            };

            this.setState({ project });
        });
    }

    render() {
        const { project } = this.state;

        return (
            <div className='container'>
                {
                    project &&
                        <Fragment>
                            <div className='img'><img src={project.image} alt="" /></div>
                            <div className="text-container">
                                <div className='product-name'><p>{project.projectName}</p></div>
                                <div className='product-author'><p>{project.name} {project.surname}</p></div>
                                <div className='product-description'><p>{project.projectDescription}</p></div>
                            </div>
                        </Fragment>
                }
            </div>
        )
    }
}

export default ItemPage