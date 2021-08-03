import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screen/Home';
import HomePage from './src/screen/HomePage';
import Settings from './src/screen/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#005AB5',
        },
        headerTintColor: '#fff',
        headerBackTitle: '返回',
      })}
    >
      <Stack.Screen name="領養檔案" component={Home} />
      <Stack.Screen name="領養資訊" component={HomePage} />
    </Stack.Navigator>
  );
}

function SettingPage() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#005AB5',
        },
        headerTintColor: '#fff',
        headerBackTitle: '返回',
      })}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = 'ios-settings';
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#005AB5',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
