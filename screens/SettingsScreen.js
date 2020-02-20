import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SettingsTitleBox } from '../components/SettingsTitleBox';
import { SettingsOption } from '../components/SettingsOption';
import SwitchButton from '../components/SwitchButton';

const titleTexts = {
  title1: 'My Account',
  title2: 'App Support'
}

const optionTexts = {
  option1: 'Account Details',
  option2: 'Notifications',
  option3: 'Edit Pills',
  option4: 'Alexa',
  option5: 'Dark Mode',
  option6: 'Sign Out',
  option7: 'Help',
  option8: 'App Version'
}

const faIcons = {
  icon1: 'address-card',
  icon2: 'bell',
  icon3: 'plus-square',
  icon4: 'database',
  icon5: 'square',
  icon6: 'sign-out',
  icon7: 'question',
  icon8: 'mobile'
}

export default class SettingsScreen extends React.Component {
  constructor() {
      super();
      this.state = {
         switch1Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style = {styles.container}
          contentContainerStyle = {styles.contentContainer}
        >
          <SettingsTitleBox titleText = {titleTexts.title1} />
          <SettingsOption
            optionText = {optionTexts.option1}
            faIcon = {faIcons.icon1}
            rhs = {
              <Text style={{paddingRight: 30}}>&gt;</Text>
            }
          />
          <SettingsOption
            optionText = {optionTexts.option2}
            faIcon = {faIcons.icon2}
            rhs = {
              <Text style={{paddingRight: 30}}>&gt;</Text>
            }
          />
          <SettingsOption
            optionText = {optionTexts.option3}
            faIcon = {faIcons.icon3}
            rhs = {
              <Text style={{paddingRight: 30}}>&gt;</Text>
            }
          />
          <SettingsOption
            optionText = {optionTexts.option4}
            faIcon = {faIcons.icon4}
            rhs = {
              <Text style={{paddingRight: 30}}>&gt;</Text>
            }
          />
          <SettingsOption
            optionText = {optionTexts.option5}
            faIcon = {faIcons.icon5}
            rhs = {
              <View style={{paddingRight: 10}}>
                <SwitchButton
                  toggleSwitch1 = {this.toggleSwitch1}
                  switch1Value = {this.state.switch1Value}
                />
              </View>
            }
          />
          <SettingsOption
            optionText = {optionTexts.option6}
            faIcon = {faIcons.icon6}
            rhs = {
              <Text style={{paddingRight: 30}}>&gt;</Text>
            }
          />

          <SettingsTitleBox titleText = {titleTexts.title2} />

          <SettingsOption
            optionText = {optionTexts.option7}
            faIcon = {faIcons.icon7}
            rhs = {
              <Text style={{paddingRight: 30}}>&gt;</Text>
            }
          />
          <SettingsOption
            optionText = {optionTexts.option8}
            faIcon = {faIcons.icon8}
            rhs = {
              <Text style={{paddingRight: 20}}>3.2.5</Text>
            }
          />
        </ScrollView>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    minHeight: '100%',
  },
});
