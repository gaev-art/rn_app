import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {usePrimaryColor} from '../hooks';
import {RootStackParamList} from '../App.tsx';
import {PageOne, PageTwo} from './index.ts';
import {Colors} from '../constants';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const drawerData = [
  {name: 'PageTwo', component: PageTwo, label: 'Page Two'},
];

export const MainPage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {primaryTextColor, primaryBackgroundColor} =
    usePrimaryColor(isDarkMode);
  return (
    <Drawer.Navigator
      initialRouteName={'PageOne'}
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
      <Drawer.Screen
        name={'PageOne'}
        component={PageOne}
        options={{
          drawerLabel: 'one',
          // headerTitle: () => (
          //   <Logo width={150} height={1} style={styles.logo} />
          // ),
        }}
      />
      <Drawer.Screen
        name={'PageTwo'}
        component={PageTwo}
        options={{
          drawerLabel: 'two',
          // headerTitle: () => (
          //   <Logo width={150} height={1} style={styles.logo} />
          // ),
        }}
      />
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
