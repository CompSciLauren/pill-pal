import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import moment from 'moment';
import { SymptomsFeelings } from '../components/SymptomsFeelings';
import { AddButton } from '../components/AddButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useLog_Symptom from '../hooks/useLog_Symptom';
import useLog_Feeling from '../hooks/useLog_Feeling';
import useAuth from '../hooks/useAuth';

const TodaysNoteScreen = (props) => {
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;

  let todaysDate = moment().format('YYYY-MM-DD');
  const { symptom } = useLog_Symptom(userID);
  const { feeling } = useLog_Feeling(userID);

  let userSymptomsHistory = symptom.map((symptom) => {
    return [symptom.Date, symptom.Symptom_ID, symptom.Display_Name];
  });

  let userFeelingsHistory = feeling.map((feeling) => {
    return [feeling.Date, feeling.Feeling_ID, feeling.Display_Name];
  });

  const findSymptomsToday = (tempStartDate) => {
    let symptomIDsAndDisplayNames = [];
    for (let i = 0; i < userSymptomsHistory.length; i++) {
      if (userSymptomsHistory[i][0].includes(tempStartDate)) {
        symptomIDsAndDisplayNames.push(userSymptomsHistory[i][2]);
      }
    }

    if (symptomIDsAndDisplayNames == '') {
      symptomIDsAndDisplayNames.push('none');
    }
    return symptomIDsAndDisplayNames;
  };

  const findSymptomIDsToday = (tempStartDate) => {
    let symptomIDsAndDisplayNames = [];
    for (let i = 0; i < userSymptomsHistory.length; i++) {
      if (userSymptomsHistory[i][0].includes(tempStartDate)) {
        symptomIDsAndDisplayNames.push(userSymptomsHistory[i][1]);
      }
    }

    if (symptomIDsAndDisplayNames == '') {
      symptomIDsAndDisplayNames.push(-1);
    }
    return symptomIDsAndDisplayNames;
  };

  const findFeelingsToday = (tempStartDate) => {
    let feelingIDsAndDisplayNames = [];
    for (let i = 0; i < userFeelingsHistory.length; i++) {
      if (userFeelingsHistory[i][0].includes(tempStartDate)) {
        feelingIDsAndDisplayNames.push(userFeelingsHistory[i][2]);
      }
    }

    if (feelingIDsAndDisplayNames == '') {
      feelingIDsAndDisplayNames.push('none');
    }
    return feelingIDsAndDisplayNames;
  };

  const findFeelingIDsToday = (tempStartDate) => {
    let feelingIDsAndDisplayNames = [];
    for (let i = 0; i < userFeelingsHistory.length; i++) {
      if (userFeelingsHistory[i][0].includes(tempStartDate)) {
        feelingIDsAndDisplayNames.push(userFeelingsHistory[i][1]);
      }
    }

    if (feelingIDsAndDisplayNames == '') {
      feelingIDsAndDisplayNames.push(-1);
    }
    return feelingIDsAndDisplayNames;
  };

  // Find symptoms from today
  let symptomDisplayNames = findSymptomsToday(todaysDate);
  let symptomIDs = findSymptomIDsToday(todaysDate);

  // Find feelings from today
  let feelingDisplayNames = findFeelingsToday(todaysDate);
  let feelingIDs = findFeelingIDsToday(todaysDate);

  state = { isFocused: false };
  handleInputFocus = () => this.setState({ isFocused: true });
  handleInputBlur = () => this.setState({ isFocused: false });
  const { isFocused } = this.state;

  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Additional Details</Text>
          <View
            style={
              isFocused
                ? styles.addDetContainerFocused
                : styles.addDetContainerBlurred
            }
          >
            <TextInput
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              style={styles.addDet}
              placeholder="Notes"
              placeholderTextColor="grey"
              numberOfLines={5}
              multiline={true}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.headerText}>Symptoms</Text>
            <TouchableOpacity onPress={() => navigate('AddSymptom')}>
              <AddButton />
            </TouchableOpacity>
          </View>

          <View style={styles.symptomsFeelingsContainer}>
            {symptomDisplayNames.map((symptomDisplayNames) => {
              return (
                <SymptomsFeelings
                  key={(userID, symptomIDs)}
                  symptomOrFeeling={symptomDisplayNames}
                />
              );
            })}
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.headerText}>Feelings</Text>
            <TouchableOpacity onPress={() => navigate('AddFeeling')}>
              <AddButton />
            </TouchableOpacity>
          </View>

          <View style={styles.symptomsFeelingsContainer}>
            {feelingDisplayNames.map((feelingDisplayNames) => {
              return (
                <SymptomsFeelings
                  key={(userID, feelingIDs)}
                  symptomOrFeeling={feelingDisplayNames}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

TodaysNoteScreen.navigationOptions = {
  title: "Today's Note",
};

export default TodaysNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
    minHeight: '100%',
  },
  headerContainer: {
    marginLeft: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  symptomsFeelingsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  addDetContainerBlurred: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    marginVertical: 15,
    padding: 10,
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
  addDetContainerFocused: {
    backgroundColor: 'white',
    borderColor: 'rgb(26, 178, 255)',
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    marginVertical: 15,
    padding: 10,
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
  addDet: {
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 7,
  },
});
