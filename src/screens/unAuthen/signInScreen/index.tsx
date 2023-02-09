import { AppConfig } from 'common/configs/appConfig';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <Text>{AppConfig.API_URL}</Text>
      <Text>{AppConfig.APP_DISPLAY_TEST}</Text>
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
