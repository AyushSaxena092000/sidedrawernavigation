import {View, Text, Settings, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';
import ProfileScreen from './ProfileScreen';
import MessageScreen from './MessageScreen';
import MomentsScreen from './MomentsScreen';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -20},
      }}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../Images/checkbox.png')}
              style={[
                styles.drawerIcon,
                focused ? styles.drawerIconFocused : null,
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../Images/checkbox.png')}
              style={[
                styles.drawerIcon,
                focused ? styles.drawerIconFocused : null,
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../Images/checkbox.png')}
              style={[
                styles.drawerIcon,
                focused ? styles.drawerIconFocused : null,
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../Images/checkbox.png')}
              style={[
                styles.drawerIcon,
                focused ? styles.drawerIconFocused : null,
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Image
              source={require('../Images/checkbox.png')}
              style={[
                styles.drawerIcon,
                focused ? styles.drawerIconFocused : null,
              ]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  drawerIcon: {
    width: 24,
    height: 24,
  },
  drawerIconFocused: {
    tintColor: '#fff',
  },
});
