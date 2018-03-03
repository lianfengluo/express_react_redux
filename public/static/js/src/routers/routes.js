import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../containers/homeContainer';
import { UserRoute } from './userRoutes'
import NoMatchComponent from '../components/noMatchComponent';


// main router
export default class myRoutes extends React.Component{
    render(){
        return(
         <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/user" component={UserRoute}/>
                <Route component={NoMatchComponent} />
            </Switch>
         </div>
            )
        }
}
