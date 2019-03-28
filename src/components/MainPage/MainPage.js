import React from 'react';
import './MainPage.css'
import { auth, fireData } from '../../firebase';
import { Link } from 'react-router-dom';
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

        this.getProjects();
    }

    getProjects = () => {
        if (!this.state.projects) {
            const ref = fireData.ref('/users/');
            ref.limitToFirst(10).once('value').then(snapshot => {
                const myUid = auth.currentUser && auth.currentUser.uid;
                const users = snapshot.val();
                const projects = [];

                this.setState(() => {
                    for (let userId in users) {
                        if (userId !== myUid) {
                            for (let projectId in users[userId].projects) {
                                projects.push({
                                    userInfo: users[userId].userInfo,
                                    project: users[userId].projects[projectId],
                                    projectId,
                                    userId,
                                });
                            }
                        }
                    }
                    return { projects };
                });
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.loggedIn && !this.props.loggedIn) {
            this.setState({ projects: null }, () => {
                this.getProjects();
            });

        } else if (!prevProps.loggedIn && this.props.loggedIn) {
            this.setState({ projects: null }, () => {
                this.getProjects();
            });
        }
    }

    render() {
        const { projects } = this.state;

        return (
            <div className={'wrapper'}>
                <div style={{ minHeight: '350px', marginTop: '95px' }} className={'wrapper'}>
                    {
                        projects &&
                        projects.map((project) => {
                            const { name, surname } = project.userInfo;
                            const { projectName, projectDescription, image } = project.project;
                            return (
                                <Link to={`/userId=${project.userId}/projectId=${project.projectId}`} key={project.projectId} >
                                    <div className={'main_container'} >
                                        <img src={image} alt="img" />
                                        <div className={'product_info'}>
                                            <div className='product-name'>{projectName}</div>
                                            <div className='author-name'>{name} {surname}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        );

    }
}

export default connect(store => ({
    loggedIn: store.userReducer.loggedIn
}), { userLoggedIn })(MainPage);