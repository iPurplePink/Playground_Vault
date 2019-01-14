import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Employer from '../../modules/TermsAndConditions/Employer/';
import Agency from '../../modules/TermsAndConditions/Agency';

class Routes extends Component {
    render() {
        return (
        <Switch>
            <Route path="/employer" component={Employer} exact />
            <Route path="/agency" component={Agency} exact />
        </Switch>
        )
    }
}

export default Routes;