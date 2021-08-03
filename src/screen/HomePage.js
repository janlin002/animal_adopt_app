import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage(props) {
  const passProps = props.route.params.passProps;
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{passProps.shelter_name}</Text>
    </View>
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
