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
import AddFeelingScreen from '../screens/AddFeelingScreen';
import AddSymptomScreen from '../screens/AddSymptomScreen';
import EditPillsScreen from '../screens/EditPillsScreen';
import AlexaScreen from '../screens/AlexaScreen';
import EditPillDataScreen from '../screens/EditPillDataScreen';
import HelpScreen from '../screens/HelpScreen';
import AccountDetailsScreen from '../screens/AccountDetailsScreen';
import ViewEditAccountInfoScreen from '../screens/ViewEditAccountInfoScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    TodaysNote: TodaysNoteScreen,
    AddFeeling: AddFeelingScreen,
    AddSymptom: AddSymptomScreen,
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
    EditPills: EditPillsScreen,
    AccountDetails: AccountDetailsScreen,
    ViewEditAccountInfo: ViewEditAccountInfoScreen,
    ChangePassword: ChangePasswordScreen,
    Alexa: AlexaScreen,
    EditPillData: EditPillDataScreen,
    Help: HelpScreen,
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

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Calendar: { screen: CalendarStack },
  LogAndCharts: { screen: LogAndChartsStack },
  Settings: { screen: SettingsStack },
});

TabNavigator.path = '';

export default TabNavigator;
