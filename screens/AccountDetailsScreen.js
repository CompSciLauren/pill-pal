import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AccountDetailsOption from '../components/AccountDetailsOption';
import useAuth from '../hooks/useAuth';

const AccountDetailsScreen = (props) => {
  const { login, isLoggedIn, isLoading, logout } = useAuth();

  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('ViewEditAccountInfo')}>
        <AccountDetailsOption option="View/Edit Account Info" warning={false} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('ChangePassword')}>
        <AccountDetailsOption option="Change Password" warning={false} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logout()}>
        <AccountDetailsOption option="Delete Account" warning={true} />
      </TouchableOpacity>
    </View>
  );
};

AccountDetailsScreen.navigationOptions = {
  title: 'Account Details',
};

export default AccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
