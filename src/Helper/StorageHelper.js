import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserToken = (key, value) => AsyncStorage.setItem(key, value);
export const getUserToken = (key) => AsyncStorage.getItem(key);
