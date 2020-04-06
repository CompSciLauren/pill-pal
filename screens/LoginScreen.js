import React from 'react';
import { AsyncStorage, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window');

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.showPass = this.showPass.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this._login = this._login.bind(this);
    this.state = {
      inputUsername: '',
      inputPassword: '',
      validUsername: true,
      validPassword: true,
      errorTextColor: 'white',
      loginEnabled: false,
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  }

  setUsername = (value) => {
    this.setState({inputUsername: value});
    if (value == '') {
      this.setState({loginEnabled: false});
    } else {
      if (this.state.inputPassword !== '')
      {
        this.setState({loginEnabled: true});
      }
    }
  }

  setPassword = (value) => {
    this.setState({inputPassword: value});
    if (value == '') {
      this.setState({loginEnabled: false});
    } else {
      if (this.state.inputUsername !== '')
      {
        this.setState({loginEnabled: true});
      }
    }
  }

  _login = async() => {
    const { navigate } = this.props.navigation;
    if (!this.state.validUsername || !this.state.validPassword) {
      this.setState({errorTextColor: 'red'});
    } else {
      this.setState({errorTextColor: 'white'});
      await AsyncStorage.setItem('isLoggedIn', '1');
      navigate('Home');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.mainContainer}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>Pill Pal</Text>
          </View>

          <Text style={{color: this.state.errorTextColor}}>Wrong user/password combination. Please try again!</Text>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name={'user'} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={this.setUsername}
              value={this.state.inputUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name={'lock'} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPass}
              placeholder={'Password'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={this.setPassword}
              value={this.state.inputPassword}
            />

            <TouchableOpacity style={styles.iconContainer} onPress={this.showPass}>
              <FontAwesome name={this.state.press ? 'eye-slash' : 'eye'} style={styles.icon}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={this.state.loginEnabled ? styles.btnLoginEnabled : styles.btnLoginDisabled}
            disabled={!this.state.loginEnabled}
            onPress={this._login}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <Text>Don't have an account?</Text>
          <Text style={{color: 'blue'}} onPress={() => navigate('SignUp')}>Sign Up Now!</Text>

        </ScrollView>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    fontFamily: 'sans-serif-thin',
    fontSize: 80
  },
  iconContainer: {
    width: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 12,
    paddingRight: 5,
    backgroundColor: 'rgba(0, 112, 26, 0.7)'
    // backgroundColor: 'rgba(0, 0, 0, 0.35)'
  },
  icon: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.55)',
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  input: {
    flexGrow: 1,
    color: 'white'
  },
  btnLoginEnabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  btnLoginDisabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'grey',
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
