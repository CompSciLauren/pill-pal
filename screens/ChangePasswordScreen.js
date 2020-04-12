import React from 'react';
import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChangePasswordTextInput from '../components/ChangePasswordTextInput';

const { width: WIDTH } = Dimensions.get('window');

const ChangePasswordScreen = (props) => {

  const [state, setState] = useState({
    currPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const updateCurrPassword = (val) => {
    setState({currPassword: val, newPassword: state.newPassword, confirmNewPassword: state.confirmNewPassword});
  }

  const updateNewPassword = (val) => {
    setState({currPassword: state.currPassword, newPassword: val, confirmNewPassword: state.confirmNewPassword});
  }

  const updateConfirmNewPassword = (val) => {
    setState({currPassword: state.currPassword, newPassword: state.newPassword, confirmNewPassword: val});
  }

  const submit = () => {
    alert("Submitted!");
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.mainContainer}
      >
        <ChangePasswordTextInput field={ 'Password' } updateField={ updateCurrPassword }/>
        <ChangePasswordTextInput field={ 'New Password' } updateField={ updateNewPassword }/>
        <ChangePasswordTextInput field={ 'Confirm New Password' } updateField={ updateConfirmNewPassword }/>
        <TouchableOpacity
          style={styles.btnUpdate}
          disabled={false}
          onPress={submit}>
          <Text style={styles.btnText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

ChangePasswordScreen.navigationOptions = {
  title: 'Change Password',
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%',
  },
  btnUpdate: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});
