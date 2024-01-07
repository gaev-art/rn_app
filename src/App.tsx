import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {useCustomStatusBarStyle} from './hooks';
import {PageOne, PageTwo} from './screens';

import 'react-native-gesture-handler';

export type RootStackParamList = {
  PageOne: undefined;
  PageTwo: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primeBackgroundColor, primeTextColor, barStyle} =
    useCustomStatusBarStyle(isDarkMode);

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={primeBackgroundColor} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'PageOne'}>
          <Stack.Screen
            name="PageOne"
            component={PageOne}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PageTwo"
            component={PageTwo}
            options={{
              // headerShown: false,
              title: '',
              headerStyle: {
                backgroundColor: primeBackgroundColor,
              },
              headerTintColor: primeTextColor,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
