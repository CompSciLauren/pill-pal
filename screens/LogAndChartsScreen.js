import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart, StackedBarChart } from 'react-native-chart-kit';
import useAuth from '../hooks/useAuth';
import useName from '../hooks/useName';
import useWeight from '../hooks/useWeight';
import useLog_Feeling from '../hooks/useLog_Feeling';
const screenWidth = Dimensions.get('window').width;

let emotionData = {
  labels: ['Worried', 'Stressed', 'Sad', 'Tired'],
  datasets: [
    {
      data: [70, 45, 28, 20],
    },
  ],
};

let weightData = {
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
  const weight = useWeight(name);
  const feeling = useLog_Feeling(name);

  var feeling_Response = feeling.feeling;
  var feelNameArr = [];
  var feelIntensityArr = [];

  for(var i = 0; i < feeling_Response.length; i++){
      var b = feeling_Response[i].Display_Name;
      //console.log(b);
      var g = feeling_Response[i].Feeling_Intensity;
      if(!feelNameArr.includes(b)){
          feelNameArr.push(b);
          feelIntensityArr.push(g);
      } else {
          var a = feelNameArr.indexOf(b);
          feelIntensityArr[a] = feelIntensityArr[a] + g;
      }
  }

  var final = new Array(feelNameArr.length);
  for (var i = 0; i < feelNameArr.length; i++) {
    final[i] = new Array();
  }

  for(var i = 0; i < feeling_Response.length; i++){
    var b = feeling_Response[i].Display_Name;
    var g = feeling_Response[i].Feeling_Intensity;
    var a = feelNameArr.indexOf(b);
    if(typeof(g) != undefined){
      final[a].push(g);
    }
  }
  console.log(final);
  console.log("\n\n\n")
  //console.log(feelNameArr);
  //console.log(feelIntensityArr);

  var responseJson = weight.weight;
  var weightArr = [];
  var dateArr = [];

  for(var i = 0; i < responseJson.length; i++){
      var k = responseJson[i].Weight;
      var j = responseJson[i].Date;

      var l = j.substring(0, j.length-14);
      var m = j.substring(5, l.length);
      weightArr.push(k);
      dateArr.push(m);
  }
  //weightArr.push(135);
  //dateArr.push('04-19');
  //weightArr.push(144);
  //dateArr.push('04-20');

  //console.log(weightArr);
  //console.log(dateArr);
  weightData.labels = dateArr;
  weightData.datasets.data = weightArr;
  //console.log(weightData);
  //console.log(weightData.datasets.data);

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
              labels: feelNameArr,
              data: final,
              barColors: ['#33ccff', '#A569BD','#EC7063','#52BE80',''],
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
            width={screenWidth}
            height={250}
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
            data={{
              labels: dateArr,
              datasets: [
                {
                  data: weightArr
                }
              ]
            }}
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
