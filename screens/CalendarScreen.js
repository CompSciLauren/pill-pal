import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { CalendarNote } from '../components/CalendarNote';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"
import moment from 'moment';
import useAuth from '../hooks/useAuth';
import useCalendar from '../hooks/useCalendar';
import useLog_Symptom from '../hooks/useLog_Symptom';
import useLog_Feeling from '../hooks/useLog_Feeling';
import useLog_Pills from '../hooks/useLog_Pills';
import useMedication from '../hooks/useMedication';

const CalendarScreen = (props) => {
  const [styles] = useTheme(darkstyles)
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;
  const { calendar } = useCalendar(userID);
  const { symptom } = useLog_Symptom(userID);
  const { feeling } = useLog_Feeling(userID);
  const { logPills } = useLog_Pills(userID);
  const { medication } = useMedication();


  let availableMeds = medication.map((medication) => {
    return [medication.ID, medication.Display_Name];
  });

  let userPillHistory = logPills.map((logPills) => {
    return [logPills.Datetime, logPills.Medication_ID];
  });

  let userSymptomsHistory = symptom.map((symptom) => {
    return [symptom.Date, symptom.Display_Name];
  });

  let userFeelingsHistory = feeling.map((feeling) => {
    return [feeling.Date, feeling.Display_Name];
  });

  let userNotesHistory = calendar.map((calendar) => {
    return [calendar.Date, calendar.Note_Text];
  });

  state = {
    selectedStartDate: '',
  };

  const [selectedStartDate, setSelectedStartDate] = useState('');

  setState = (anObject) => {
    if (anObject.hasOwnProperty('selectedStartDate')) {
      setSelectedStartDate(anObject.selectedStartDate);
    } else {
      console.log('Not a valid state option');
    }
  };

  const onDateChange = (date) => {
    if (date != '') {
      setState({
        selectedStartDate: date,
      });
    }
  };

  const findPillsTakenToday = (tempStartDate) => {
    let medicationDisplayNames = '';
    for (let i = 0; i < userPillHistory.length; i++) {
      if (userPillHistory[i][0].includes(tempStartDate)) {
        for (let j = 0; j < availableMeds.length; j++) {
          if (userPillHistory[i][1] == availableMeds[j][0]) {
            if (medicationDisplayNames == '') {
              medicationDisplayNames += availableMeds[j][1];
            } else {
              medicationDisplayNames += ', ' + availableMeds[j][1];
            }
          }
        }
      }
    }

    if (medicationDisplayNames == '') {
      medicationDisplayNames = 'none';
    }
    return medicationDisplayNames;
  };

  const findFeelingsToday = (tempStartDate) => {
    let feelingDisplayNames = '';
    for (let i = 0; i < userFeelingsHistory.length; i++) {
      if (userFeelingsHistory[i][0].includes(tempStartDate)) {
        if (feelingDisplayNames == '') {
          feelingDisplayNames += userFeelingsHistory[i][1];
        } else {
          feelingDisplayNames += ', ' + userFeelingsHistory[i][1];
        }
      }
    }

    if (feelingDisplayNames == '') {
      feelingDisplayNames = 'none';
    }
    return feelingDisplayNames;
  };

  const findSymptomsToday = (tempStartDate) => {
    let symptomDisplayNames = '';
    for (let i = 0; i < userSymptomsHistory.length; i++) {
      if (userSymptomsHistory[i][0].includes(tempStartDate)) {
        if (symptomDisplayNames == '') {
          symptomDisplayNames += userSymptomsHistory[i][1];
        } else {
          symptomDisplayNames += ', ' + userSymptomsHistory[i][1];
        }
      }
    }

    if (symptomDisplayNames == '') {
      symptomDisplayNames = 'none';
    }
    return symptomDisplayNames;
  };

  const findNoteToday = (tempStartDate) => {
    let noteDisplayText = '';
    for (let i = 0; i < userNotesHistory.length; i++) {
      if (userNotesHistory[i][0].includes(tempStartDate)) {
        noteDisplayText = userNotesHistory[i][1];
      }
    }

    if (noteDisplayText == '') {
      noteDisplayText = 'No notes added. Tap here to add a new note.';
    }
    return noteDisplayText;
  };

  function setCurrentNote(startDate) {
    let copyOfStartDate = startDate;
    let tempStartDate = moment(copyOfStartDate).format('YYYY-MM-DD');

    // Find pills from today
    let medicationDisplayNames = findPillsTakenToday(tempStartDate);

    // Find feelings from today
    let feelingDisplayNames = findFeelingsToday(tempStartDate);

    // Find symptoms from today
    let symptomDisplayNames = findSymptomsToday(tempStartDate);

    // Find note from today
    let noteDisplayText = findNoteToday(tempStartDate);

    const note = [
      {
        id: 0,
        date: startDate,
        pillsTaken: medicationDisplayNames,
        symptoms: symptomDisplayNames,
        feelings: feelingDisplayNames,
        additionalDetails: noteDisplayText,
      },
    ];

    currentNote = note.filter((note) => note.id == 0);

    return currentNote;
  }
  
  let startDate = selectedStartDate ? selectedStartDate : moment();
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <CalendarPicker onDateChange={onDateChange} />

        <CalendarNote infoArray={setCurrentNote(startDate)} />
      </ScrollView>
    </View>
  );

  }
  CalendarScreen.navigationOptions = {
    title: 'Calendar',
  };

export default CalendarScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

const darkstyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
}));

