import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import {usePrimaryColor} from '../hooks';
import {RootStackParamList} from '../App.tsx';
import {AccordionsPage, BottomTabPage} from './index.ts';
import {Colors} from '../constants';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const drawerData: {
  component: () => React.JSX.Element;
  name: keyof RootStackParamList;
  label: string;
}[] = [
  {name: 'BottomTabPage', component: BottomTabPage, label: 'BottomTabPage'},
  {name: 'AccordionsPage', component: AccordionsPage, label: 'AccordionsPage'},
];

export const MainPage = () => {
  const {primaryTextColor, primaryBackgroundColor} = usePrimaryColor();
  return (
    <Drawer.Navigator
      initialRouteName={'BottomTabPage'}
      drawerContent={props => {
        return (
          <View style={styles.container}>
            <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                <View style={styles.drawerSection}>
                  <DrawerItemList {...props} />
                </View>
              </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
              <TouchableWithoutFeedback onPress={() => console.log('onPress')}>
                <Text style={[styles.signOutBtn, {color: primaryTextColor}]}>
                  Sign Out
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        );
      }}
      screenOptions={{
        drawerActiveBackgroundColor: primaryBackgroundColor,
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: primaryTextColor,
        drawerStyle: {
          backgroundColor: primaryBackgroundColor,
        },
        sceneContainerStyle: {
          backgroundColor: primaryBackgroundColor,
        },
        headerStyle: {
          backgroundColor: primaryBackgroundColor,
        },
        headerTintColor: primaryTextColor,
      }}>
      {drawerData.map(drawerItem => (
        <Drawer.Screen
          key={drawerItem.name}
          name={drawerItem.name}
          component={drawerItem.component}
          options={{
            drawerLabel: drawerItem.label,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: 15,
    marginBottom: 15,
    borderTopColor: Colors.white,
    borderTopWidth: 1,
  },
  signOutBtn: {
    marginRight: 20,
  },
});
