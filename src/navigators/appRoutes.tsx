import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import UnAuthenStack from './stack/unAuthenStack';
import AuthenStack from './stack/authenStack';
import { StatusBar } from 'react-native';
import { Host } from 'react-native-portalize';
const AppRoutes = () => {
  const isSignIn = true;
  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <Host>{!isSignIn ? AuthenStack() : UnAuthenStack()}</Host>
      </>
    </NavigationContainer>
  );
};

export default AppRoutes;
