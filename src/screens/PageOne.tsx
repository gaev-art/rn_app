import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from './Profile.tsx';
import {RootStackParamList} from '../App.tsx';
import {Button, useColorScheme} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {usePrimaryColor} from '../hooks';
import {Colors} from '../constants';
import {SettingsIcon, UsersIcon} from '../constants/icons.ts';
import {Settings} from './Settings.tsx';

const Tab = createBottomTabNavigator<RootStackParamList>();
type Props = NativeStackScreenProps<RootStackParamList, 'PageOne'>;

export const PageOne = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primaryTextColor, primaryBackgroundColor} =
    usePrimaryColor(isDarkMode);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: primaryBackgroundColor,
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('PageTwo')}
              title="PageTwo"
              color={primaryTextColor}
            />
          ),
          headerStyle: {
            backgroundColor: primaryBackgroundColor,
          },
          headerTintColor: primaryTextColor,
          tabBarIcon: ({focused}) => (
            <UsersIcon color={focused ? Colors.primary : primaryTextColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <SettingsIcon color={focused ? Colors.primary : primaryTextColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
