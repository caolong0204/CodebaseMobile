import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN, RootNativeStackParamList } from 'navigators/screenType';
import * as React from 'react';
import SignInScreen from 'screens/unAuthen/signInScreen';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const UnAuthenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
      }}>
      <Stack.Screen name={APP_SCREEN.LOGIN_SCREEN} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthenStack;
