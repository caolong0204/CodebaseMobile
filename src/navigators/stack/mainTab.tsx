import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { APP_SCREEN } from 'navigators/screenType';
import SettingScreen from 'screens/authen/settingScreen';
import HomeScreen from 'screens/authen/homeScreen';

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName={APP_SCREEN.HOME_SCREEN}>
      <Tab.Screen name={BOTTOM_TAB_ROUTE.home} component={HomeScreen} />

      <Tab.Screen name={BOTTOM_TAB_ROUTE.setting} component={SettingScreen} />
    </Tab.Navigator>
  );
}

export const BOTTOM_TAB_ROUTE = {
  home: 'Trang chủ',
  setting: 'Cài đặt',
};
