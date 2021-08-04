import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreContext } from 'redux-react-hook';
import configureStore from './src/Redux/store';

import Home from './src/screen/Home';
import HomePage from './src/screen/HomePage';
import Settings from './src/screen/Settings';
import Favorite from './src/screen/Favorite';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const store = configureStore();

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
      <Stack.Screen name="設定" component={Settings} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}

function FavoritePage() {
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
      <Stack.Screen name="我的最愛" component={Favorite} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}

function App() {
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
            } else if (route.name === 'Favorite') {
              iconName = 'ios-bookmarks-sharp';
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
        <Tab.Screen name="Favorite" component={FavoritePage} />
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

const MyApp = () => {
  return (
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  );
};

export default MyApp;
