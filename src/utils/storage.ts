// Create an auth storage since we arent using a real API



import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/User';

const AUTH_KEY = 'AUTH_STATE';

export const saveAuthState = async (user: User) => {
  try {
    const jsonValue = JSON.stringify({ user, isAuthenticated: true });
    await AsyncStorage.setItem(AUTH_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save auth state', e);
  }
};

export const loadAuthState = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(AUTH_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to load auth state', e);
    return null;
  }
};

export const clearAuthState = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_KEY);
  } catch (e) {
    console.error('Failed to clear auth state', e);
  }
};