/*eslint-disable react/display-name*/
import React from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';
import {
    Home,
    Brand,
    Search,
    ModificationDetails
} from '../../pages';

import './MainRouter.scss';
import {
    Navbar,
    Footer
} from '../../common';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { AuthPage } from '../../pages/Auth/Auth';
import { useStatistics } from '../../../services/statistics';

const withRouter = (Component: any) => (props: any) => (
    <Router>
        <Component {...props}/>
    </Router>
);
 
const MainRouter: React.FC = () => {
    useStatistics();
    
    return (
        <>
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
                    <Route
                        path='/search'
                        component={Search}
                    />
                    <Route
                        path='/modifications/:id'
                        component={ModificationDetails}
                    />
                    <Route 
                        path='/login'
                        component={AuthPage}
                        exact/>
                </Switch>
            </div>
            <Footer/>
        </>
    );
};
 
export default withRouter(MainRouter);