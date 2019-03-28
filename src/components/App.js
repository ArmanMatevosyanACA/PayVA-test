import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import {Route, Switch} from "react-router";
import MainPage from "./MainPage/MainPage";
import ItemPage from './ItemPage/ItemPage';
import PageNotFound from './NotFoundPage/PageNotFound';

class App extends Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={MainPage}/>
                    <Route path={'/userId=:userId/projectId=:projectId'} component={ItemPage}/>
                    <Route component={PageNotFound} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
