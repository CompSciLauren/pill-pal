import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window');

export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.showPass = this.showPass.bind(this);
    this.showConfirmPass = this.showConfirmPass.bind(this);
    this.haveFullName = this.haveFullName.bind(this);
    this.haveEmail = this.haveEmail.bind(this);
    this.haveUsername = this.haveUsername.bind(this);
    this.havePassword = this.havePassword.bind(this);
    this.haveConfirmPassword = this.haveConfirmPassword.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.state = {
      inputFullName: '',
      inputEmail: '',
      inputUsername: '',
      inputPassword: '',
      inputConfirmPassword: '',
      validFullName: true,
      validPassword: true,
      validUsername: true,
      validPassword: true,
      validConfirmPassword: true,
      errorTextColor: 'white',
      signUpEnabled: false,
      showPass: true,
      showConfirmPass: true,
      press: false,
      pressConfirm: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  }

  showConfirmPass = () => {
    if (this.state.pressConfirm == false) {
      this.setState({ showConfirmPass: false, pressConfirm: true });
    } else {
      this.setState({ showConfirmPass: true, pressConfirm: false });
    }
  }

  haveFullName = (value) => {
    this.setState({inputFullName: value});
    if (value == '') {
      this.setState({signUpEnabled: false});
    } else {
      if (this.state.inputEmail !== '' && this.state.inputUsername !== '' && this.state.inputPassword !== '' && this.state.inputConfirmPassword != '')
      {
        this.setState({signUpEnabled: true});
      }
    }
  }

  haveEmail = (value) => {
    this.setState({inputEmail: value});
    if (value == '') {
      this.setState({signUpEnabled: false});
    } else {
      if (this.state.inputFullName !== '' && this.state.inputUsername !== '' && this.state.inputPassword !== '' && this.state.inputConfirmPassword != '')
      {
        this.setState({signUpEnabled: true});
      }
    }
  }

  haveUsername = (value) => {
    this.setState({inputUsername: value});
    if (value == '') {
      this.setState({signUpEnabled: false});
    } else {
      if (this.state.inputFullName !== '' && this.state.inputEmail !== '' && this.state.inputPassword !== '' && this.state.inputConfirmPassword != '')
      {
        this.setState({signUpEnabled: true});
      }
    }
  }

  havePassword = (value) => {
    this.setState({inputPassword: value});
    if (value == '') {
      this.setState({signUpEnabled: false});
    } else {
      if (this.state.inputFullName !== '' && this.state.inputEmail !== '' && this.state.inputUsername !== '' && this.state.inputConfirmPassword != '')
      {
        this.setState({signUpEnabled: true});
      }
    }
  }

  haveConfirmPassword = (value) => {
    this.setState({inputConfirmPassword: value});
    if (value == '') {
      this.setState({signUpEnabled: false});
    } else {
      if (this.state.inputFullName !== '' && this.state.inputEmail !== '' && this.state.inputUsername !== '' && this.state.inputPassword != '')
      {
        this.setState({signUpEnabled: true});
      }
    }
  }

  validateInput = () => {
    const { navigate } = this.props.navigation;
    if (!this.state.validUsername || !this.state.validPassword) {
      this.setState({errorTextColor: 'red'});
    } else {
      this.setState({errorTextColor: 'white'});
      navigate('Login');
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

          <Text style={{color: this.state.errorTextColor}}>Invalid information. Please try again!</Text>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name={'user'} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'Full Name'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={this.haveFullName}
              value={this.state.inputFullName}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name={'user'} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'E-mail'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={this.haveEmail}
              value={this.state.inputEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name={'user'} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={this.haveUsername}
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
              onChangeText={this.havePassword}
              value={this.state.inputPassword}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={this.showPass}>
              <FontAwesome name={this.state.press ? 'eye-slash' : 'eye'} style={styles.icon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name={'lock'} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showConfirmPass}
              placeholder={'Confirm Password'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={this.haveConfirmPassword}
              value={this.state.inputConfirmPassword}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={this.showConfirmPass}>
              <FontAwesome name={this.state.pressConfirm ? 'eye-slash' : 'eye'} style={styles.icon}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={this.state.signUpEnabled ? styles.btnSignUpEnabled : styles.btnSignUpDisabled}
            disabled={!this.state.signUpEnabled}
            onPress={this.validateInput}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>

          <Text>Already have an account?</Text>
          <Text style={{color: 'blue'}} onPress={() => navigate('Login')}>Login!</Text>
        </ScrollView>
      </View>
    );
  }
}

SignUpScreen.navigationOptions = {
  header: null,
  // title: 'SignUp',
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
  btnSignUpEnabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  btnSignUpDisabled: {
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
