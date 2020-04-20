import React from 'react';
import { Divider } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export function AddSymptomFeelingOption(props) {
  const { optionText } = props;
  return (
    <View>
      <View style={styles.optionContainer} activeOpacity={0.5}>
        <View style={styles.displayNameContainer}>
          <Text style={styles.displayNameText}> {optionText}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginRight: 60 }}>
          <View style={styles.intensityContainer}>
            <TouchableOpacity
              style={styles.intensityButton}
              activeOpacity={0.5}
            >
              <View style={styles.intensityTextContainer}>
                <Text style={styles.intensityText}>low</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.intensityContainer}>
            <TouchableOpacity
              style={styles.intensityButton}
              activeOpacity={0.5}
            >
              <View style={styles.intensityTextContainer}>
                <Text style={styles.intensityText}>med</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.intensityContainer}>
            <TouchableOpacity
              style={styles.intensityButton}
              activeOpacity={0.5}
            >
              <View style={styles.intensityTextContainer}>
                <Text style={styles.intensityText}>high</Text>
              </View>
            </TouchableOpacity>
          </View>
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
