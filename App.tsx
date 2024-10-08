import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import AppNavigation from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
