import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Signin from '../containers/signinContainer';
import NoMatchComponent from '../components/noMatchComponent';

// user profile router
// const UserProfileRouter = ({match}) => (
//     <Switch>
//         <Route exact path={match.url + '/edit_image'} component={UserImage}/>
//         <Route component={NoMatchComponent} />
//     </Switch>
// )

// user model router
export const UserRoute = ({match}) => (
    <Switch>
        <Route exact path={match.url + '/signin'} component={Signin}/>
        <Route exact path={match.url} component={Signin}/>
        <Route component={NoMatchComponent} />
    </Switch>
)

