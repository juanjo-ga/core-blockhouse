import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './components/rootnavigation';

// Asset.loadAsync([
//   ...NavigationAssets,
//   require('./assets/newspaper.png'),
//   require('./assets/bell.png'),
// ]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    


    
    <Navigation/>
    
  );
}
