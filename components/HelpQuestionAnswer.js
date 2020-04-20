import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function HelpQuestionAnswer(props) {
  const { question, answer } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Q: { question }</Text>
      <Text style={styles.answer}>A: { answer }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  question: {
    fontWeight: 'bold'
  },
  answer: {
    fontStyle: 'italic'
  }
});
