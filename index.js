import {AppRegistry, View, StatusBar, AppState} from 'react-native';
import {name as appName} from './app.json';
import React, {useEffect, useRef} from 'react';
import Stacks from './Stacks';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import {persistor} from './app/redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {useHomeIndicatorHeight} from './react-native-xUtils';

const JJ = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      //
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar
            translucent={true}
            barStyle="dark-content"
          />
          <Stacks />
          <View style={{height: useHomeIndicatorHeight()}} />
        </View>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => JJ);
