import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, Settings} from './index.ts';
import {RootStackParamList} from '../App.tsx';
import {Colors} from '../constants';
import {SettingsIcon, UsersIcon} from '../constants/icons.ts';

import {SvgProps} from 'react-native-svg';
import {usePrimaryColor} from '../hooks';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const tabData: {
  component: () => React.JSX.Element;
  name: keyof RootStackParamList;
  icon: React.FC<SvgProps>;
}[] = [
  {name: 'Profile', component: Profile, icon: UsersIcon},
  {name: 'Settings', component: Settings, icon: SettingsIcon},
];

export const BottomTabPage = () => {
  const {primaryTextColor, primaryBackgroundColor} = usePrimaryColor();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: primaryBackgroundColor,
        },
      }}>
      {tabData.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <tab.icon color={focused ? Colors.primary : primaryTextColor} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
