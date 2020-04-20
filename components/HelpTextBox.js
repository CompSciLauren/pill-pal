import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function HelpTextBox(props) {
  const { titleText } = props;
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{ titleText }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgb(205, 121, 209)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  titleText: {
    fontSize: 20,
    color: 'rgba(70, 70, 70, 1)',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
