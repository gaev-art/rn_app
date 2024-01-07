import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from './Profile.tsx';
import {Settings} from './Settings.tsx';
import {RootStackParamList} from '../App.tsx';
import {Button, useColorScheme} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {useCustomStatusBarStyle} from '../hooks';

const Tab = createBottomTabNavigator<RootStackParamList>();
type Props = NativeStackScreenProps<RootStackParamList, 'PageOne'>;

export const PageOne = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primeTextColor, primeBackgroundColor} =
    useCustomStatusBarStyle(isDarkMode);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('PageTwo')}
              title="PageTwo"
              color={primeTextColor}
            />
          ),
          headerStyle: {
            backgroundColor: primeBackgroundColor,
          },
          headerTintColor: primeTextColor,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
