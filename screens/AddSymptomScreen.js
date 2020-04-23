import React from 'react';
import { Divider } from 'react-native-elements';
import {
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { AddSymptomFeelingOption } from '../components/AddSymptomFeelingOption';
import { IntensityOption } from '../components/IntensityOption';
import useSymptom from '../hooks/useSymptom';
import useAuth from '../hooks/useAuth';
import { styleSheetFactory } from '../themes/themes';
import { useTheme } from 'react-native-themed-styles';

const { width: WIDTH } = Dimensions.get('window');

const AddSymptomScreen = (props) => {
  let todaysSymptoms = props.navigation.state.params.listOfTodaysSymptoms;
  let originalTodaysSymptoms = todaysSymptoms;
  let todaysDate = moment().format('YYYY-MM-DD');
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;

  const { updateSymptom, symptom } = useSymptom(todaysSymptoms);

  const severityMatches = (severityToMatch, individualSymptom) =>
    individualSymptom.severity === severityToMatch ? 'bold' : 'normal';

  function saveChangesToDatabase() {
    let symptomsToSave = symptom;
    let filteredSymptomsToSave = [];
    for (let i = 0; i < symptomsToSave.length; i++) {
      if (symptomsToSave[i].severity != '') {
        for (let j = 0; j < originalTodaysSymptoms.length; j++) {
          if (symptomsToSave[i].Display_Name != originalTodaysSymptoms[j][0]) {
            if (symptomsToSave[i].severity == 'low') {
              symptomsToSave[i].severity = 1;
            } else if (symptomsToSave[i].severity == 'medium') {
              symptomsToSave[i].severity = 2;
            } else {
              symptomsToSave[i].severity = 3;
            }
            filteredSymptomsToSave.push([symptomsToSave[i]]);
          }
        }
      }
    }

    for (let i = 0; i < filteredSymptomsToSave.length; i++) {
      fetch(`https://pillpal-app.de/Log_Symptoms`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          User_ID: userID,
          Date: todaysDate,
          Symptom_ID: filteredSymptomsToSave[i][0].ID,
          Symptom_Intensity: filteredSymptomsToSave[i][0].severity,
        }),
      });
    }
  }

  //const [styles] = useTheme(darkstyles);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => saveChangesToDatabase()}
            style={styles.buttonShape}
            title="Save"
            color="rgb(65, 142, 196)"
            accessibilityLabel="Save changes"
          />
        </View>

        {symptom.map((individualSymptom) => {
          return (
            <View key={individualSymptom.ID}>
              <View style={styles.optionContainer} activeOpacity={0.5}>
                <AddSymptomFeelingOption
                  key={individualSymptom.ID}
                  optionText={individualSymptom.Display_Name}
                />
                <View
                  style={{ flex: 1, flexDirection: 'row', marginRight: 60 }}
                >
                  <View style={styles.intensityContainer}>
                    <TouchableOpacity
                      style={styles.intensityButton}
                      activeOpacity={0.5}
                      onPress={() => updateSymptom('low', individualSymptom)}
                    >
                      <View style={styles.intensityTextContainer}>
                        <IntensityOption
                          key={(individualSymptom.ID, 'low')}
                          intensityValue="low"
                          intensitySelected={severityMatches(
                            'low',
                            individualSymptom
                          )}
                        ></IntensityOption>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.intensityContainer}>
                    <TouchableOpacity
                      style={styles.intensityButton}
                      activeOpacity={0.5}
                      onPress={() => updateSymptom('medium', individualSymptom)}
                    >
                      <View style={styles.intensityTextContainer}>
                        <IntensityOption
                          key={(individualSymptom.ID, 'med')}
                          intensityValue="med"
                          intensitySelected={severityMatches(
                            'medium',
                            individualSymptom
                          )}
                        ></IntensityOption>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.intensityContainer}>
                    <TouchableOpacity
                      style={styles.intensityButton}
                      activeOpacity={0.5}
                      onPress={() => updateSymptom('high', individualSymptom)}
                    >
                      <View style={styles.intensityTextContainer}>
                        <IntensityOption
                          key={(individualSymptom.ID, 'high')}
                          intensityValue="high"
                          intensitySelected={severityMatches(
                            'high',
                            individualSymptom
                          )}
                        ></IntensityOption>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Divider style={styles.divider} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

AddSymptomScreen.navigationOptions = {
  title: 'Add Symptoms',
};

export default AddSymptomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
  textContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  saveButtonContainer: {
    marginTop: 8,
    marginBottom: 20,
    marginLeft: WIDTH - 130,
    width: 100,
  },
  deleteButtonContainer: {
    marginTop: 8,
    marginBottom: 20,
    width: 100,
  },
  headerText: {
    fontSize: 18,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'normal',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 2,
    paddingLeft: 12,
    paddingRight: 5,
    backgroundColor: 'rgba(204, 255, 255, 0.7)',
  },
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
  buttonContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  buttonShape: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
  },
});

const darkstyles = styleSheetFactory((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    marginHorizontal: 4,
  },
  textContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  saveButtonContainer: {
    marginTop: 8,
    marginBottom: 20,
    marginLeft: WIDTH - 130,
    width: 100,
  },
  deleteButtonContainer: {
    marginTop: 8,
    marginBottom: 20,
    width: 100,
  },
  headerText: {
    fontSize: 18,
    color: theme.textColor,
    fontWeight: 'normal',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 2,
    paddingLeft: 12,
    paddingRight: 5,
    backgroundColor: 'rgba(204, 0, 0, 0.7)',
  },
}));
