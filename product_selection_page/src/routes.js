import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/app';
import ConfirmationPage from './containers/confirmation_page';

export default(
    <Route path='/' >
        <IndexRoute component={ App }/>
        <Route path='/confirmation_page' component={ ConfirmationPage } />
    </Route>
);
