import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import {Route, Switch} from "react-router";
import MainPage from "./MainPage/MainPage";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path={'./Home'} component={MainPage}/>
                    <Route/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
