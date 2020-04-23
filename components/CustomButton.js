import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styleSheetFactory } from '../themes/themes';
import { useTheme } from 'react-native-themed-styles';

export function CustomButton(props) {
  const { title } = props;
  const [styles] = useTheme(darkstyles);
  return (
    <View style={styles.customButtonContainer}>
      <View style={styles.customButton}>
        <Text style={styles.customButtonText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    paddingHorizontal: 15,
  },
  customButton: {
    backgroundColor: 'rgb(65, 142, 196)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  customButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
});

const darkstyles = styleSheetFactory((theme) => ({
  customButtonContainer: {
    paddingHorizontal: 15,
  },
  customButton: {
    backgroundColor: 'rgb(65, 142, 196)',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  customButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
}));
