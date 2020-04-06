import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PillCard } from '../components/PillCard';
import { PillsLoggedTodayCard } from '../components/PillsLoggedTodayCard';
import { ViewEditNote } from '../components/ViewEditNote';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * Pills the user is currently taking.
 */
let pillIDs = [];
let pillNames = [];
let pillDosages = [];
let pillFormattedTimeTaken = [];

let pills = [];

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

let name = 'No Name';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: null,
      PillIDs: [],
      PillNames: [],
      PillDosages: [],
      PillFormattedTimeTaken: '10m left',
    };
    //this.userName = this.userName.bind(this);
  }

  getUserData = async () => {
    fetch('https://pillpal-app.de/User/email@gmail.com', {
      method: 'GET',
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        console.log(responseJson);
        name = responseJson.Name;
        this.setState({
          Name: name,
        });
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  };

  getCurrentPills = async () => {
    fetch('https://pillpal-app.de/Takes/email@gmail.com', {
      method: 'GET',
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        console.log(responseJson);

        for (let i = 0; i < responseJson.length; i++) {
          pills.push({
            id: i,
            name: 'loading',
            formattedTimeLeft: '10m left',
            dosage: 'loading',
          });
        }

        for (let i = 0; i < responseJson.length; i++) {
          pillIDs.push(i);
          pillNames.push(responseJson[i].Medication_Name);
          pillDosages.push(responseJson[i].Amount_Prescribed + ' pills');
          pillFormattedTimeTaken.push('10m left');

          pills[i].id = i;
          pills[i].name = responseJson[i].Medication_Name;
          pills[i].dosage = responseJson[i].Amount_Prescribed + ' pills';
          pills[i].formattedTimeLeft = '10m left';
        }

        this.setState({
          PillIDs: pillIDs,
          PillNames: pillNames,
          PillDosages: pillDosages,
          PillFormattedTimeTaken: pillFormattedTimeTaken,
        });
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  };

  componentDidMount() {
    this.User = this.getUserData();
    this.PillNames = this.getCurrentPills();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hello, {this.state.Name}!</Text>
          </View>
          {pills.map((pill) => {
            return (
              <PillCard
                key={pill.id}
                name={pill.name}
                formattedTimeLeft="10m left"
                dosage={pill.dosage}
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
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

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
