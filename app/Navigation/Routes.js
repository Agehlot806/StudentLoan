import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import CustomTab from './CustomTabs';


const Stack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();

const screenOptions = {headerShown: false, gestureEnabled: true};

const DrawerStackComponet = () => {
    return (
      <DrawerStack.Navigator
        screenOptions={screenOptions}
        drawerContent={props => CustomDrawer(props)}>
        <DrawerStack.Screen name="Drawer" component={CustomTab} />
      </DrawerStack.Navigator>
    );
  };

const Routes = () => {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={'drawer'} component={DrawerStackComponet} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default Routes

const styles = StyleSheet.create({})