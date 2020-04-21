import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

const DATA = [
  {
    id: '0',
    title: '- Get a list of your current pills',
  },
  {
    id: '1',
    title: '- Add a new pill',
  },
  {
    id: '2',
    title: '- Delete a pill',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class AlexaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.bodyText}>
              PillPal has an Alexa skill available. The skill allows you to
              manage your medications and accomplish many of the same tasks you
              might do in the app. You can do things such as:
            </Text>
            <FlatList
              style={styles.bodyText}
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
            />
            <Text style={styles.bodyText}>
              To get started, search for the PillPal skill in your Alexa app.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

AlexaScreen.navigationOptions = {
  title: 'Alexa',
};

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
});
