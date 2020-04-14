import React from 'react';
import { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ViewEditAccountInfoTextInput from '../components/ViewEditAccountInfoTextInput';
import useName from '../hooks/useName';
import useAuth from '../hooks/useAuth';

const { width: WIDTH } = Dimensions.get('window');

const ViewEditAccountInfoScreen = (props) => {
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;

  const { name } = useName(userID);
  const fn = name.First_Name;
  const ln = name.Last_Name;
  const eml = name.Email;

  const [state, setState] = useState({
    firstName: fn,
    lastName: ln,
    email: eml,
  });

  const updateFirstName = (val) => {
    setState({ firstName: val, lastName: state.lastName, email: state.email });
  };

  const updateLastName = (val) => {
    setState({ firstName: state.firstName, lastName: val, email: state.email });
  };

  const updateEmail = (val) => {
    setState({
      firstName: state.firstName,
      lastName: state.lastName,
      email: val,
    });
  };

  const submit = () => {
    alert('Submitted!');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.mainContainer}
      >
        <ViewEditAccountInfoTextInput
          field={'First Name'}
          currVal={fn}
          updateField={updateFirstName}
        />
        <ViewEditAccountInfoTextInput
          field={'Last Name'}
          currVal={ln}
          updateField={updateLastName}
        />
        <ViewEditAccountInfoTextInput
          field={'E-mail'}
          currVal={eml}
          updateField={updateEmail}
        />
        <TouchableOpacity
          style={styles.btnUpdate}
          disabled={false}
          onPress={submit}
        >
          <Text style={styles.btnText}>Update Info</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

ViewEditAccountInfoScreen.navigationOptions = {
  title: 'View/Edit Account Info',
};

export default ViewEditAccountInfoScreen;

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
    marginBottom: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
