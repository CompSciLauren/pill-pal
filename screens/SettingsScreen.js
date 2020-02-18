import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SettingsTitleBox } from '../components/SettingsTitleBox';
import { SettingsOption } from '../components/SettingsOption';

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

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <SettingsTitleBox titleText={titleTexts.title1} />
          <SettingsOption optionText={optionTexts.option1} />
          <SettingsOption optionText={optionTexts.option2} />
          <SettingsOption optionText={optionTexts.option3} />
          <SettingsOption optionText={optionTexts.option4} />
          <SettingsOption optionText={optionTexts.option5} />
          <SettingsOption optionText={optionTexts.option6} />
          <SettingsTitleBox titleText={titleTexts.title2} />
          <SettingsOption optionText={optionTexts.option7} />
          <SettingsOption optionText={optionTexts.option8} />
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
