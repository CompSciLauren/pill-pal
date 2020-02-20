import React, { Component } from 'react'
import { View, Switch } from 'react-native'

export default SwitchButton = (props) => {
   return (
      <View>
         <Switch
          onValueChange = {props.toggleSwitch1}
          value = {props.switch1Value}
         />
      </View>
   )
}
