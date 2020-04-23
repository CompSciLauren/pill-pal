import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { styleSheetFactory } from '../themes/themes';
import { useTheme } from 'react-native-themed-styles';

export function AddSymptomFeelingOption(props) {
  const { optionText } = props;
  return (
    <View>
      <View style={styles.displayNameContainer}>
        <Text style={styles.displayNameText}> {optionText}</Text>
      </View>
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
  displayNameContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  displayNameText: {
    fontSize: 16,
    color: 'black',
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
  },
  intensityContainer: {
    paddingHorizontal: 10,
  },
  intensityButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  intensityTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  intensityText: {
    fontSize: 14,
    color: 'rgba(70, 70, 70, 1)',
    paddingVertical: 10,
    textAlignVertical: 'center',
  },
});
