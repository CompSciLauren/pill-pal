import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SettingsTitleBox } from '../components/SettingsTitleBox';
import { SettingsOption } from '../components/SettingsOption';
import SwitchButton from '../components/SwitchButton';
import useAuth from '../hooks/useAuth';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

const titleTexts = {
  title1: 'My Account',
  title2: 'App Support',
};

const optionTexts = {
  option1: 'Account Details',
  option2: 'Notifications',
  option3: 'Edit Pills',
  option4: 'Alexa',
  option5: 'Dark Mode',
  option6: 'Logout',
  option7: 'Help',
  option8: 'App Version',
};

const faIcons = {
  icon1: 'address-card',
  icon2: 'bell',
  icon3: 'plus-square',
  icon4: 'database',
  icon5: 'square',
  icon6: 'sign-out',
  icon7: 'question',
  icon8: 'mobile',
};

const SettingsScreen = (props) => {
  const { navigate } = props.navigation;
  const userSettings = useAuth();
  const { login, isLoggedIn, isLoading, logout } = useAuth();

  state = {
    switch1Value: false,
  };

  const [switch1Value, setSwitch1Value] = useState(false);

  setState = (anObject) => {
    if (anObject.hasOwnProperty('switch1Value')) {
      setSwitch1Value(anObject.switch1Value);
    } else {
      console.log('Not a valid state option');
    }
  };

  toggleSwitch1 = (value) => {
    this.setState({ switch1Value: value });
  };

  //HERE IS WHAT I TRIED DOING TO SWITCH IT, BUT TO NO AVAIL
  if (switch1Value == false) {
    const [styles] = useTheme(darkstyles, "dark")
    }
    else{
    const [styles] = useTheme(darkstyles, "light")
    }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('Auth');
    }
  }, [isLoggedIn]);
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <SettingsTitleBox titleText={titleTexts.title1} />
        <TouchableOpacity onPress={() => navigate('AccountDetails')}>
          <SettingsOption
            optionText={optionTexts.option1}
            faIcon={faIcons.icon1}
            rhs={<Text style={{ paddingRight: 30 }}>&gt;</Text>}
          />
        </TouchableOpacity>

        <SettingsOption
          optionText={optionTexts.option2}
          faIcon={faIcons.icon2}
          rhs={<Text style={{ paddingRight: 30 }}>&gt;</Text>}
        />

        <TouchableOpacity onPress={() => navigate('EditPills')}>
          <SettingsOption
            optionText={optionTexts.option3}
            faIcon={faIcons.icon3}
            rhs={<Text style={{ paddingRight: 30 }}>&gt;</Text>}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Alexa')}>
          <SettingsOption
            optionText={optionTexts.option4}
            faIcon={faIcons.icon4}
            rhs={<Text style={{ paddingRight: 30 }}>&gt;</Text>}
          />
        </TouchableOpacity>

        <SettingsOption
          optionText={optionTexts.option5}
          faIcon={faIcons.icon5}
          rhs={
            <View style={{ paddingRight: 10 }}>
              <SwitchButton
                toggleSwitch1={this.toggleSwitch1}
                switch1Value={state.switch1Value}
                //onValueChange maybe?
              />
            </View>

          }
        />

        <TouchableOpacity onPress={() => logout()}>
          <SettingsOption
            optionText={optionTexts.option6}
            faIcon={faIcons.icon6}
            rhs={<Text style={{ paddingRight: 30 }}>&gt;</Text>}
          />
        </TouchableOpacity>

        <SettingsTitleBox titleText={titleTexts.title2} />

        <TouchableOpacity onPress={() => navigate('Help')}>
          <SettingsOption
            optionText={optionTexts.option7}
            faIcon={faIcons.icon7}
            rhs={<Text style={{ paddingRight: 30 }}>&gt;</Text>}
          />
        </TouchableOpacity>

        <SettingsOption
          optionText={optionTexts.option8}
          faIcon={faIcons.icon8}
          rhs={<Text style={{ paddingRight: 20 }}>1.0</Text>}
        />
      </ScrollView>
    </View>
  );
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    minHeight: '100%',
  },
});

const darkstyles = styleSheetFactory(theme =>({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  contentContainer: {
    minHeight: '100%',
  },
}));


