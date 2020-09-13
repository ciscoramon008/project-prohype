import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ClientIdeaPage from './Pages/ClientIdeaPage';
import ServicesPage from './Pages/ServicesPage';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <HomePage />} />
                <Route exact path='/about' render={() => <AboutPage />} />
                <Route exact path='/services' render={() => <ServicesPage />} />
                <Route exact path='/your-idea' render={() => <ClientIdeaPage />} />
            </Switch>
        </>
    );
}

export default Routes;