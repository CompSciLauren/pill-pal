import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart, StackedBarChart } from 'react-native-chart-kit';
import useWeight from '../hooks/useWeight';
import useAuth from '../hooks/useAuth';
import useName from '../hooks/useName';
const screenWidth = Dimensions.get('window').width;

const emotionData = {
  labels: ['Worried', 'Stressed', 'Sad', 'Tired'],
  datasets: [
    {
      data: [70, 45, 28, 20],
    },
  ],
};

const weightData = {
  labels: ['3/11', '3/14', '3/17', '3/20'],
  datasets: [
    {
      data: [194, 192, 188, 184],
    },
  ],
};

const LogAndChartsScreen = (props) => {
  const userSettings = useAuth();
  let userID = userSettings.user ? userSettings.user.ID : null;
  //console.log(userSettings)
  const { name } = useName(userID);
  const { weightLive } = useWeight(userID);
  let w = weightLive;

  console.log(w);

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.chartH_Container}>
            <Text style={styles.chartH_Text}>Emotion Frequency</Text>
          </View>

          <StackedBarChart
            data={{
              labels: ['Worried', 'Stressed', 'Sad', 'Tired'],
              data: [[70], [45], [28], [20]],
              barColors: ['#33ccff'],
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
            width={screenWidth}
            height={250}
            yAxisSuffix="%"
            chartConfig={{
              backgroundColor: 'blue',
              backgroundGradientFrom: 'blue',
              backgroundGradientTo: 'turquoise',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            fromZero={true}
            showLegend={false}
          />
          <View style={styles.chartH_Container}>
            <Text style={styles.chartH_Text}>Weight Fluctuation</Text>
          </View>
          <LineChart
            style={{ marginVertical: 8, borderRadius: 16 }}
            data={weightData}
            width={screenWidth}
            height={250}
            verticalLabelRotation={0}
            yAxisSuffix=" lbs"
            chartConfig={{
              backgroundColor: 'orange',
              backgroundGradientFrom: 'orange',
              backgroundGradientTo: 'red',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
          />
        </ScrollView>
      </View>
    );
}

LogAndChartsScreen.navigationOptions = {
  title: 'Log/Charts',
};

export default LogAndChartsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chartH_Container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  chartH_Text: {
    fontSize: 20,
    color: 'rgba(70,70,70, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
