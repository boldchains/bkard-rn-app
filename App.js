import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from './src/redux/reducers';

const store = createStore(reducers);

import CoreNavigation from './src/navigation/CoreNavigation';

export default class App extends React.Component {

  componentDidMount = () => {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <CoreNavigation />
      </Provider>
    );
  }
};
