import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import CoreNavigation from './src/navigation/CoreNavigation';
export default class App extends React.Component {

  componentDidMount = () => {
    SplashScreen.hide();
  }

  render() {
    return <CoreNavigation />;
  }
};
