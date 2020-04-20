import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, Text, View } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._loadData = this._loadData.bind(this);
    this._loadData();
  }

  _loadData = async() => {
    const { navigate } = this.props.navigation;
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    navigate((isLoggedIn !== '1') ? 'Auth' : 'Main');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

AuthLoadingScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
