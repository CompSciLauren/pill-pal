import React from 'react';
import { Divider } from 'react-native-elements';
import { Dimensions, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default class ViewEditAccountInfoTextInput extends React.Component {
  constructor(props) {
    super(props);
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
                defaultValue={ this.props.currVal }
                onChangeText={ this.props.updateField }
              />
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
  divider: {
    backgroundColor: 'grey',
    height: 1,
  }
});
