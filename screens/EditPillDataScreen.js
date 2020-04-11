import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default class EditPillDataScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.saveButtonContainer}>
            <Button title="Save"></Button>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Pill Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>Name</TextInput>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Dosage</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>Dosage</TextInput>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Refills</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput>Refills</TextInput>
          </View>
          <View style={styles.deleteButtonContainer}>
            <Button title="Delete"></Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

EditPillDataScreen.navigationOptions = {
  title: 'Edit Pill Name',
};

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
});
