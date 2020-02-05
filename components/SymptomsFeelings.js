import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function SymptomsFeelings(props) {
  const {
    symptomOrFeeling
  } = props;
  return (
    <View style={styles.symptomsFeelingsContainer}>
      <TouchableOpacity style={styles.symptomsFeelingsButton} activeOpacity={0.5}>
        <Text style={styles.symptomsFeelingsText}> {symptomOrFeeling} </Text>
      </TouchableOpacity>
    </View>
  );
}

SymptomsFeelings.propTypes = {
  /**
   * The symptom or feeling corresponding to this component.
   */
  symptomOrFeeling: PropTypes.string,
};

const styles = StyleSheet.create({
  symptomsFeelingsContainer: {
    paddingHorizontal: 10,
  },
  symptomsFeelingsButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
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
  symptomsFeelingsText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
  },
});
