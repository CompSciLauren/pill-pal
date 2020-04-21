import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

export function PillsLoggedTodayCard(props) {
  const { title, infoArray } = props;
  const [styles] = useTheme(darkstyles)

  return (
    <View style={styles.pillsLoggedInfoContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            marginLeft: 30,
            flexDirection: 'column',
            alignItems: 'center',
            width: '78%',
          }}
        >
          <Text style={styles.pillsLoggedTitleText}>{title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '22%',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.pillsLoggedEditText}>Edit</Text>
            <FontAwesome
              name={'pencil'}
              style={styles.pillsLoggedEditTextIcon}
            />
          </View>
        </View>
      </View>
      {infoArray.map(entry => (
        <View
          key={entry.id}
          style={{
            flexDirection: 'row',
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '45%',
            }}
          >
            <Text style={styles.pillsLoggedInfoText}>{entry.name}</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '15%',
            }}
          >
            <Text style={styles.pillsLoggedInfoText}>{entry.dosage}</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              width: '40%',
            }}
          >
            <Text style={styles.pillsLoggedInfoText}>
              {entry.formattedTimeTaken}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

PillsLoggedTodayCard.propTypes = {
  /**
   * The header that is displayed at the top to describe the purpose of the card.
   */
  title: PropTypes.string,
  /**
   * An array containing the information for the card.
   */
  infoArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      dosage: PropTypes.string,
      formattedTimeTaken: PropTypes.string,
    })
  ),
};

const styles = StyleSheet.create({
  pillsLoggedInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 115,
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
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  pillsLoggedTitleText: {
    marginBottom: 10,
    fontSize: 15,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'center',
  },
  pillsLoggedInfoText: {
    fontSize: 13,
    color: 'rgba(90,90,90, 1)',
    textAlign: 'left',
  },
  pillsLoggedEditText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
  },
  pillsLoggedEditTextIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
  },
});

const darkstyles = styleSheetFactory(theme => ({
  pillsLoggedInfoContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 115,
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
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  pillsLoggedTitleText: {
    marginBottom: 10,
    fontSize: 15,
    color: 'rgba(70,70,70, 1)',
    textAlign: 'center',
  },
  pillsLoggedInfoText: {
    fontSize: 13,
    color: 'rgba(90,90,90, 1)',
    textAlign: 'left',
  },
  pillsLoggedEditText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
  },
  pillsLoggedEditTextIcon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(121,51,153, 1)',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
  },
}));