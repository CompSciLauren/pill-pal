import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  config
);

LoginStack.navigationOptions = {
  header: null
}

LoginStack.path = '';

const SignUpStack = createStackNavigator(
  {
    SignUp: SignUpScreen,
    Login:  LoginScreen,
  },
  config
);

SignUpStack.navigationOptions = {
  header: null
}

SignUpStack.path = '';

const tabNavigator = createStackNavigator({
  Login: {screen: LoginStack},
  SignUp: {screen: SignUpStack}
});

tabNavigator.path = '';

export default tabNavigator;
