import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN, RootNativeStackParamList } from 'navigators/screenType';
import * as React from 'react';
import SettingScreen from 'screens/authen/settingScreen';
import MainTab from './mainTab';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const AuthenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={APP_SCREEN.MAIN_TAB}>
      <Stack.Screen name={APP_SCREEN.MAIN_TAB} component={MainTab} />
      <Stack.Screen
        name={APP_SCREEN.SETTING_SCREEN}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenStack;
