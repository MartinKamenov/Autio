import React from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';
import {Home, Brand} from '../../pages';

import './MainRouter.scss';
import { Navbar, Footer } from '../../common';
import { NAVBAR_HEIGHT } from '../../../constants/other';
 
const MainRouter: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <div className='routing-content' style={{
                marginTop: NAVBAR_HEIGHT
            }}>
                <Switch>
                    <Route
                        render={() => <Redirect to='/home'/>}
                        path='/'
                        exact/>
                    <Route
                        path='/home'
                        component={Home}
                        exact/>
                    <Route
                        path='/brand/:id'
                        component={Brand}
                        exact/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}
 
export default MainRouter;