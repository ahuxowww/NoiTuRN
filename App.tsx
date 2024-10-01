import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import AppNavigation from './src/navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
