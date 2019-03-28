import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import {Route, Switch} from "react-router";
import MainPage from "./MainPage/MainPage";
import ItemPage from './MainPage/ItemPage/ItemPage';


class App extends Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path={'/'} component={MainPage}/>
                    <Route path={'/:item_id'} component={ItemPage}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
