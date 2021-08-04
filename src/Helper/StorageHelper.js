import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserChoose = (key, value) => AsyncStorage.setItem(key, value);
export const getUserChoose = (key) => AsyncStorage.getItem(key);
// export const removeUserChoose = ()
