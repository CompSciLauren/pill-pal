import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Button } from 'react-native';
import { EditPill } from '../components/EditPill';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useTakes from '../hooks/useTakes';

const { width: WIDTH } = Dimensions.get('window');

const EditPillsScreen = (props) => {
  const { takes } = useTakes('email@gmail.com');

  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.buttonContainer}>
          <Button
            title="Add New Pill"
            onPress={() => navigate('EditPillData')}
          ></Button>
        </View>

        {takes.map((pill) => {
          return (
            <TouchableOpacity onPress={() => navigate('EditPillData')}>
              <EditPill
                key={pill.id}
                name={pill.Medication_Name}
                dosage={pill.Amount_Prescribed}
                refill={pill.Refills}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

EditPillsScreen.navigationOptions = {
  title: 'Edit Pills',
};

export default EditPillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 16,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'normal',
    textAlign: 'left',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 20,
    marginLeft: WIDTH - 150,
    width: 120,
  },
});
