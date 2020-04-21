import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

const { width: WIDTH } = Dimensions.get('window');

const LoginScreen = (props) => {
  const [styles] = useTheme(darkstyles)
  state = {
    validUsername: true,
    validPassword: true,
    errorTextColor: 'white',
    loginEnabled: false,
    showPass: true,
    press: false,
  };

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [errorTextColor, setErrorTextColor] = useState('white');
  const [loginEnabled, setLoginEnabled] = useState(false);
  const [press, setPress] = useState(false);

  const { login, isLoggedIn, isLoading, logout } = useAuth();

  setState = (anObject) => {
    if (anObject.hasOwnProperty('inputUsername')) {
      setInputUsername(anObject.inputUsername);
    } else if (anObject.hasOwnProperty('inputPassword')) {
      setInputPassword(anObject.inputPassword);
    } else if (anObject.hasOwnProperty('validUsername')) {
      setValidUsername(anObject.validUsername);
    } else if (anObject.hasOwnProperty('validPassword')) {
      setValidPassword(anObject.validPassword);
    } else if (anObject.hasOwnProperty('errorTextColor')) {
      setErrorTextColor(anObject.errorTextColor);
    } else if (anObject.hasOwnProperty('loginEnabled')) {
      setLoginEnabled(anObject.loginEnabled);
    } else if (anObject.hasOwnProperty('press')) {
      setPress(anObject.press);
    } else {
      console.log('Not a valid state option');
    }
  };

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  setUsername = (value) => {
    this.setState({ inputUsername: value });
    if (value == '') {
      this.setState({ loginEnabled: false });
    } else {
      if (state.inputPassword !== '') {
        this.setState({ loginEnabled: true });
      }
    }
  };

  setPassword = (value) => {
    this.setState({ inputPassword: value });
    if (value == '') {
      this.setState({ loginEnabled: false });
    } else {
      if (this.state.inputUsername !== '') {
        this.setState({ loginEnabled: true });
      }
    }
  };

  const { navigate } = props.navigation;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (isLoggedIn) {
        navigate('Home');
      }
    }

    return () => (mounted = false);
  }, [isLoggedIn]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.mainContainer}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Pill Pal</Text>
        </View>

        <Text style={{ color: errorTextColor }}>
          Wrong user/password combination. Please try again!
        </Text>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name={'user'} style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            onChangeText={this.setUsername}
            value={inputUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name={'lock'} style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={this.state.showPass}
            placeholder={'Password'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            onChangeText={this.setPassword}
            value={inputPassword}
          />

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.showPass}
          >
            <FontAwesome
              name={press ? 'eye-slash' : 'eye'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={
            loginEnabled ? styles.btnLoginEnabled : styles.btnLoginDisabled
          }
          disabled={!loginEnabled}
          onPress={() => login(inputUsername, inputPassword)}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Text>Don't have an account?</Text>
        <Text style={{ color: 'blue' }} onPress={() => navigate('SignUp')}>
          Sign Up Now!
        </Text>
      </ScrollView>
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen;

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
    fontSize: 80,
  },
  iconContainer: {
    width: 20,
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
    backgroundColor: 'rgba(0, 112, 26, 0.7)',
    // backgroundColor: 'rgba(0, 0, 0, 0.35)'
  },
  icon: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.55)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  input: {
    flexGrow: 1,
    color: 'white',
  },
  btnLoginEnabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  btnLoginDisabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'grey',
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

const darkstyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: theme.backgroundColor,
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
    fontSize: 80,
    color: theme.textColor
  },
  iconContainer: {
    width: 20,
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
    backgroundColor: 'rgba(0, 112, 26, 0.7)',
    // backgroundColor: 'rgba(0, 0, 0, 0.35)'
  },
  icon: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.55)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  input: {
    flexGrow: 1,
    color: 'white',
  },
  btnLoginEnabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  btnLoginDisabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'grey',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
}));
