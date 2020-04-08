import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LogAndChartsScreen from '../screens/LogAndChartsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TodaysNoteScreen from '../screens/TodaysNoteScreen';
import AlexaScreen from '../screens/AlexaScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    TodaysNote: TodaysNoteScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen,
  },
  config
);

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};

CalendarStack.path = '';

const LogAndChartsStack = createStackNavigator(
  {
    LogAndCharts: LogAndChartsScreen,
  },
  config
);

LogAndChartsStack.navigationOptions = {
  tabBarLabel: 'Log/Charts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-analytics' : 'md-analytics'}
    />
  ),
};

LogAndChartsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Alexa: AlexaScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Calendar: { screen: CalendarStack },
  LogAndCharts: { screen: LogAndChartsStack },
  Settings: { screen: SettingsStack },
});

tabNavigator.path = '';

export default tabNavigator;
