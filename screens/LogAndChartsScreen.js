import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class LogAndChartsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text>
            Hi, this is the Log/Charts Screen. It's kinda empty right now.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

LogAndChartsScreen.navigationOptions = {
  title: 'Log/Charts',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
