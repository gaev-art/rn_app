import React from 'react';
import {Button, StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {useCustomStatusBarStyle} from './hooks';
import {PageOne, PageTwo} from './screens';

import 'react-native-gesture-handler';

export type RootStackParamList = {
  PageOne: undefined;
  PageTwo: undefined;
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
              headerStyle: {
                backgroundColor: primeBackgroundColor,
              },
              headerTintColor: primeTextColor,
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color={primeTextColor}
                />
              ),
            }}
          />
          <Stack.Screen
            name="PageTwo"
            component={PageTwo}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
