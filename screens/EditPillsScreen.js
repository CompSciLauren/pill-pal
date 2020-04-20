import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Button } from 'react-native';
import { EditPill } from '../components/EditPill';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useTakes from '../hooks/useTakes';
import useAuth from '../hooks/useAuth';

const { width: WIDTH } = Dimensions.get('window');

const EditPillsScreen = (props) => {
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;

  const { takes } = useTakes(userID);
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
            <TouchableOpacity
              key={(pill.User_ID, pill.Medication_ID)}
              onPress={() => navigate('EditPillData')}
            >
              <EditPill
                key={(pill.User_ID, pill.Medication_ID)}
                name={pill.Display_Name}
                dosage={`${pill.Amount_Prescribed} + pills`}
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
