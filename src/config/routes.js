import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const routes = () => {
    return (
        <section className="cont">
            <Switch>
                <Route exact path ='/' component = { Home }/>
                <Route path ='/resume' component = { Resume }/>
                {/* <Route path ='/projects' component = { Body }/> */}
                <Route path = '/contact' component = { Contact }/>
            </Switch>
        </section>
    );
}

export default routes;
