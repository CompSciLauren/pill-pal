import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function AddButton(props) {
  return (
    <View style={styles.addButtonContainer}>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
        <Text style={styles.addButtonText}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    paddingHorizontal: 10
  },
  addButton: {
    backgroundColor: 'rgb(217, 252, 252)',
    borderColor: 'black',
    borderWidth: 1,
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
  addButtonText: {
    fontSize: 20,
    color: 'black',
    paddingVertical: 5,
  },
});
