import React from 'react';
import { AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AccountDetailsOption from '../components/AccountDetailsOption';

export default class AccountDetailsScreen extends React.Component {
  constructor() {
    super();
  }

  _logout = async () => {
    const { navigate } = this.props.navigation;
    await AsyncStorage.clear();
    navigate('Auth');
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('ViewEditAccountInfo')}>
          <AccountDetailsOption option="View/Edit Account Info" warning={false}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('ChangePassword')}>
          <AccountDetailsOption option="Change Password" warning={false}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._logout}>
          <AccountDetailsOption option="Delete Account" warning={true}/>
        </TouchableOpacity>
      </View>
    );
  }
};

AccountDetailsScreen.navigationOptions = {
  title: 'Account Details',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
