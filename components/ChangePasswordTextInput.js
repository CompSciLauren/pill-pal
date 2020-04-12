import React from 'react';
import { Divider } from 'react-native-elements';
import { Dimensions, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window');

export default class ChangePasswordTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.showPass = this.showPass.bind(this);
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.optionContainer} activeOpacity={0.5}>
          <View style={styles.info}>
            <Text>{ this.props.field }:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={ this.state.showPass }
                onChangeText={ this.props.updateField }
              />
              <TouchableOpacity style={styles.iconContainer} onPress={this.showPass}>
                <FontAwesome name={this.state.press ? 'eye-slash' : 'eye'} style={styles.icon}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionContainer: {
    paddingHorizontal: 15,
  },
  info: {
    paddingVertical: 15,
    color: 'rgba(70, 70, 70, 1)',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(245, 200, 66)'
  },
  input: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.55)',
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  divider: {
    backgroundColor: 'grey',
    height: 1,
  }
});
