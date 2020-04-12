import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HelpTextBox } from '../components/HelpTextBox';
import { HelpQuestionAnswer } from '../components/HelpQuestionAnswer';

const titleTexts = {
  title1: 'FAQ',
  title2: 'Contact',
};

const questions = [
  'How can I keep track of my progress?',
  'How can I connect my account to Alexa?',
  'PillPal sounds too good to be true. Are you sure there aren\'t any hidden subscriptions or premium-only features?',
]

const answers = [
  'PillPal allows you to easily view your progress with logs charts! Tap on the "Log/Charts" option at the bottom of the screen.',
  'Go back to "Settings" and follow the instructions under the "Alexa" option.',
  'Nope! All of PillPal\'s features are 100% free.',
]

export default class HelpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HelpTextBox titleText={titleTexts.title1} />
        <View style={styles.textContent}>
          {questions.map((q, i) => <HelpQuestionAnswer question={q} answer={answers[i]} key={i} />)}
        </View>

        <HelpTextBox titleText={titleTexts.title2} />
        <View style={styles.textContent}>
        <Text>You can reach us at support@pillpal.com!</Text>
        </View>
      </View>
    );
  }
}

HelpScreen.navigationOptions = {
  title: 'Help',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContent: {
    margin: 15,
    fontSize: 15,
  },
  question: {
    fontWeight: 'bold'
  },
  answer: {
    fontStyle: 'italic'
  }
});
