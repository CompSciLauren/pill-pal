import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PillCard } from '../components/PillCard';
import { PillsLoggedTodayCard } from '../components/PillsLoggedTodayCard';
import { ViewEditNote } from '../components/ViewEditNote';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useName from '../hooks/useName';
import useTakes from '../hooks/useTakes';

/**
 * Mock data to represent pills the user has logged so far today.
 */
const pillsLoggedToday = [
  {
    id: 0,
    name: 'Ibuprofen',
    dosage: '2 pills',
    formattedTimeTaken: '8:30 a.m.',
  },
  {
    id: 1,
    name: 'Ibuprofen',
    dosage: '2 pills',
    formattedTimeTaken: '1:07 p.m.',
  },
  {
    id: 2,
    name: 'Nitroglycerin',
    dosage: '1 pill',
    formattedTimeTaken: '3:45 p.m.',
  },
];

const HomeScreen = (props) => {
  const { name } = useName();
  const { takes } = useTakes('email@gmail.com');

  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hello {name}!</Text>
        </View>
        {takes.map((pill) => {
          return (
            <PillCard
              key={pill.id}
              name={pill.Medication_Name}
              formattedTimeLeft="10m left"
              dosage={pill.Dosage}
            />
          );
        })}

        <TouchableOpacity onPress={() => navigate('TodaysNote')}>
          <ViewEditNote />
        </TouchableOpacity>

        <PillsLoggedTodayCard
          title="Pills Logged Today"
          infoArray={pillsLoggedToday}
        />
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    minHeight: '100%',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
