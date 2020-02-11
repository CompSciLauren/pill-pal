import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function CalendarNote(props) {
  const { infoArray } = props;
  return (
    <View style={styles.calendarNoteInfoContainer}>
      {infoArray.map(entry => (
        <View key={entry.id}>
          <View>
            <Text style={styles.calendarNoteText}>
              Pills Taken: {entry.pillsTaken}
            </Text>
          </View>

          <View>
            <Text style={styles.calendarNoteText}>
              Symptoms: {entry.symptoms}
            </Text>
          </View>

          <View>
            <Text style={styles.calendarNoteText}>
              Feelings: {entry.feelings}
            </Text>
          </View>

          <View>
            <Text style={styles.calendarNoteText}>
              Additional Details: {entry.additionalDetails}
            </Text>
          </View>
        </View>
      ))}

      <View style={styles.calendarNoteEditContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.calendarNoteEditText}>Edit</Text>
          <FontAwesome
            name={'pencil'}
            style={styles.calendarNoteEditTextIcon}
          />
        </View>
      </View>
    </View>
  );
}

CalendarNote.propTypes = {
  /**
   * The name and quantity of every type of pill taken on the selected date.
   */
  pillsTaken: PropTypes.string,
  /**
   * The list of symptoms that the user logged for the selected date.
   */
  symptoms: PropTypes.string,
  /**
   * The list of feelings that the user logged for the selected date.
   */
  feelings: PropTypes.string,
  /**
   * Any additional information that the user added for the selected date.
   */
  additionalDetails: PropTypes.string,
};

const styles = StyleSheet.create({
  calendarNoteInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
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
    backgroundColor: '#fbfbfb',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  calendarNoteTitleText: {
    fontSize: 12,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'right',
  },
  calendarNoteText: {
    fontSize: 12,
    paddingVertical: 2,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'left',
  },
  calendarNoteEditContainer: {
    alignItems: 'flex-end',
  },
  calendarNoteEditText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 20,
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
  },
  calendarNoteEditTextIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
    marginTop: 22,
    marginLeft: 5,
  },
});
