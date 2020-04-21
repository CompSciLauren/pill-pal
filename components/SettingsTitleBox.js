import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { styleSheetFactory } from "../themes/themes"
import { useTheme } from "react-native-themed-styles"

export function SettingsTitleBox(props) {
  const [styles] = useTheme(darkstyles)
  const { titleText } = props;
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{ titleText }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgba(245, 219, 120, 1)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  titleText: {
    fontSize: 20,
    color: 'rgba(70, 70, 70, 1)',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

const darkstyles = styleSheetFactory(theme => ({
  titleContainer: {
    backgroundColor: theme.backgroundColor,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: theme.shadow,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  titleText: {
    fontSize: 20,
    color: theme.textColor,
    textAlign: 'left',
    fontWeight: 'bold',
  },
}));
