import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { CalendarNote } from '../components/CalendarNote';

/**
 * Mock data to represent notes from the user.
 */
const notes = [
  {
    id: 0,
    date: null,
    pillsTaken: 'none',
    symptoms: 'none',
    feelings: 'none',
    additionalDetails: 'No notes added. Tap here to add a new note.',
  },
  {
    id: 1,
    date: 'Sat Feb 01 2020 00:00:00 GMT-0600',
    pillsTaken: '2 Ibuprofen, 1 Hydrocodone',
    symptoms: 'Constipation, Sweating',
    feelings: 'Sad, Angry, Irritable',
    additionalDetails:
      "I was grumpy the whole day today. Maybe it's because I didn't get breakfast.",
  },
  {
    id: 2,
    date: 'Sun Feb 02 2020 00:00:00 GMT-0600',
    pillsTaken: '2 Ibuprofen, 1 Hydrocodone',
    symptoms: 'Headache',
    feelings: 'Happy, Energetic',
    additionalDetails:
      'I was in a better mood today. I had a good breakfast and I think that helped.',
  },
];

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  setCurrentNote(startDate) {
    let currentNote = notes.filter(note => note.date == startDate);
    if (currentNote == '') {
      currentNote = notes.filter(note => note.id == 0);
    }

    return currentNote;
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <CalendarPicker onDateChange={this.onDateChange} />

          <CalendarNote infoArray={this.setCurrentNote(startDate)} />
        </ScrollView>
      </View>
    );
  }
}

CalendarScreen.navigationOptions = {
  title: 'Calendar',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
