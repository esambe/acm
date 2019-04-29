import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';

import {Router,Stack,Scene} from 'react-native-router-flux';
import Splash from './screens/Splash';
import Login from './screens/Login';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <Router>
            <Stack key="root">
                <Scene key="splash" component={Splash} initial hideNavBar={true} />
                <Scene key="login" component={Login} hideNavBar={true} />
            </Stack>
        </Router>
      </Fragment>
    );
  }
}
