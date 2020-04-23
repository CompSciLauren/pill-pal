import React from 'react';
import { Text } from 'react-native';

export function IntensityOption(props) {
  const { intensityValue, intensitySelected } = props;

  return (
    <Text
      style={{
        fontSize: 14,
        fontWeight: intensitySelected,
        color: 'rgba(70, 70, 70, 1)',
        paddingVertical: 10,
        textAlignVertical: 'center',
      }}
    >
      {intensityValue}
    </Text>
  );
}
