import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './Components/Common/Header';
import LibraryList from './Components/LibraryList';

const App = () => (
        <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
        <Header headerText='Tech stack redux' />
        <LibraryList />
        </View>
        </Provider>
      
    );
 
export default App;
