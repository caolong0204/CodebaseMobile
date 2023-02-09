import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
