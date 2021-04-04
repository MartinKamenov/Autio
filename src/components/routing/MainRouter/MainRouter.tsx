import React from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';
import {Home} from '../../pages';

import './MainRouter.scss';
import { Navbar, Footer } from '../../common';
 
const MainRouter: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <div className='routing-content'>
                <Switch>
                    <Route
                        render={() => <Redirect to='/home'/>}
                        path='/'
                        exact/>
                    <Route
                        path='/home'
                        component={Home}
                        exact/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}
 
export default MainRouter;