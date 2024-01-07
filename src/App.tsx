import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {usePrimaryColor} from './hooks';
import {PageOne, PageTwo} from './screens';

import 'react-native-gesture-handler';
import {MainPage} from './screens/MainPage.tsx';

export type RootStackParamList = {
  PageOne: undefined;
  PageTwo: undefined;
  Profile: undefined;
  Settings: undefined;
  MainPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primaryTextColor, primaryBackgroundColor, barStyle} =
    usePrimaryColor(isDarkMode);

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={primaryBackgroundColor} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'MainPage'}>
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{
              headerShown: false,
            }}
          />
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
              title: '',
              headerStyle: {
                backgroundColor: primaryBackgroundColor,
              },
              headerTintColor: primaryTextColor,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
