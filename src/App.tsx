import React from 'react';
import AppRoutes from 'navigators/appRoutes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppRoutes />
    </SafeAreaProvider>
  );
};

export default App;
