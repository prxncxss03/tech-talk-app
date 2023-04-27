import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStorage(key) {
  return new Promise(async (resolve, reject) => {
    try {
      let value = await AsyncStorage.getItem(key);
      try {
        var parsedVal = JSON.parse(value);
        resolve(parsedVal);
      } catch {
        resolve(value);
      }
    } catch (ex) {
      reject(ex);
    }
  });
}

export async function setStorage(key, value) {
  return new Promise(async (resolve, reject) => {
    try {
      value = typeof value == 'object' ? JSON.stringify(value) : value;
      await AsyncStorage.setItem(key, value);
      resolve();
    } catch (ex) {
      reject(ex);
    }
  });
}