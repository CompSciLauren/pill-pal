import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PillCard } from '../components/PillCard';
import { PillsLoggedTodayCard } from '../components/PillsLoggedTodayCard';
import { ViewEditNote } from '../components/ViewEditNote';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useName from '../hooks/useName';
import useTakes from '../hooks/useTakes';
import useAuth from '../hooks/useAuth';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

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
  const [styles] = useTheme(darkstyles)
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;

  const { name } = useName(userID);
  const { takes } = useTakes(userID);

  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hello, {name.First_Name}!</Text>
        </View>
        {takes.map((pill) => {
          return (
            <PillCard
              key={(pill.User_ID, pill.Medication_ID)}
              name={pill.Display_Name}
              formattedTimeLeft="10m left"
              dosage={`${pill.Amount_Prescribed} pills`}
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

const darkstyles = styleSheetFactory(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
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
    color: theme.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));