import React from 'react';
import { Divider } from 'react-native-elements';
import {
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { CustomButton } from '../components/CustomButton';
import { AddSymptomFeelingOption } from '../components/AddSymptomFeelingOption';
import { IntensityOption } from '../components/IntensityOption';
import useFeeling from '../hooks/useFeeling';
import useAuth from '../hooks/useAuth';
import { styleSheetFactory } from '../themes/themes';
import { useTheme } from 'react-native-themed-styles';

const { width: WIDTH } = Dimensions.get('window');

const AddFeelingScreen = (props) => {
  let todaysFeelings = props.navigation.state.params.listOfTodaysFeelings;
  let originalTodaysFeelings = todaysFeelings;
  let todaysDate = moment().format('YYYY-MM-DD');
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;

  const { updateFeeling, feeling } = useFeeling(todaysFeelings);

  const severityMatches = (severityToMatch, individualFeeling) =>
    individualFeeling.severity === severityToMatch ? 'bold' : 'normal';

  function saveChangesToDatabase() {
    let feelingsToSave = feeling;
    let filteredFeelingsToSave = [];
    for (let i = 0; i < feelingsToSave.length; i++) {
      if (feelingsToSave[i].severity != '') {
        for (let j = 0; j < originalTodaysFeelings.length; j++) {
          if (feelingsToSave[i].Display_Name != originalTodaysFeelings[j][0]) {
            if (feelingsToSave[i].severity == 'low') {
              feelingsToSave[i].severity = 1;
            } else if (feelingsToSave[i].severity == 'medium') {
              feelingsToSave[i].severity = 2;
            } else {
              feelingsToSave[i].severity = 3;
            }
            filteredFeelingsToSave.push([feelingsToSave[i]]);
          }
        }
      }
    }

    for (let i = 0; i < filteredFeelingsToSave.length; i++) {
      fetch(`https://pillpal-app.de/Log_Feelings`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          User_ID: userID,
          Date: todaysDate,
          Feeling_ID: filteredFeelingsToSave[i][0].ID,
          Feeling_Intensity: filteredFeelingsToSave[i][0].severity,
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
        <TouchableOpacity onPress={() => saveChangesToDatabase()}>
          <CustomButton title="Save" />
        </TouchableOpacity>

        {feeling.map((individualFeeling) => {
          return (
            <View key={individualFeeling.ID}>
              <View style={styles.optionContainer} activeOpacity={0.5}>
                <AddSymptomFeelingOption
                  key={individualFeeling.ID}
                  optionText={individualFeeling.Display_Name}
                />
                <View
                  style={{ flex: 1, flexDirection: 'row', marginRight: 60 }}
                >
                  <View style={styles.intensityContainer}>
                    <TouchableOpacity
                      style={styles.intensityButton}
                      activeOpacity={0.5}
                      onPress={() => updateFeeling('low', individualFeeling)}
                    >
                      <View style={styles.intensityTextContainer}>
                        <IntensityOption
                          key={(individualFeeling.ID, 'low')}
                          intensityValue="low"
                          intensitySelected={severityMatches(
                            'low',
                            individualFeeling
                          )}
                        ></IntensityOption>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.intensityContainer}>
                    <TouchableOpacity
                      style={styles.intensityButton}
                      activeOpacity={0.5}
                      onPress={() => updateFeeling('medium', individualFeeling)}
                    >
                      <View style={styles.intensityTextContainer}>
                        <IntensityOption
                          key={(individualFeeling.ID, 'med')}
                          intensityValue="med"
                          intensitySelected={severityMatches(
                            'medium',
                            individualFeeling
                          )}
                        ></IntensityOption>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.intensityContainer}>
                    <TouchableOpacity
                      style={styles.intensityButton}
                      activeOpacity={0.5}
                      onPress={() => updateFeeling('high', individualFeeling)}
                    >
                      <View style={styles.intensityTextContainer}>
                        <IntensityOption
                          key={(individualFeeling.ID, 'high')}
                          intensityValue="high"
                          intensitySelected={severityMatches(
                            'high',
                            individualFeeling
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

AddFeelingScreen.navigationOptions = {
  title: 'Add Feelings',
};

export default AddFeelingScreen;

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
