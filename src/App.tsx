import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './components/rootnavigation';
import { Provider } from 'react-redux';
import store from './context/store';

// Asset.loadAsync([
//   ...NavigationAssets,
//   require('./assets/newspaper.png'),
//   require('./assets/bell.png'),
// ]);

SplashScreen.preventAutoHideAsync();

export function App() {


  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
