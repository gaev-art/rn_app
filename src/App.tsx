import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {usePrimaryColor} from './hooks';

import 'react-native-gesture-handler';
import {MainPage} from './screens';
import {CharacterDetails} from './screens/RickAndMorty/CharacterDetails.tsx';

export type RootStackParamList = {
  BottomTabPage: undefined;
  AccordionsPage: undefined;
  Profile: undefined;
  Settings: undefined;
  MainPage: undefined;
  RickAndMorty: undefined;
  CharacterDetails: {characterId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const {primaryBackgroundColor, barStyle} = usePrimaryColor();

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
              // title: '',
              // headerStyle: {
              //   backgroundColor: primaryBackgroundColor,
              // },
              // headerTintColor: primaryTextColor,
            }}
          />
          <Stack.Screen
            name="CharacterDetails"
            component={CharacterDetails}
            options={{
              // headerShown: false,
              title: '',
              headerStyle: {
                backgroundColor: primaryBackgroundColor,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
