import React from 'react';
import { Divider } from 'react-native-elements';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function SettingsOption(props) {
  const { optionText, faIcon, rhs } = props;
  return (
    <View>
      <View style={styles.optionContainer} activeOpacity={0.5}>
        <View style={styles.leftSide}>
          <FontAwesome name={faIcon} style={styles.faStyle}/>
          <Text style={styles.optionText}>  { optionText }</Text>
        </View>
        <View>
          { rhs }
        </View>
      </View>
      <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  leftSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  faStyle: {
    paddingTop: 3,
    fontSize: 17,
  },
  optionText: {
    fontSize: 15,
    color: 'rgba(70, 70, 70, 1)',
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
  }
});
