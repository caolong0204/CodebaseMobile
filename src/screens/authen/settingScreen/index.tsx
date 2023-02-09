import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
