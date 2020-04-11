import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export function EditPill(props) {
  const { name, dosage, refill } = props;
  return (
    <View style={styles.pillCardInfoContainer}>
      <View>
        <Text style={styles.pillCardText}>Name: {name}</Text>
      </View>

      <View>
        <Text style={styles.pillCardText}>Dosage: {dosage}</Text>
      </View>

      <View>
        <Text style={styles.pillCardText}>Refills: {refill}</Text>
      </View>

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

EditPill.propTypes = {
  /**
   * The name of the pill to take.
   */
  name: PropTypes.string,
  /**
   * The amount of time left before the user needs to take their next medication.
   */
  dosage: PropTypes.number,
  /**
   * The quantity of pills to be taken.
   */
  refill: PropTypes.number,
};

const styles = StyleSheet.create({
  pillCardInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 125,
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
    alignItems: 'flex-start',
    backgroundColor: '#fbfbfb',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    // flexDirection: 'column',
    // alignSelf: 'flex-start',
  },
  pillCardText: {
    fontSize: 16,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'left',
  },
  pillCardLogPillText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
  },
  pillCardDismissText: {
    marginLeft: 60,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
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
