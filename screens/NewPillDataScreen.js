import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import useMedication from '../hooks/useMedication';
import { styleSheetFactory } from '../themes/themes';
import { useTheme } from 'react-native-themed-styles';
const { width: WIDTH } = Dimensions.get('window');

const NewPillDataScreen = (props) => {
  const { medication } = useMedication();

  let userID = props.navigation.state.params.selectedPill[0][0];
  let medication_ID = -1;
  let selectedPill = 'name';
  let pillDosage = 0;
  let pillRefills = 0;

  const [inputPillName, setInputPillName] = useState(selectedPill);
  const [inputDosage, setInputDosage] = useState(pillDosage);
  const [inputRefills, setInputRefills] = useState(pillRefills);

  setState = (anObject) => {
    if (anObject.hasOwnProperty('inputPillName')) {
      setInputPillName(anObject.inputPillName);
    } else if (anObject.hasOwnProperty('inputDosage')) {
      setInputDosage(anObject.inputDosage);
    } else if (anObject.hasOwnProperty('inputRefills')) {
      setInputRefills(anObject.inputRefills);
    } else {
      console.log('Not a valid state option');
    }
  };

  setPillName = (value) => {
    this.setState({ inputPillName: value });
  };

  setDosage = (value) => {
    this.setState({ inputDosage: value });
  };

  setRefills = (value) => {
    this.setState({ inputRefills: value });
  };

  function saveChangesToDatabase() {
    console.log('med:', medication);
    for (let i = 0; i < medication.length; i++) {
      if (medication[i].Display_Name == inputPillName) {
        medication_ID = medication[i].ID;
      }
    }

    fetch(`https://pillpal-app.de/Takes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        User_ID: userID,
        Medication_ID: medication_ID,
        Amount_Prescribed: inputDosage,
        Refills: inputRefills,
      }),
    });
  }

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
            title="Save Pill"
            color="rgb(65, 142, 196)"
            accessibilityLabel="Save changes"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Pill Name</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={this.setPillName}>{selectedPill}</TextInput>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Dosage</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={this.setDosage}>{pillDosage}</TextInput>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Refills</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={this.setRefills}>{pillRefills}</TextInput>
        </View>
      </ScrollView>
    </View>
  );
};

NewPillDataScreen.navigationOptions = {
  title: 'Add New Pill',
};

export default NewPillDataScreen;

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
  mainHeaderText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    marginTop: 8,
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
  buttonContainer: {
    paddingHorizontal: 40,
    marginTop: 15,
    marginLeft: WIDTH - 200,
  },
  buttonShape: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
