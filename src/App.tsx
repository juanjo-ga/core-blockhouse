
import * as React from 'react';
import { Navigation } from './components/rootnavigation';
import { Provider } from 'react-redux';
import store from './context/store';




export function App() {

  return (
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
