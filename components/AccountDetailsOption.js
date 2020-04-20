import React from 'react';
import { Divider } from 'react-native-elements';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class ViewEditAccountInfoTextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={this.props.warning ? styles.optionContainerWarning : styles.optionContainer} activeOpacity={0.5}>
          <View style={styles.info}>
            <Text style={this.props.warning ? styles.textWarning : styles.text}>{ this.props.option }</Text>
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionContainer: {
    paddingHorizontal: 15,
  },
  optionContainerWarning: {
    paddingHorizontal: 15,
    backgroundColor: 'rgb(212, 47, 118)',
  },
  leftSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  info: {
    paddingVertical: 15,
  },
  text: {
    fontSize: 18
  },
  textWarning: {
    fontSize: 18,
    color: 'white'
  },
  divider: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
  }
});
