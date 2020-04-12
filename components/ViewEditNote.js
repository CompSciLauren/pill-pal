import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function ViewEditNote() {
  return (
    <View style={styles.viewEditNoteContainer}>
      <TouchableOpacity style={styles.viewEditNoteButton} activeOpacity={0.5}>
        <Text style={styles.viewEditNoteText}> View/Edit Today's Note </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewEditNoteContainer: {
    paddingHorizontal: 15,
  },
  viewEditNoteButton: {
    backgroundColor: 'rgb(65, 142, 196)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
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
  viewEditNoteText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
});
