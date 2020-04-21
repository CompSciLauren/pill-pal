import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

export function PillCard(props) {
  const { name, formattedTimeLeft, dosage } = props;
  const [styles] = useTheme(darkstyles)
  return (
    <View style={styles.pillCardInfoContainer}>
      <View style={{ flex: 3 }}>
        <Text style={styles.pillCardTitleText}>
          {name}: {formattedTimeLeft}
        </Text>

        <Text style={styles.pillCardDosageText}>Dosage: {dosage}</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.pillCardLogPillText}>Log Pill</Text>

        <Text style={styles.pillCardDismissText}>Dismiss</Text>
      </View>
    </View>
  );
}

PillCard.propTypes = {
  /**
   * The name of the pill to take.
   */
  name: PropTypes.string,
  /**
   * The amount of time left before the user needs to take their next medication.
   */
  formattedTimeLeft: PropTypes.string,
  /**
   * The quantity of pills to be taken.
   */
  dosage: PropTypes.string,
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
  },
  pillCardTitleText: {
    fontSize: 17,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'left',
  },
  pillCardDosageText: {
    fontSize: 13,
    color: 'rgba(96,100,109, 0.8)',
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
});

const darkstyles = styleSheetFactory(theme => ({
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
    backgroundColor:'#fbfbfb',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  pillCardTitleText: {
    fontSize: 17,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'left',
  },
  pillCardDosageText: {
    fontSize: 13,
    color: 'rgba(96,100,109, 0.8)',
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
}));
