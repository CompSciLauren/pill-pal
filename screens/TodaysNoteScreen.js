import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SymptomsFeelings } from '../components/SymptomsFeelings';
import { AddButton } from '../components/AddButton';

const symptomsAndFeelings = {
  symptom1: 'Headache',
  symptom2: 'Dizziness',
  symptom3: 'Nausea',
  feeling1: 'Worried',
  feeling2: 'Stressed',
  feeling3: 'Sad',
  feeling4: 'Tired'
}

export default class TodaysNoteScreen extends Component {
  state = { isFocused: false }
  handleInputFocus = () => this.setState({ isFocused: true })
  handleInputBlur = () => this.setState({ isFocused: false })
  render() {
    const { isFocused } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Additional Details</Text>
              <View style={ isFocused ? styles.addDetContainerFocused: styles.addDetContainerBlurred } >
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
                <AddButton/>
            </View>

            <View style={styles.symptomsFeelingsContainer}>
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.symptom1} />
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.symptom2} />
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.symptom3} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.headerText}>Feelings</Text>
              <AddButton/>
            </View>

            <View style={styles.symptomsFeelingsContainer}>
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling1} />
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling2} />
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling3} />
              <SymptomsFeelings symptomOrFeeling={symptomsAndFeelings.feeling4} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

TodaysNoteScreen.navigationOptions = {
  title: "Today's Note",
};

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
    justifyContent: 'flex-start'
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
  }
});
