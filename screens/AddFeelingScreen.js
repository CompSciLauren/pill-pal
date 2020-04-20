import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View, Button } from 'react-native';
import { AddSymptomFeelingOption } from '../components/AddSymptomFeelingOption';
import useFeeling from '../hooks/useFeeling';

const { width: WIDTH } = Dimensions.get('window');

const AddFeelingScreen = (props) => {
  const { feeling } = useFeeling();
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.saveButtonContainer}>
          <Button title="Save"></Button>
        </View>
        {feeling.map((feeling) => {
          return (
            <AddSymptomFeelingOption
              key={feeling.ID}
              optionText={feeling.Display_Name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

AddFeelingScreen.navigationOptions = {
  title: 'Add Feelings',
};

export default AddFeelingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
  textContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
  saveButtonContainer: {
    marginTop: 8,
    marginBottom: 20,
    marginLeft: WIDTH - 130,
    width: 100,
  },
  deleteButtonContainer: {
    marginTop: 8,
    marginBottom: 20,
    width: 100,
  },
  headerText: {
    fontSize: 18,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'normal',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    marginTop: 2,
    paddingLeft: 12,
    paddingRight: 5,
    backgroundColor: 'rgba(204, 255, 255, 0.7)',
  },
});
