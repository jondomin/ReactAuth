import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

type Props ={
  size: string,
}

const Spinner = (props: Props) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={props.size || 'large'} />
  </View>
);

export default Spinner;
